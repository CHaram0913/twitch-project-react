export default {
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            stacked: true,
            display: false
        }],
        yAxes: [{
            stacked: true,
            display: false
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
    }
};