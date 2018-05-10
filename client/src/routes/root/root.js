import React, { Component, Fragment } from 'react';
import { withStyles } from 'material-ui/styles';
import TopMenu from './../../containers/top_menu';
import RemoteControl from './../../containers/remote_control';
import GameStat from './../../containers/game_stat';
import StreamStat from './../../containers/stream_stat';

const styles = theme => ({
    root: {}
});

class Root extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu />
                <RemoteControl />
                <GameStat />
                <StreamStat />
            </Fragment>
        )
    }
}

export default withStyles(styles)(Root);