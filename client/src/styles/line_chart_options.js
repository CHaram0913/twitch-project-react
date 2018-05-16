import moment from 'moment-timezone';

export default {
    maintainAspectRatio: false,
    legend: {
        display: true,
        width: '12px',
        labels: {
            fontColor: 'rgba(252, 255, 255, 0.9)',
            fontSize: 14
        },
        position: 'bottom'
    },
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }
    },
    elements: {
        point: {
            pointStyle: 'star',
            radius: 5
        },
        line: {
            fill: false,
            tension: 0.2,
            borderCapStyle: 'round',
        }
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
            position: 'bottom',
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
                fontSize: 14,
                maxRotation: 0,
                minRotation: 0,
                padding: 5
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