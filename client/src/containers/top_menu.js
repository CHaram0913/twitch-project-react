import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import { Paper, Tabs } from 'material-ui';
import { Tab } from 'material-ui/Tabs';
import topMenuStyles from './../styles/top_menu_styles';

import { streamerArrayKR, streamerArray } from './../resource/streamerArray';
import { streamSelect } from './../actions/index';

class TopMenu extends Component {
    constructor(props) {
        super(props);

        this.state = { index : 0 };

        this.onSelection = this.onSelection.bind(this);
    }

    componentDidMount() {
        this.props.streamSelect(this.state.index);
    }

    onSelection = streamers => async (event, value) => {
        this.props.streamSelect(streamers);
        this.setState({ index : streamers });
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Tabs
                    value={this.state.index}
                    indicatorColor="#FFEBEE"
                    centered
                    className={classes.tabs}
                >
                    {streamerArrayKR.map((streamers, index) => 
                        <Tab to={`/streamers?streamer=${streamerArray[index]}`} component={Link} key={streamers} label={streamers} onClick={this.onSelection(index)} className={classes.tab} />
                    )}
                </Tabs>      
            </Paper>
        );
    }
}

function mapStateToProps(state) {
    return { 
        mode : state.mode
    }
}


export default withStyles (topMenuStyles) (connect (mapStateToProps, { streamSelect }) (TopMenu));