/**
 * Root
 * */
import RootRoute from './root/root';
import StreamerStat from './root/streamer_stat';

/**
 * Exports
 * */

const mainRoutes = [
    {
        path: '/',
        component:RootRoute,
        wrapper:''
    },
    {
        path: '/streamers',
        component:StreamerStat,
        wrapper:''
    }
];

export{
    mainRoutes
}