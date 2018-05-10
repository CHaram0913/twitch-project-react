import { FETCH_STREAM } from './../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
    case FETCH_STREAM:
        return action.payload;
    default:
        return state;
    }
};