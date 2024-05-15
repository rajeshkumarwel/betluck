import { put, call, takeEvery } from 'redux-saga/effects';
import {
    MANAGEPLAYER_INFORMATION,
    MANAGEPLAYER_INFORMATION_SUCCESS,
    MANAGEPLAYER_INFORMATION_PENDING,
    MANAGEPLAYER_INFORMATION_ERROR,
    MANAGETRANSACTIONPLAYER_INFORMATION,
    MANAGETRANSACTIONPLAYER_INFORMATION_SUCCESS,
    MANAGETRANSACTIONPLAYER_INFORMATION_PENDING,
    MANAGETRANSACTIONPLAYER_INFORMATION_ERROR
} from './types';

import {
    managePlayerList, manageTransactionPlayerList
} from '../../services/functional';

function* managePlayerInformationData() { 
    try {
        yield put({ type: MANAGEPLAYER_INFORMATION_PENDING });
        const response = yield call(managePlayerList.managePlayerList);
        yield put( {
            type: MANAGEPLAYER_INFORMATION_SUCCESS,
            data: response.data,
        });
       
    } catch (error) {
        yield put({
            type: MANAGEPLAYER_INFORMATION_ERROR,
            error: error
        })
        
    }
}

function* manageTransactionPlayerInformationData() { 
    try {
        yield put({ type: MANAGETRANSACTIONPLAYER_INFORMATION_PENDING });
        const response = yield call(manageTransactionPlayerList.manageTransactionPlayerList);
        yield put( {
            type: MANAGETRANSACTIONPLAYER_INFORMATION_SUCCESS,
            data: response.data,
        });
       
    } catch (error) {
        yield put({
            type: MANAGETRANSACTIONPLAYER_INFORMATION_ERROR,
            error: error
        })
        
    }
}

export function* watchManagePlayerInformation() {  
    yield takeEvery(MANAGEPLAYER_INFORMATION, managePlayerInformationData);
}

export function* watchManageTransactionPlayerInformation() {  
    yield takeEvery(MANAGETRANSACTIONPLAYER_INFORMATION, manageTransactionPlayerInformationData);
}