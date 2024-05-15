import { put, call, takeEvery } from 'redux-saga/effects';
import {
    WITHDRAW_PLAYERINFORMATION,
    WITHDRAW_PLAYERINFORMATION_SUCCESS,
    WITHDRAW_PLAYERINFORMATION_PENDING,
    WITHDRAW_PLAYERINFORMATION_ERROR,
    WITHDRAW_APPROVE_PLAYERINFORMATION,
    WITHDRAW_APPROVE_PLAYERINFORMATION_SUCCESS,
    WITHDRAW_APPROVE_PLAYERINFORMATION_PENDING,
    WITHDRAW_APPROVE_PLAYERINFORMATION_ERROR,
    WITHDRAW_DECLINE_PLAYERINFORMATION,
    WITHDRAW_DECLINE_PLAYERINFORMATION_SUCCESS,
    WITHDRAW_DECLINE_PLAYERINFORMATION_PENDING,
    WITHDRAW_DECLINE_PLAYERINFORMATION_ERROR
} from './types';

import {
    withdrawPlayerList, withdrawApprovePlayerList,withdrawDeclinePlayerList
} from '../../services/functional';

function* withdrawPlayerInformationData({param, fn}) { 
    try {
        yield put({ type: WITHDRAW_PLAYERINFORMATION_PENDING });
        const response = yield call(withdrawPlayerList.withdrawPlayerList, param);
        yield put( {
            type: WITHDRAW_PLAYERINFORMATION_SUCCESS,
            data: response.data,
        });
    fn(response.data)
    } catch (error) {
        yield put({
            type: WITHDRAW_PLAYERINFORMATION_ERROR,
            error: error
        })
    fn(error);  
    }
}

function* withdrawApprovePlayerInformationData({param, fn}) { 
    try {
        yield put({ type: WITHDRAW_APPROVE_PLAYERINFORMATION_PENDING });
        const response = yield call(withdrawApprovePlayerList.withdrawApprovePlayerList, param);
        yield put( {
            type: WITHDRAW_APPROVE_PLAYERINFORMATION_SUCCESS,
            data: response.data,
        });
    fn(response.data);
    } catch (error) {
        yield put({
            type: WITHDRAW_APPROVE_PLAYERINFORMATION_ERROR,
            error: error
        })
    fn(error);  
    }
}

function* withdrawDeclinePlayerInformationData({param, fn}) { 
    try {
        yield put({ type: WITHDRAW_DECLINE_PLAYERINFORMATION_PENDING });
        const response = yield call(withdrawDeclinePlayerList.withdrawDeclinePlayerList, param);
        yield put( {
            type: WITHDRAW_DECLINE_PLAYERINFORMATION_SUCCESS,
            data: response.data,
        });
    fn(response.data);
    } catch (error) {
        yield put({
            type: WITHDRAW_DECLINE_PLAYERINFORMATION_ERROR,
            error: error
        })
    fn(error);  
    }
}

export function* watchWithdrawPlayerInformation() {  
    yield takeEvery(WITHDRAW_PLAYERINFORMATION, withdrawPlayerInformationData);
}

export function* watchWithdrawApprovePlayerInformation() {  
    yield takeEvery(WITHDRAW_APPROVE_PLAYERINFORMATION, withdrawApprovePlayerInformationData);
}

export function* watchWithdrawDeclinePlayerInformation() {  
    yield takeEvery(WITHDRAW_DECLINE_PLAYERINFORMATION, withdrawDeclinePlayerInformationData);
}