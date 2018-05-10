import React, { Component, Fragment } from 'react';
import { withStyles } from 'material-ui/styles';
import GameStat from './../../containers/game_stat';
import TopMenu from './../../containers/top_menu';

const styles = theme => ({
    root: {}
});

class Root extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu />
                <GameStat />
            </Fragment>
        )
    }
}

export default withStyles(styles)(Root);