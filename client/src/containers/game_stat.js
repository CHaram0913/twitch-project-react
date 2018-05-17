import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import _ from 'lodash';

import { withStyles } from 'material-ui/styles';
import { Paper, Grid, GridList, GridListTile, GridListTileBar, Hidden } from 'material-ui';
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

    render() {
        const { gamelist } = this.props;
        const { classes } = this.props;
        if (!gamelist.data) {
            return <div>Fetching gamelist...</div>;
        }
        let game_art_data = GameData((_.sortBy(gamelist.data, 'count')).reverse());

        return (

            <Grid container spacing={8} className={classes.root} direction='row-reverse' alignItems='center'>
                
                <Grid item xs={12} md={12} lg={5} zeroMinWidth>
                    <Paper className={classes.gamelist} elevation={4}>
                        <GridList cellHeight={200} cols={4}>
                            {game_art_data.map(game => 
                                <GridListTile key={game.title}>
                                    <img src={game.img} alt={game.title}  />
                                    <GridListTileBar 
                                        title={game.title} 
                                        // subtitle={`Time: ${game.duration} \n View: ${game.viewer}`}
                                        className={classes.tile_bar}
                                    />
                                </GridListTile>
                            )}
                        </GridList>
                    </Paper>
                </Grid>

                <Hidden xsDown>
                    <Grid item xs={12} md={6} lg={true} zeroMinWidth>
                        <Paper className={classes.pie} elevation={4}>
                            <Doughnut data={PieStreamTime(gamelist.data)} options={pie_time_option}/>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6} lg={true} zeroMinWidth>
                        <Paper className={classes.pie} elevation={4}>
                            <Doughnut data={PieAverageView(gamelist.data)} options={pie_view_option}/>  
                        </Paper>
                    </Grid>
                </Hidden>

            </Grid>

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