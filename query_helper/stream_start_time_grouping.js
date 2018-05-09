function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while (i--) arr[length -1 - i] = createArray.apply(this, args);
    }

    return arr;
}

const sort_stream_time = (docs) => {
    let streamArray2D = createArray(docs.length, 0);
    let j = 0;
    let prev;
    let cur;

    for (let i = 0; i < docs.length; i++){
        if (i === 0) {
            prev = docs[i];
            streamArray2D[j].push(docs[i]._id);
        } else {
            cur = docs[i];
            if (cur._id - prev.end_time < 3 * 60 * 60 * 1000) {
                streamArray2D[j].push(cur._id);
                prev = cur;
            } else {
                j++ ;
                streamArray2D[j].push(cur._id);
                prev = cur;
            }
        }
    }

    let streamStartTimeArray = streamArray2D.filter(function(sub) {
        return sub.length;
    });

    return streamStartTimeArray;
};

module.exports = { sort_stream_time };

