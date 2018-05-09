import axios from 'axios';

export const FETCH_GAME_STAT = 'fetch_game_stat';

export default function fetchGameStat(collectionName, mode) {
    const request = axios.get(`http://localhost:8000/gamelist/${collectionName}/${mode}`);

    return {
        type: FETCH_GAME_STAT,
        payload: request
    };
};

