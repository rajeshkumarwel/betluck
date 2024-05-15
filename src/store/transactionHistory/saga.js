import { put, call, takeEvery } from 'redux-saga/effects';
import {
    TRANSACTIONHISTORY,
    TRANSACTIONHISTORY_SUCCESS,
    TRANSACTIONHISTORY_PENDING,
    TRANSACTIONHISTORY_ERROR
} from './types';

import {
    transactionHistoryList
} from '../../services/functional';

function* transactionHistoryData({param}) { 
    try {
        yield put({ type: TRANSACTIONHISTORY_PENDING });
        const response = yield call(transactionHistoryList.transactionHistoryList, param);
        yield put( {
            type: TRANSACTIONHISTORY_SUCCESS,
            data: response.data,
        });
       
    } catch (error) {
        yield put({
            type: TRANSACTIONHISTORY_ERROR,
            error: error
        })
        
    }
}

export function* watchTransactionHistory() {  
    yield takeEvery(TRANSACTIONHISTORY, transactionHistoryData);
}