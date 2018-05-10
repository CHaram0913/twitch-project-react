import { MODE_SELECTED } from './../actions/types';

// INITIAL STATE = ALL?
export default function(state = {}, action) {
    switch (action.type) {
    case MODE_SELECTED:
        return action.payload;
    default:
        return state;
    }
};