import { MODE_SELECTED } from './../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
    case MODE_SELECTED:
        return action.payload;
    default:
        return state;
    }
};