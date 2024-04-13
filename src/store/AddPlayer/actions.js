import { ADD_PLAYER, DELETE_PLAYER, UPDATE_PLAYER_NAME, UPDATE_PLAYER_UPI } from './types';

export function addPlayer(param, fn) {
    return {
        type: ADD_PLAYER,
        param,
        fn,
    }
}

export function deletePlayer(param, fn) {
    return {
        type: DELETE_PLAYER,
        param,
        fn,
    }
}

export function updatePlayerName(param, fn) {
    return {
        type: UPDATE_PLAYER_NAME,
        param,
        fn,
    }
}

export function updatePlayerupi(param, fn) {
    return {
        type: UPDATE_PLAYER_UPI,
        param,
        fn,
    }
}