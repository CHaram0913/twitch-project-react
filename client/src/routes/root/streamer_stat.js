import React, { Component, Fragment } from 'react';
import { withStyles } from 'material-ui/styles';
import GameStat from './../../containers/game_stat';
import StreamStat from './../../containers/stream_stat';

const styles = theme => ({
    root: {}
});

class StreamerStat extends Component {
    render() {
        return (
            <Fragment>
                <GameStat />
                <StreamStat />
            </Fragment>
        )
    }
}

export default withStyles(styles)(StreamerStat);