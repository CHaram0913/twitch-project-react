import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGameStat } from './../actions/index';

class GameStat extends Component {
    componentDidMount() {
        this.props.fetchGameStat(this.props.streamerName, 'week');
    }

    // componentDidUpdate() {
    //     this.props.fetchGameStat(this.props.streamerName, 'week');
    // }

    render() {
        console.log(this.props.streamerName);
        return (
            <div>
                Haha
            </div>
        );
    }
};

function mapStateToProps(state) {
    return { 
        gamelist : state.gamelist,
        streamerName : state.streamerName
    }
}

export default connect (mapStateToProps, { fetchGameStat }) (GameStat);