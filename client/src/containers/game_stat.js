import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchGameStat from './../actions/index';

class GameStat extends Component {
    componentDidMount() {
        this.props.fetchGameStat('yapyap30', 'week');
    }

    render() {
        console.log(this.props.gamelist);
        return (
            <div>
                Haha
            </div>
        );
    }
};

function mapStateToProps(state) {
    return { gamelist : state.gamelist }
}

export default connect (mapStateToProps, { fetchGameStat }) (GameStat);