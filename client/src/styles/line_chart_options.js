import moment from 'moment-timezone';

export default {
    legend: {
        display: true,
        width: '12px',
        labels: {
            fontColor: 'rgba(252, 255, 255, 0.9)',
            fontSize: 14
        },
        position: 'bottom'
    },
    scales: {
        border: '1px',
        yAxes: [{
            id: 'Views',
            position: 'left',
            display: true,
            gridLines: {
                display: false,
                color: 'rgba(252, 255, 255, 0.9)',
                lineWidth: 2,
                drawTicks: false,
                zeroLineWidth: 2,
                zeroLineColor: 'rgba(252, 255, 255, 0.9)'
            },
            ticks: {display: false}
        }, {
            id: 'Follows',
            position: 'right',
            display: true,
            gridLines: {
                display: false,
                color: 'rgba(252, 255, 255, 0.9)',
                lineWidth: 2,
                drawTicks: false,
                zeroLineWidth: 2,
                zeroLineColor: 'rgba(252, 255, 255, 0.9)'
            },
            ticks: {display: false}
        }],
        xAxes: [{
            position: 'top',
            gridLines: {
                display: false,
                color: 'rgba(252, 255, 255, 0.9)',
                lineWidth: 2,
                drawTicks: false,
                zeroLineWidth: 2,
                zeroLineColor: 'rgba(252, 255, 255, 0.9)'
            },
            type: 'time',
            time: {
                unit: 'hour',
                millisecond: 'h:mm a'
            },
            ticks: {
                callback: function(t) {
                    return t;
                },
                fontColor: 'rgba(252, 255, 255, 0.9)',
                fontSize: 14
            }
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