import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Line, HorizontalBar } from 'react-chartjs-2';
import moment from 'moment-timezone';
import _ from 'lodash';

import { withStyles } from 'material-ui/styles';
import { Paper, Typography, Grid, Hidden } from 'material-ui';
import streamStatStyles from './../styles/stream_stat_styles';

import { fetchStreamStat } from './../actions/index';

import { barData, lineData } from './../components/stream_graphs';
import BarChartOption from './../styles/bar_chart_options';
import LineChartOption from './../styles/line_chart_options';


class StreamStat extends Component {
    componentDidUpdate(prevProps) {
        if ((prevProps.streamerName === this.props.streamerName) && (prevProps.mode === this.props.mode)) {
        } else {
            this.props.fetchStreamStat(this.props.streamerName, this.props.mode);
        }
    }

    convertCount(singleStream) {
        let min = singleStream.map(stream => stream.count).reduce((acc, val) => acc + val) * 10 ;
        let hours = Math.floor(min / 60);
        let minutes = min % 60;

        if (hours === 0) {
            return `${minutes} minutes`;
        } else {
            return `${hours} hours ${minutes} minutes`;
        }
    }

    averageView(singleStream) {
        let viewerArray = [];
        for (let i = 0; i < singleStream.length; i++) {
            for (let j = 0; j < singleStream[i].at_time.length; j++) {
                viewerArray.push(singleStream[i].at_time[j].viewer_count);
            }
        }
        let averageViewer = Math.floor(viewerArray.reduce((acc, val) => acc + val) / viewerArray.length) ;
        return averageViewer;
    }

    followDifference(singleStream) {
        let follower_at_start = singleStream[0].at_time[0].follower_count ;
        let follower_at_end = singleStream[singleStream.length - 1].at_time[singleStream[singleStream.length - 1].at_time.length - 1].follower_count ;

        return follower_at_end - follower_at_start ;
    }

    render() {
        const { streamlist } = this.props;
        
        if (!streamlist.data) {
            return <div>Fetching streamlist...</div>;
        }

        const streamStatGraph = (streamArray) => {
            const { classes } = this.props;

            let graphArray = [];
            for (let i = 0; i < streamArray.length; i++){
                
                const generate_game_list = (singleStream) => {
                    return _.uniq(singleStream.map(stream => stream._id.game_name));
                };

                graphArray.push (
                    <Paper className={classes.root} elevation={5} key={i}>
                        <Grid container spacing={8} className={classes.container} direction='row-reverse' alignItems='center'>
                            
                            <Grid item xs={12} zeroMinWidth>
                                <Paper className={classes.title} elevation={2}>
                                    <Typography variant='title' className={classes.title_text}>
                                        {`Stream at: ${moment(streamArray[i][0].start_time).tz('Asia/Seoul').format('(YYYY MMM DD) hh:mm a')}`}
                                    </Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} md={2} zeroMinWidth >
                                <Paper className={classes.detail} elevation={0}>
                                    <Typography className={classes.detail_title}>
                                        Stream Stat
                                    </Typography>
                                    <Typography className={classes.detail_subtitle}>
                                        Games Played:
                                    </Typography>
                                    {generate_game_list(streamArray[i]).map(game => 
                                        <Typography className={classes.detail_component} key={game}>
                                            {game}
                                        </Typography>
                                    )}
                                    <Typography className={classes.detail_subtitle}>
                                        Stream Length:
                                    </Typography>
                                    <Typography className={classes.detail_component}>
                                        {this.convertCount(streamArray[i])}
                                    </Typography>
                                    <Typography className={classes.detail_subtitle}>
                                        Average Viewers:
                                    </Typography>
                                    <Typography className={classes.detail_component}>
                                        {`${this.averageView(streamArray[i])} viewers`}
                                    </Typography>
                                    <Typography className={classes.detail_subtitle}>
                                        Followers Gained:
                                    </Typography>
                                    <Typography className={classes.detail_component}>
                                        {`${this.followDifference(streamArray[i])} more followers!`}
                                    </Typography>
                                </Paper>
                            </Grid>
                            
                            <Hidden xsDown>
                                <Grid item xs={12} md={10} zeroMinWidth>
                                    <Paper className={classes.bar} elevation={0}>
                                        <HorizontalBar data={barData(streamArray[i])} options={BarChartOption(streamArray[i])} />
                                    </Paper>

                                    <Paper className={classes.line} elevation={0}>
                                        <Line data={lineData(streamArray[i])} height={300} options={LineChartOption} />
                                    </Paper>
                                </Grid>
                            </Hidden>

                        </Grid>
                    </Paper>
                )
            }
            return graphArray;
        };

        return (
            <Fragment>
                {streamStatGraph(streamlist.data)}
            </Fragment>
        );
    }
};

function mapStateToProps(state) {
    return {
        streamerName : state.streamerName,
        mode : state.mode,
        streamlist : state.streamlist
    }
}

export default withStyles (streamStatStyles) (connect (mapStateToProps, { fetchStreamStat }) (StreamStat));