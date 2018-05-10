import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';
import { Paper, Tabs } from 'material-ui';
import { Tab } from 'material-ui/Tabs';
import topMenuStyles from './../styles/top_menu_styles';

import { streamerArrayKR } from './../resource/streamerArray';
import { streamSelect } from './../actions/index';

class TopMenu extends Component {
    constructor(props) {
        super(props);

        this.state = { index : null };

        this.onSelection = this.onSelection.bind(this);
    }

    onSelection(event, value) {
        this.props.streamSelect(value);
        this.setState({ index : value });
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Tabs
                    value={this.state.index}
                    onChange={this.onSelection}
                    indicatorColor="#FFEBEE"
                    centered
                    className={classes.tabs}
                >
                    {streamerArrayKR.map(streamers => 
                        <Tab key={streamers} label={streamers} className={classes.tab} />
                    )}
                </Tabs>      
            </Paper>
        );
    }
}

export default withStyles (topMenuStyles) (connect (null, {streamSelect}) (TopMenu));