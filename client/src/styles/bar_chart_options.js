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
                let a = 123;
                return `${d.datasets[t.datasetIndex].label[0]}: ${d.datasets[t.datasetIndex].data[0]}`
            }
        }
    }
};