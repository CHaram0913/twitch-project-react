import { combineReducers } from 'redux';
import GameListReducer from './reducer_game_list';

const rootReducer = combineReducers({
    gamelist: GameListReducer
});

export default rootReducer;