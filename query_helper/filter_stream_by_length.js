const filterStreamByLength = (streamsArray) => {
    let longEnoughStream = [];
    for (let i = 0; i < streamsArray.length; i++) {
        let fullCount = streamsArray[i].map(stream => stream.count).reduce((acc, val) => acc + val);
        
        if (fullCount > 14) {
            longEnoughStream.push(streamsArray[i]);
        }
    }
    return longEnoughStream;
};

module.exports = { filterStreamByLength };