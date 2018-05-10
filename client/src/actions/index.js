import axios from 'axios';
import { streamerArray } from './../resource/streamerArray';
import { STREAMER_SELECTED, MODE_SELECTED, FETCH_GAME_STAT, FETCH_STREAM } from './types';

const SERVER_URL = 'localhost:8000/';


export function streamSelect(streamerIndex) {
    return {
        type: STREAMER_SELECTED,
        payload: streamerArray[streamerIndex]
    };
};

export function modeSelect(something) {
    return {
        type: MODE_SELECTED,
        // CHANGE
        payload: something
    }
}

export function fetchGameStat(collectionName, mode) {
    const request = axios.get(`${SERVER_URL}gamelist/${collectionName}/${mode}`);

    return {
        type: FETCH_GAME_STAT,
        payload: request
    };
};

export function fetchStreamStat(collectionName) {
    const request = axios.get(`${SERVER_URL}allStream/${collectionName}`);

    return {
        type: FETCH_STREAM,
        payload: request
    };
}

