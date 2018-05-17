export default (theme) => ({
    scrollTopButton: {
        position: 'fixed',
        right: '85px',
        bottom: '15px'
    },
    remoteButton: {
        position: 'fixed',
        right: '15px',
        bottom: '15px'
    },
    remotePaper: {
        display: 'flex',
        width: '145px',
        height: 'auto'
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0px`,
    },
    live_link_online: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#1AFF66',
        '&:hover': {
            backgroundColor: '#B3FFCC',
        }
    },
    live_link_offline: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#FF3333',
        '&:hover': {
            backgroundColor: '#FF3333'
        }
    }
});