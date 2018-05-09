import { FETCH_GAME_STAT } from './../actions/index';

export default function(state = {}, action) {
    switch (action.type) {
    case FETCH_GAME_STAT:
        return action.payload;
    default:
        return state;
    }
};