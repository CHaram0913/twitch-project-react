import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { withStyles } from 'material-ui/styles';
import { Paper, Tabs } from 'material-ui';
import { Tab } from 'material-ui/Tabs';
// import { topMenuStyles } from './../styles/top_menu_styles';

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
        return (
            <Paper>
                <Tabs
                    value={this.state.index}
                    onChange={this.onSelection}
                    centered
                >
                    {streamerArrayKR.map(streamers => 
                        <Tab key={streamers} label={streamers} />
                    )}
                </Tabs>      
            </Paper>
        );
    }
}

export default connect (null, {streamSelect}) (TopMenu);