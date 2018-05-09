const express = require('express');
const mongoose = require('mongoose');
const expressSession = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const envResult = require('dotenv').config();
const {createLogger, format, transports} = require('winston');
const {combine, timestamp, label, prettyPrint} = format;
const CONFIGS = process.env.ENV === 'prod' ?
    require('./configs/production') :
    process.env.ENV === 'dev' ?
        require('./configs/development') :
        require('./configs/default');


const { LogSchema } = require('./models/LogSchema');

// Aggregation Pipelines
const { game_list_aggregate } = require('./aggregates/game_list_aggregate');
const { each_stream_aggregate } = require('./aggregates/stream_aggregate');
const { start_end_time_aggregate } = require('./aggregates/start_end_time_aggregate')

// Query Helper Functions
const { getStartTimeComp } = require('./query_helper/get_start_time_comparison');
const { sort_stream_time } = require('./query_helper/stream_start_time_grouping')

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

app.get('/allStream/:collectionName', async (req, res) => {
    let collectionName = req.params.collectionName;
    let List = mongoose.model(`${collectionName}_logs`, LogSchema);
    
    try {
        let startEndTimes = await List.aggregate(start_end_time_aggregate);
        let streamStartTimeArray = sort_stream_time(startEndTimes);

        let allStreamGrouped = [];
        for (let i = 0; i < streamStartTimeArray.length; i++) {
            let docs = await List.aggregate(each_stream_aggregate(streamStartTimeArray[i]));
            allStreamGrouped.push(docs);
        }

        res.send(allStreamGrouped);
    } catch(e) {
        res.status(400).send(e.message);
    }
});

app.get('/gamelist/:collectionName/:mode', async (req, res) => {
    let collectionName = req.params.collectionName;
    let mode = req.params.mode;
    let List = mongoose.model(`${collectionName}_logs`, LogSchema);
    let start_time_comparison = getStartTimeComp(mode);

    try {
        let docs = await List.aggregate(game_list_aggregate(start_time_comparison));
        if (docs[0]) {
            res.send(docs);
        } else {
            throw new Error ('Cannot find matching data');
        }
    } catch (e) {
        res.status(400).send(e.message);
    }
});

/**
 * Start
 * */
app.listen(CONFIGS.PORT, () => {
    logger.info(`Server Running at PORT : ${CONFIGS.PORT}`);
});