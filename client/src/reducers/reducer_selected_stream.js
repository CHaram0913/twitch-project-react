import { STREAMER_SELECTED } from './../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
    case STREAMER_SELECTED:
        return action.payload;
    default:
        return state;
    }
};