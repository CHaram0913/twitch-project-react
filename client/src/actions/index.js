import axios from 'axios';
import { streamerArray } from './../resource/streamerArray';

export const FETCH_GAME_STAT = 'fetch_game_stat';
export const STREAMER_SELECTED = 'streamer_selected';

export function streamSelect(streamerIndex) {
    return {
        type: STREAMER_SELECTED,
        payload: streamerArray[streamerIndex]
    };
};

export function fetchGameStat(collectionName, mode) {
    const request = axios.get(`http://localhost:8000/gamelist/${collectionName}/${mode}`);

    return {
        type: FETCH_GAME_STAT,
        payload: request
    };
};

