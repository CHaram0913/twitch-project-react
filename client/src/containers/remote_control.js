import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

import { withStyles } from 'material-ui/styles';
import remoteControlStyles from './../styles/remote_control_styles';
import { Paper, Popover, Button } from 'material-ui';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';
import RemoteIcon from '@material-ui/icons/Timelapse';
import UpIcon from '@material-ui/icons/ArrowUpward';


import periodArray from './../resource/periodArray';
import { modeSelect, fetchStreamStatus } from './../actions/index';

class RemoteControl extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            check : 'month', 
            anchorEl : null
        }

        this.onSelection = this.onSelection.bind(this);
        this.openPopover = this.openPopover.bind(this);
        this.closePopover = this.closePopover.bind(this);
        this.createStatusButton = this.createStatusButton.bind(this);
    }

    onSelection(event, value) {
        this.props.modeSelect(value);
        this.setState({ check : value });
    }

    componentDidUpdate(prevProps) {
        if ((prevProps.streamerName === this.props.streamerName) && (prevProps.mode === this.props.mode)) {
        } else {
            this.props.fetchStreamStatus(this.props.streamerName);
        }
    }

    componentDidMount() {
        this.props.modeSelect(this.state.check);
    }

    openPopover(event) {
        this.setState({
            anchorEl : event.currentTarget
        });
    }

    closePopover(event) {
        this.setState({
            anchorEl : null
        });
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    createStatusButton(status) {
        try {
            if (status.data.status === 'LIVE') {
                return (
                    <Button 
                        variant="raised" 
                        href={`https://www.twitch.tv/${this.props.streamerName}`}
                        target='_blank'
                        className={this.props.classes.live_link_online}
                    >
                        LIVE
                    </Button>
                )
            } else {
                return (
                    <Button 
                        variant="raised" 
                        className={this.props.classes.live_link_offline}
                    >
                        OFFLINE
                    </Button>
                )
            }
        } catch (e) {
            return (
                <div />
            )
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Button
                    className={classes.scrollTopButton}
                    variant='fab'
                    color='secondary'
                    onClick={this.scrollToTop}
                >
                    <UpIcon />
                </Button>
                <Button 
                    className={classes.remoteButton}
                    variant='fab' 
                    color='primary'
                    onClick={this.openPopover}
                >
                    <RemoteIcon />
                </Button>
                <Popover
                    open={Boolean(this.state.anchorEl)}
                    anchorEl={this.state.anchorEl}
                    onClose={this.closePopover}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center'
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                >
                    <Paper className={classes.remotePaper}>
                        <FormControl component='fieldset' required className={classes.formControl}>
                            <FormLabel component='legend'>Time Period</FormLabel>
                            <RadioGroup
                                aria-label='time'
                                name='search_period_selection'
                                className={classes.group}
                                value={this.state.check}
                                onChange={this.onSelection}
                            >
                                {periodArray.map(time_periods => 
                                    <FormControlLabel 
                                        key={time_periods} 
                                        value={time_periods} 
                                        control={<Radio />} 
                                        label={time_periods}
                                    />
                                )}
                            </RadioGroup>
                            {this.createStatusButton(this.props.status)}
                        </FormControl>
                    </Paper>
                </Popover>
            </Fragment>
        );
    };
}

function mapStateToProps(state) {
    return {
        streamerName : state.streamerName,
        mode : state.mode,
        status : state.status
    }
}

export default withStyles (remoteControlStyles) (connect (mapStateToProps, { modeSelect, fetchStreamStatus }) (RemoteControl));