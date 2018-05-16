export const pie_time_option = {
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
    tooltips: {
        callbacks: {
            title: function(t, d){
                return 'Game Played: Total';
            },
            label: function(t, d) {
                let minuteTotal = d.datasets[0].data[t.index] * 10;
                let hours = Math.floor(minuteTotal / 60);
                let minutes = minuteTotal % 60;
                if (hours === 0) {
                    return `${d.labels[t.index]}: ${minutes}min`;
                } else {
                    return `${d.labels[t.index]}: ${hours}hr ${minutes}min`;
                }
                
            }
        }
    },
    title: {
        text: 'Games Played: Total Duration',
        position: 'bottom',
        fontColor: 'rgba(252, 255, 255, 0.9)',
        display: true,
        fontSize: 16
    }
};

export const pie_view_option = {
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
    tooltips: {
        callbacks: {
            title: function(t, d){
                return 'Game Played: Average View';
            }
        }
    },
    title: {
        text: 'Games Played: Average Viewers',
        position: 'bottom',
        fontColor: 'rgba(252, 255, 255, 0.9)',
        display: true,
        fontSize: 16
    }
};