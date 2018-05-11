import axios from 'axios';
import { streamerArray } from './../resource/streamerArray';
import { STREAMER_SELECTED, MODE_SELECTED, FETCH_GAME_STAT, FETCH_STREAM } from './types';

export function streamSelect(streamerIndex) {
    return {
        type: STREAMER_SELECTED,
        payload: streamerArray[streamerIndex]
    };
};

export function modeSelect(mode) {
    return {
        type: MODE_SELECTED,
        payload: mode
    };
};

export function fetchGameStat(collectionName, mode) {
    return async dispatch => {
        let response = await axios.get(`/api/gamelist/${collectionName}/${mode}`);

        dispatch({
            type : FETCH_GAME_STAT,
            payload : response
        });
    };    
};

export function fetchStreamStat(collectionName) {
    return async dispatch => {
        let response = await axios.get(`/api/allStream/${collectionName}`);

        dispatch({
            type : FETCH_STREAM, 
            payload : response
        });
    };
};

