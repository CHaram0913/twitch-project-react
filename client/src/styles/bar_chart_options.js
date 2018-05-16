export default function (props) {
    let max = props.map(count => count.count).reduce((acc, val) => acc + val);
    return {
        maintainAspectRatio: false,
    legend: {
        display: false
    },
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }
    },
    scales: {
        xAxes: [{
            stacked: true,
            display: false,
            ticks: {
                beginAtZero: true,
                maxTicksLimit: 2,
                max: max
            }
        }],
        yAxes: [{
            stacked: true,
            display: false,
            maxBarThickness: 90
        }]
    },
    tooltips: {
        mode: 'point',
        position: 'nearest',
        callbacks: {
            title: function(t, d){
                return d.datasets[t[0].datasetIndex].label[1];
            },
            label: function(t, d) {
                let minuteTotal = d.datasets[t.datasetIndex].data[0] * 10;
                let hours = Math.floor(minuteTotal / 60);
                let minutes = minuteTotal % 60;
                if (hours === 0) {
                    return `${d.datasets[t.datasetIndex].label[0]}: ${minutes}min`;
                } else {
                    return `${d.datasets[t.datasetIndex].label[0]}: ${hours}hr ${minutes}min`;
                }
                
            }
        }
    }}
};