import React from 'react';
import {withStyles} from 'material-ui/styles';
import GameStat from './../../containers/game_stat';

const styles = theme => ({
    root: {}
});

class Root extends React.Component {
    render() {
        return (
            <div>
                <GameStat />
            </div>
        )
    }
}

export default withStyles(styles)(Root);