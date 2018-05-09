const moment = require('moment-timezone');

const getStartTimeComp = (mode) => {
    if (mode === 'day') {
        // Setting the base as Korea, today at 00:00:00
        let currentDateKorea = moment().tz('Asia/Seoul').format('YYYYMMDD');
        let dateKorea = `${currentDateKorea}T000000`;
        let KoreaUTC = Number(moment(dateKorea).format('x'));
        let dateUTC = KoreaUTC - 9 * 60 * 60 * 1000;

        return dateUTC - 24 * 60 * 60 * 1000;
    } else if (mode === 'week') {
        let currentDateKorea = moment().tz('Asia/Seoul').format('YYYYMMDD');
        let dateKorea = `${currentDateKorea}T000000`;
        let KoreaUTC = Number(moment(dateKorea).format('x'));
        let dateUTC = KoreaUTC - 9 * 60 * 60 * 1000;

        return dateUTC - 7 * 24 * 60 * 60 * 1000;

    } else if (mode === 'month') {
        let currentDateKorea = moment().tz('Asia/Seoul').format('YYYYMMDD');
        let dateKorea = `${currentDateKorea}T000000`;
        let KoreaUTC = Number(moment(dateKorea).format('x'));
        let dateUTC = KoreaUTC - 9 * 60 * 60 * 1000;

        return dateUTC - 30 * 24 * 60 * 60 * 1000;

    } else if (mode === 'all') {

        return 0;
    }
}

module.exports = { getStartTimeComp };