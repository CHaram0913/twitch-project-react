const _ = require('lodash');

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while (i--) arr[length -1 - i] = createArray.apply(this, args);
    }

    return arr;
}

const slice_aggregate = (singleStream) => {

    let jump = createArray(singleStream.length, 0);
    for (let i = 0; i < singleStream.length; i++) {
        let prev = 0;
    
        for (let j = 0; j < singleStream[i].at_time.length; j++) {
            if (singleStream[i].at_time[j].log_time - prev > 25 * 60 * 1000) {
                prev = singleStream[i].at_time[j].log_time;
                if (j !== 0) {
                    jump[i].push({i, j})
                }
            } else {
                prev = singleStream[i].at_time[j].log_time;
            }
        }
    }

    const separate_at_time = (stream_array, jumpArray) => {
        let at_time_one = stream_array.at_time;
        let newArray = createArray(jumpArray.length + 1, 0);
        let j = 0;
    
        for (let i = 0; i < at_time_one.length; i++) {
            if (i === 0) {
                newArray[j].push(at_time_one[i]);
            } else {
                if (j < jumpArray.length) {
                    if (at_time_one[i].log_time < at_time_one[jumpArray[j].j].log_time) {
                        newArray[j].push(at_time_one[i]);
                    } else if (at_time_one[i].log_time === at_time_one[jumpArray[j].j].log_time){
                        j++ ;
                        newArray[j].push(at_time_one[i]);
                    }
                } else if (j === jumpArray.length) {
                    newArray[j].push(at_time_one[i]);
                }
    
            }
        }
    
        return newArray;
    }

    let finalArray = [];
    let finalFinal = [];
    let sortJump = jump.filter(function(sub) {
        return sub.length;
    });

    if (sortJump.length > 0) {
        for (let i = 0; i < singleStream.length; i++) {
            if (jump[i]) {
                finalArray.push(separate_at_time(singleStream[i], jump[i]));
            } else {
                finalArray.push(singleStream[i]);
            }
            
        }
        for (let i = 0; i < finalArray.length; i++) {
            for (let j = 0; j < finalArray[i].length; j++) {
                finalFinal.push({
                    _id: {
                        game_name: singleStream[i]._id.game_name,
                        stream_title: singleStream[i]._id.stream_title
                    },
                    count: finalArray[i][j].length,
                    start_time: finalArray[i][j][0].log_time,
                    game_art: singleStream[i].game_art,
                    at_time: finalArray[i][j]
                })
            }
        }

        return (_.sortBy(finalFinal, 'start_time'));
    
    } else {
        return singleStream;
    }
};

module.exports = { slice_aggregate };