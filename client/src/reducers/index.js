import { combineReducers } from 'redux';
import SelectedStreamerReducer from './reducer_selected_stream';
import SelectedModeReducer from './reducer_selected_mode';
import GameListReducer from './reducer_game_list';
import StreamListReducer from './reducer_stream_list';

const rootReducer = combineReducers({
    streamerName : SelectedStreamerReducer,
    mode : SelectedModeReducer,
    gamelist : GameListReducer,
    streamlist : StreamListReducer
});

export default rootReducer;