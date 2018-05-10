import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';
import remoteControlStyles from './../styles/remote_control_styles';
import { Paper, Popover, Button } from 'material-ui';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';
import Icon from 'material-ui/Icon';


import periodArray from './../resource/periodArray';
import { modeSelect } from './../actions/index';

class RemoteControl extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            check : 'all', 
            anchorEl : null
        }

        this.onSelection = this.onSelection.bind(this);
        this.openPopover = this.openPopover.bind(this);
        this.closePopover = this.closePopover.bind(this);
    }

    onSelection(event, value) {
        this.props.modeSelect(value);
        this.setState({ check : value });
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
    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Button 
                    className={classes.remoteButton}
                    variant='fab' 
                    color='primary'
                    onClick={this.openPopover}
                >
                    <Icon>edit_icon</Icon>
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
                                    <FormControlLabel key={time_periods} value={time_periods} control={<Radio />} label={time_periods} />
                                )}
                            </RadioGroup>
                        </FormControl>
                    </Paper>
                </Popover>
            </Fragment>
        );
    }
}

export default withStyles (remoteControlStyles) (connect (null, {modeSelect}) (RemoteControl));