import { put, call, takeEvery } from 'redux-saga/effects';
import {
    LOGINPLAYER_VERIFICATION,
    LOGINPLAYER_VERIFICATION_SUCCESS,
    LOGINPLAYER_VERIFICATION_PENDING,
    LOGINPLAYER_VERIFICATION_ERROR
} from './types';

import {
    loginPlayerVerificationList
} from '../../services/functional';

function* loginPlayerOTPData({param, fn}) { 
    try {
        yield put({ type: LOGINPLAYER_VERIFICATION_PENDING });
        const response = yield call(loginPlayerVerificationList.loginPlayerVerificationList, param);
        yield put( {
            type: LOGINPLAYER_VERIFICATION_SUCCESS,
            data: response.data,
        });
        fn(response.data);
    } catch (error) {
        yield put({
            type: LOGINPLAYER_VERIFICATION_ERROR,
            error: error
        })
        fn(error);
    }
}

export function* watchLoginPlayerVerification() {  
    yield takeEvery(LOGINPLAYER_VERIFICATION, loginPlayerOTPData);
}