import { combineReducers } from 'redux';
import GameListReducer from './reducer_game_list';
import SelectedStreamerReducer from './reducer_selected_stream';

const rootReducer = combineReducers({
    gamelist: GameListReducer,
    streamerName: SelectedStreamerReducer
});

export default rootReducer;