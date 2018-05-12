import _ from 'lodash';

import { colorSet, setColor } from './../resource/colorArray';

export default function(props) {
    const colorArray = setColor(_.map(props, '_id'), colorSet);

    const data = {
        labels: _.map(props, '_id'),
        datasets: [{
            data: _.map(props, 'average_view'),
            backgroundColor: colorArray,
            hoverBackgroundColor: colorArray
        }]
    }

    return data;
};