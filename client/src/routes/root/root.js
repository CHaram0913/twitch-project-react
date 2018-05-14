import React, { Component, Fragment } from 'react';
import { withStyles } from 'material-ui/styles';
// import Welcome from './../../components/welcome';
import GameStat from './../../containers/game_stat';
import StreamStat from './../../containers/stream_stat';

const styles = theme => ({
    root: {}
});

class Root extends Component {
    render() {
        return (
            <Fragment>
                <GameStat />
                <StreamStat />
            </Fragment>
            // <Welcome />
        )
    }
}

export default withStyles(styles)(Root);