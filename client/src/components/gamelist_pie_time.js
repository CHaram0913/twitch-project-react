import _ from 'lodash';

import { colorSet, setColor } from './../resource/colorArray';

const convertCountToMinute = (count) => {
    return count * 12;
}

export default function(props) {
    const colorArray = setColor(_.map(props, '_id'), colorSet);

    const data = {
        labels: _.map(props, '_id'),
        datasets: [{
            data: _.map(props, 'count'),
            backgroundColor: colorArray,
            hoverBackgroundColor: colorArray
        }]
    }

    return data;
};