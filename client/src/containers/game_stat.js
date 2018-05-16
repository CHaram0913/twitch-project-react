import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import _ from 'lodash';

import { withStyles } from 'material-ui/styles';
import { Paper, GridList, GridListTile } from 'material-ui';
import gameStatStyles from './../styles/game_stat_styles';

import { fetchGameStat } from './../actions/index';

import PieStreamTime from './../components/gamelist_pie_time';
import PieAverageView from './../components/gamelist_pie_viewer';
import { pie_time_option, pie_view_option } from './../styles/pie_chart_options';
import GameData from './../components/gamelist_image_data';

class GameStat extends Component {
    componentDidUpdate(prevProps) {
        if ((prevProps.streamerName === this.props.streamerName) && (prevProps.mode === this.props.mode)) {
        } else {
            this.props.fetchGameStat(this.props.streamerName, this.props.mode);
        }
    }

    imageClick(game_name) {
        // console.log(game_name);
    }

    render() {
        const { gamelist } = this.props;
        const { classes } = this.props;
        if (!gamelist.data) {
            return <div>Fetching gamelist...</div>;
        }
        let game_art_data = GameData((_.sortBy(gamelist.data, 'count')).reverse());

        return (
            <Paper className={classes.root} elevation={5}>

                <Paper className={classes.pie} elevation={0}>
                    <Doughnut data={PieAverageView(gamelist.data)} options={pie_view_option}/>
                </Paper>

                <Paper className={classes.pie} elevation={0}>
                    <Doughnut data={PieStreamTime(gamelist.data)} options={pie_time_option}/>
                </Paper>

                <Paper className={classes.gamelist} elevation={0}>
                    <GridList cellHeight={170} className={classes.gridList} cols={4}>
                        {game_art_data.map(game => 
                            <GridListTile key={game.title}>
                            <div className={classes.img} onClick={this.imageClick(game.title)}>
                                <img src={game.img} alt={game.title} />
                            </div>
                            </GridListTile>
                        )}
                    </GridList>
                </Paper>
            </Paper>
        );
    }
};

function mapStateToProps(state) {
    return { 
        streamerName : state.streamerName,
        mode : state.mode,
        gamelist : state.gamelist
    }
}

export default withStyles (gameStatStyles) (connect (mapStateToProps, { fetchGameStat }) (GameStat));