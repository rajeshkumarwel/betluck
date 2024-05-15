import { put, call, takeEvery } from 'redux-saga/effects';
import {
    DEPOSIT_PLAYERINFORMATION,
    DEPOSIT_PLAYERINFORMATION_SUCCESS,
    DEPOSIT_PLAYERINFORMATION_PENDING,
    DEPOSIT_PLAYERINFORMATION_ERROR,
    DEPOSIT_APPROVE_PLAYERINFORMATION,
    DEPOSIT_APPROVE_PLAYERINFORMATION_SUCCESS,
    DEPOSIT_APPROVE_PLAYERINFORMATION_PENDING,
    DEPOSIT_APPROVE_PLAYERINFORMATION_ERROR,
    DEPOSIT_DECLINE_PLAYERINFORMATION,
    DEPOSIT_DECLINE_PLAYERINFORMATION_SUCCESS,
    DEPOSIT_DECLINE_PLAYERINFORMATION_PENDING,
    DEPOSIT_DECLINE_PLAYERINFORMATION_ERROR
} from './types';

import {
    depositPlayerList, depositApprovePlayerList, depositDeclinePlayerList
} from '../../services/functional';

function* depositPlayerInformationData({param, fn}) { 
    try {
        yield put({ type: DEPOSIT_PLAYERINFORMATION_PENDING });
        const response = yield call(depositPlayerList.depositPlayerList, param);
        yield put( {
            type: DEPOSIT_PLAYERINFORMATION_SUCCESS,
            data: response.data,
        });
    fn(response.data);
    } catch (error) {
        yield put({
            type: DEPOSIT_PLAYERINFORMATION_ERROR,
            error: error
        })
    fn(error);  
    }
}

function* depositApprovePlayerInformationData({param, fn}) { 
    try {
        yield put({ type: DEPOSIT_APPROVE_PLAYERINFORMATION_PENDING });
        const response = yield call(depositApprovePlayerList.depositApprovePlayerList, param);
        yield put( {
            type: DEPOSIT_APPROVE_PLAYERINFORMATION_SUCCESS,
            data: response.data,
        });
    fn(response.data);
    } catch (error) {
        yield put({
            type: DEPOSIT_APPROVE_PLAYERINFORMATION_ERROR,
            error: error
        })
    fn(error);  
    }
}

function* depositDeclinePlayerInformationData({param, fn}) { 
    try {
        yield put({ type: DEPOSIT_DECLINE_PLAYERINFORMATION_PENDING });
        const response = yield call(depositDeclinePlayerList.depositDeclinePlayerList, param);
        yield put( {
            type: DEPOSIT_DECLINE_PLAYERINFORMATION_SUCCESS,
            data: response.data,
        });
    fn(response.data);
    } catch (error) {
        yield put({
            type: DEPOSIT_DECLINE_PLAYERINFORMATION_ERROR,
            error: error
        })
    fn(error);  
    }
}

export function* watchDepositPlayerInformation() {  
    yield takeEvery(DEPOSIT_PLAYERINFORMATION, depositPlayerInformationData);
}

export function* watchDepositApprovePlayerInformation() {  
    yield takeEvery(DEPOSIT_APPROVE_PLAYERINFORMATION, depositApprovePlayerInformationData);
}

export function* watchDepositDeclinePlayerInformation() {  
    yield takeEvery(DEPOSIT_DECLINE_PLAYERINFORMATION, depositDeclinePlayerInformationData);
}