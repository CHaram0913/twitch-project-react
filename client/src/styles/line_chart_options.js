import moment from 'moment-timezone';

export default {
    legend: {
        display: true,
        width: '12px'
    },
    scales: {
        border: '1px',
        yAxes: [{
            id: 'Views',
            position: 'left',
            display: true,
            gridLines: {display: false},
            ticks: {display: false}
        }, {
            id: 'Follows',
            position: 'right',
            display: true,
            gridLines: {display: false},
            ticks: {display: false}
        }],
        xAxes: [{
            gridLines: {display: false},
            type: 'time',
            time: {
                unit: 'hour',
                millisecond: 'h:mm a'
            },
            ticks: {
                callback: function(t) {
                    return t;
                }
            },
            color: 'rgba(0, 0, 0, 1)'
        }]
    },
    tooltips: {
        callbacks: {
            title: function(t, d) {
                return moment(d.labels[t[0].index]).tz('Asia/Seoul').format('YYYY MMM DD, hh:mm:ss a') ;
            }
        },
        mode: 'index',
        position: 'nearest'
    }
};