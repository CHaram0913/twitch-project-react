const express = require('express');
const mongoose = require('mongoose');
const expressSession = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const envResult = require('dotenv').config();
const {createLogger, format, transports} = require('winston');
const {combine, timestamp, label, prettyPrint} = format;
const path = require('path');
const moment = require('moment');

const CONFIGS = process.env.ENV === 'prod' ?
    require('./configs/production') :
    process.env.ENV === 'dev' ?
        require('./configs/development') :
        require('./configs/default');


const { LogSchema } = require('./models/LogSchema');

// Aggregation Pipelines
const { start_end_time_aggregate } = require('./aggregates/start_end_time_aggregate');
const { game_list_aggregate } = require('./aggregates/game_list_aggregate');
const { each_stream_aggregate } = require('./aggregates/stream_aggregate');
const { game_list_aggregate_exception } = require('./aggregates/game_list_aggregate_exception');

// Query Helper Functions
const { getStartTimeComp } = require('./query_helper/get_start_time_comparison');
const { sort_stream_time } = require('./query_helper/stream_start_time_grouping');
const { slice_aggregate } = require('./query_helper/slice_stream_aggregate');
const { filterStreamByLength } = require('./query_helper/filter_stream_by_length');

/**
 * Logger Setting
 * */
const logger = createLogger({
    format: combine(
        // label({label:'label test'}),
        timestamp(),
        prettyPrint()
    ),
    transports: [new transports.Console()]
});

const app = express();

/**
 * Mongo Setup
 * */
mongoose.Promise = global.Promise;
mongoose.connect(CONFIGS.MONGO_URI);

/**
 * Middlewares
 * */
app.use(bodyParser.json());
app.use(expressSession({
    secret: CONFIGS.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: process.env.ENV === 'prod' ?
        {
            secure: true,
            maxAge: CONFIGS.SESSION_LIFE
        } :
        {
            maxAge: CONFIGS.SESSION_LIFE
        }
}));

app.get('/api/status/:collectionName', async (req, res) => {
    let collectionName = req.params.collectionName;
    let List = mongoose.model(`${collectionName}_logs`, LogSchema);

    try {
        let docs = await List.find();
        let latest_log_time = docs.reverse()[0].log_time;

        if (moment().valueOf() - latest_log_time < 600000) {
            let button_status = {
                status: 'LIVE'
            };
            res.send(button_status);
            
        } else {
            let button_status = {
                status: 'OFFLINE'
            };
            res.send(button_status);
        }

    } catch (e) {
        res.status(400).send(e.message);
    }
});

app.get('/api/allStream/:collectionName/:mode', async (req, res) => {
    let collectionName = req.params.collectionName;
    let mode = req.params.mode;
    let List = mongoose.model(`${collectionName}_logs`, LogSchema);

    try {
        let startEndTimes = await List.aggregate(start_end_time_aggregate);
        let streamStartTimeArray = sort_stream_time(startEndTimes);

        let allStreamGrouped = [];
        for (let i = 0; i < streamStartTimeArray.length; i++) {
            let docs = await List.aggregate(each_stream_aggregate(streamStartTimeArray[i]));
            let docs_sliced = slice_aggregate(docs)
            allStreamGrouped.push(docs_sliced);
        }
        let filteredStreams = filterStreamByLength(allStreamGrouped.reverse());

        if (mode === 'day') {
            res.send(filteredStreams.slice(0, 1)); 
        } else if (mode === 'week' && filteredStreams.length > 6) {
            res.send(filteredStreams.slice(0, 7)); 
        } else if (mode === 'month' && filteredStreams.length > 29) {
            res.send(filteredStreams.slice(0, 30)); 
        } else {
            res.send(filteredStreams); 
        }
        
    } catch(e) {
        res.status(400).send(e.message);
    }
});

app.get('/api/gamelist/:collectionName/:mode', async (req, res) => {
    let collectionName = req.params.collectionName;
    let mode = req.params.mode;
    let List = mongoose.model(`${collectionName}_logs`, LogSchema);
    let start_time_comparison = getStartTimeComp(mode);

    try {
        let docs = await List.aggregate(game_list_aggregate(start_time_comparison));
        if (docs[0]) {
            res.send(docs);
        } else if (!docs[0]){
            let startEndTimes = await List.aggregate(start_end_time_aggregate);
            let streamStartTimeArray = sort_stream_time(startEndTimes);
            let mostRecentStream = streamStartTimeArray[streamStartTimeArray.length - 1];
            let docs_recent_stream = await List.aggregate(game_list_aggregate_exception(mostRecentStream));
            
            res.send(docs_recent_stream);
        } else {
            throw new Error ('Cannot find matching data');
        }
    } catch (e) {
        res.status(400).send(e.message);
    }
});

if(process.env.ENV ==='prod'){
    app.use(express.static(path.resolve(__dirname, 'client', 'build')))
    
    app.get('*', (req,res) => {
        res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


/**
 * Start
 * */
app.listen(CONFIGS.PORT, () => {
    logger.info(`Server Running at PORT : ${CONFIGS.PORT}`);
});