import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Line, HorizontalBar } from 'react-chartjs-2';

import { fetchStreamStat } from './../actions/index';

import { barData, lineData } from './../components/stream_graphs';
import BarChartOption from './../styles/bar_chart_options';
import LineChartOption from './../styles/line_chart_options';

class StreamStat extends Component {
    componentDidUpdate(prevProps) {
        if ((prevProps.streamerName === this.props.streamerName) && (prevProps.mode === this.props.mode)) {
        } else {
            this.props.fetchStreamStat(this.props.streamerName);
        }
    }

    render() {
        const { streamlist } = this.props;
        
        if (!streamlist.data) {
            return <div>Fetching streamlist...</div>;
        }

        const streamStatGraph = (streamArray) => {
            // streamArray.map(function (item, index) {
            //     return (
            //         <div>
            //             <HorizontalBar data={barData(item)} options={BarChartOption} />
            //             <Line data={lineData(item)} options={LineChartOption} />
            //         </div>
            //     )
            // });
            let graphArray = [];
            for (let i = 0; i < streamArray.length; i++){
                graphArray.push (
                    <div key={i}>
                        {/* <Paper> */}
                            <HorizontalBar  data={barData(streamArray[i])} options={BarChartOption} />
                            <Line  data={lineData(streamArray[i])} options={LineChartOption} />
                        {/* </Paper> */}
                    </div>
                )
            }
            return graphArray;
        };

        return (
            <Fragment>
                {streamStatGraph(streamlist.data)}
            </Fragment>
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