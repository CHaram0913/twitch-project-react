import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';

import { fetchGameStat } from './../actions/index';

import PieStreamTime from './../components/gamelist_pie_time';
import PieAverageView from './../components/gamelist_pie_viewer';
import PieChartOption from './../styles/pie_chart_options';

class GameStat extends Component {
    componentDidUpdate(prevProps) {
        if ((prevProps.streamerName === this.props.streamerName) && (prevProps.mode === this.props.mode)) {
        } else {
            this.props.fetchGameStat(this.props.streamerName, this.props.mode);
        }
    }

    render() {
        const { gamelist } = this.props;
        if (!gamelist) {
            return <div>Fetching gamelist...</div>;
        }
        return (
            <div>
                <Doughnut data={PieStreamTime(gamelist.data)} options={PieChartOption}/>
                <Doughnut data={PieAverageView(gamelist.data)} options={PieChartOption}/>
            </div>
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

export default connect (mapStateToProps, { fetchGameStat }) (GameStat);