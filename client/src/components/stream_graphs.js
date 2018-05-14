import { colorSet, setColor } from './../resource/colorArray';

const digestProps = (props) => {
    let game_name = [];
    let stream_title = [];
    let count = [];
    let game_art = [];
    let viewer_count = [];
    let follower_count = [];
    let log_time = [];

    for (let i = 0; i < props.length; i++) {
        game_name.push(props[i]._id.game_name);
        stream_title.push(props[i]._id.stream_title);
        count.push(props[i].count);
        game_art.push(props[i].game_art);
    
        for (let j = 0; j < props[i].at_time.length; j++){
            viewer_count.push(props[i].at_time[j].viewer_count);
            follower_count.push(props[i].at_time[j].follower_count);
            log_time.push(props[i].at_time[j].log_time);
        }
    }

    return {
        game_name,
        stream_title,
        count,
        game_art,
        viewer_count,
        follower_count,
        log_time
    }
};

const createDatasets = (label, count, color) => {
    let datasetArray = [];
    for (let i = 0; i < label.length; i++) {
        let dataset = {
            label: label[i],
            data: [count[i]],
            backgroundColor: color[i],
            hoverBackgroundColor: color[i]
        };
        datasetArray.push(dataset);
    }
    return datasetArray;
}

export function barData(props) {
    const streamData = digestProps(props);
    const colorArray = setColor(streamData.game_name, colorSet);
    const datasetsArray = createDatasets(streamData.game_name, streamData.count, colorArray);
    
    const data = {
        labels: ['Game Played'],
        datasets: datasetsArray
    };

    return data;
};

export function lineData(props) {
    const streamData = digestProps(props);
    const data = {
        labels: streamData.log_time,
        datasets: [{
            label: 'Viewers',
            yAxisID: 'Views',
            fill: false,
            lineTension: 0.2,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgb(102, 153, 255)',
            borderCapStyle: 'round',
            data: streamData.viewer_count
        }, {
            label: 'Followers',
            yAxisID: 'Follows',
            fill: false,
            lineTension: 0.2,
            backgroundColor: 'rgb(255, 26, 179)',
            borderColor: 'rgb(255, 153, 221)',
            borderCapStyle: 'round',
            data: streamData.follower_count
        }]
    };

    return data;
};
