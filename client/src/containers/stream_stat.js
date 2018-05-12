import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreamStat } from './../actions/index';

class StreamStat extends Component {
    componentDidUpdate(prevProps) {
        if ((prevProps.streamerName === this.props.streamerName) && (prevProps.mode === this.props.mode)) {
        } else {
            this.props.fetchStreamStat(this.props.streamerName);
        }
    }

    render() {
        const { streamlist } = this.props;
        if (!streamlist) {
            return <div>Fetching streamlist...</div>;
        }
        return (
            <div>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        streamerName : state.streamerName,
        streamlist : state.streamlist
    }
}

export default connect (mapStateToProps, { fetchStreamStat }) (StreamStat);