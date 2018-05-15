import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';

import { withStyles } from 'material-ui/styles';
import { Paper, GridList, GridListTile, GridListTileBar } from 'material-ui';
import gameStatStyles from './../styles/game_stat_styles';

import { fetchGameStat } from './../actions/index';

import PieStreamTime from './../components/gamelist_pie_time';
import PieAverageView from './../components/gamelist_pie_viewer';
import { pie_time_option, pie_view_option } from './../styles/pie_chart_options';

class GameStat extends Component {
    componentDidUpdate(prevProps) {
        if ((prevProps.streamerName === this.props.streamerName) && (prevProps.mode === this.props.mode)) {
        } else {
            this.props.fetchGameStat(this.props.streamerName, this.props.mode);
        }
    }

    render() {
        const { gamelist } = this.props;
        const { classes } = this.props;
        if (!gamelist.data) {
            return <div>Fetching gamelist...</div>;
        }
        let game_art_array = [];
        for (let i = 0; i < gamelist.data.length; i++) {
            let width_replaced = gamelist.data[i].game_art.replace(/{width}/g, 130);
            let replaced = width_replaced.replace(/{height}/g, 170);
            game_art_array.push(replaced);
        }
        return (
            <Paper className={classes.root}>
                <Paper className={classes.pie}>
                    <Doughnut data={PieStreamTime(gamelist.data)} options={pie_time_option}/>
                </Paper>

                <Paper className={classes.pie}>
                    <Doughnut data={PieAverageView(gamelist.data)} options={pie_view_option}/>
                </Paper>

                <Paper className={classes.gamelist}>
                    <GridList cellHeight={180} className={classes.gridList}>
                        <GridListTile key='Subheader' cols={3} style={{ height: 'auto'}}>
                        </GridListTile>
                        {gamelist.data.map(game => {
                            <GridListTile key={game._id}>
                                <img 
                                    src={game.game_art.replace(/{width}|{height}/g, function(match){
                                        return (match==='{width}') ? 130 : 170;
                                    })} 
                                    alt={game._id} 
                                />
                                <GridListTileBar
                                    title={game._id}
                                />
                            </GridListTile>
                        })}
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