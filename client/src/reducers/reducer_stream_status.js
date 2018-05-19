import { FETCH_STREAM_STATUS } from './../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
    case FETCH_STREAM_STATUS:
        return action.payload;
    default:
        return state;
    }
};