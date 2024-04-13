import { put, call, takeEvery } from 'redux-saga/effects';
import {
    ADD_PLAYER,
    ADD_PLAYER_SUCCESS,
    ADD_PLAYER_PENDING,
    ADD_PLAYER_ERROR,
    DELETE_PLAYER,
    DELETE_PLAYER_SUCCESS,
    DELETE_PLAYER_PENDING,
    DELETE_PLAYER_ERROR,
    UPDATE_PLAYER_NAME,
    UPDATE_PLAYER_NAME_SUCCESS,
    UPDATE_PLAYER_NAME_PENDING,
    UPDATE_PLAYER_NAME_ERROR,
    UPDATE_PLAYER_UPI,
    UPDATE_PLAYER_UPI_SUCCESS,
    UPDATE_PLAYER_UPI_PENDING,
    UPDATE_PLAYER_UPI_ERROR
} from './types';

import {
    addPlayerList,
    deletePlayerList,
    updatePlayerName,
    updatePlayerupi
} from '../../services/functional';

function* addPlayerData({param, fn}) { 
    try {
        yield put({ type: ADD_PLAYER_PENDING });
        const response = yield call(addPlayerList.addPlayerList, param);
        yield put( {
            type: ADD_PLAYER_SUCCESS,
            data: response,
        });
        fn(response);
    } catch (error) {
        yield put({
            type: ADD_PLAYER_ERROR,
            error: error
        })
        fn(error);
    }
}

function* deletePlayerData({param, fn}) { 
    try {
        yield put({ type: DELETE_PLAYER_PENDING });
        const response = yield call(deletePlayerList.deletePlayerList, param);
        yield put( {
            type: DELETE_PLAYER_SUCCESS,
            data: response.data,
        });
        fn(response.data);
    } catch (error) {
        yield put({
            type: DELETE_PLAYER_ERROR,
            error: error
        })
        fn(error);
    }
}

function* updatePlayernameData({param, fn}) { 
    try {
        yield put({ type: UPDATE_PLAYER_NAME_PENDING });
        const response = yield call(updatePlayerName.updatePlayerName, param);
        yield put( {
            type: UPDATE_PLAYER_NAME_SUCCESS,
            data: response.data,
        });
        fn(response.data);
    } catch (error) {
        yield put({
            type: UPDATE_PLAYER_NAME_ERROR,
            error: error
        })
        fn(error);
    }
}

function* updatePlayerupiData({param, fn}) { 
    try {
        yield put({ type: UPDATE_PLAYER_UPI_PENDING });
        const response = yield call(updatePlayerupi.updatePlayerupi, param);
        yield put( {
            type: UPDATE_PLAYER_UPI_SUCCESS,
            data: response.data,
        });
        fn(response.data);
    } catch (error) {
        yield put({
            type: UPDATE_PLAYER_UPI_ERROR,
            error: error
        })
        fn(error);
    }
}

export function* watchAddPlayer() {  
    yield takeEvery(ADD_PLAYER, addPlayerData);
}

export function* watchDeletePlayer() {  
    yield takeEvery(DELETE_PLAYER, deletePlayerData);
}

export function* watchUpdatePlayername() {  
    yield takeEvery(UPDATE_PLAYER_NAME, updatePlayernameData);
}

export function* watchUpdatePlayerupi() {  
    yield takeEvery(UPDATE_PLAYER_UPI, updatePlayerupiData);
}