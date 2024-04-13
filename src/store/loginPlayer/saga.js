import { put, call, takeEvery } from 'redux-saga/effects';
import {
    LOGINPLAYER,
    LOGINPLAYER_SUCCESS,
    LOGINPLAYER_PENDING,
    LOGINPLAYER_ERROR
} from './types';

import {
    loginPlayerList
} from '../../services/functional';

function* loginPlayerData({param, fn}) { 
    try {
        yield put({ type: LOGINPLAYER_PENDING });
        const response = yield call(loginPlayerList.loginPlayerList, param);
        yield put( {
            type: LOGINPLAYER_SUCCESS,
            data: response.data,
        });
        fn(response.data);
    } catch (error) {
        yield put({
            type: LOGINPLAYER_ERROR,
            error: error
        })
        fn(error);
    }
}

export function* watchLoginPlayer() {  
    yield takeEvery(LOGINPLAYER, loginPlayerData);
}