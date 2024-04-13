import { put, call, takeEvery } from 'redux-saga/effects';
import {
    PLAYERINFORMATION,
    PLAYERINFORMATION_SUCCESS,
    PLAYERINFORMATION_PENDING,
    PLAYERINFORMATION_ERROR
} from './types';

import {
    playerInformationList
} from '../../services/functional';

function* playerInformationData({param}) { 
    try {
        yield put({ type: PLAYERINFORMATION_PENDING });
        const response = yield call(playerInformationList.playerInformationList, param);
        yield put( {
            type: PLAYERINFORMATION_SUCCESS,
            data: response.data,
        });
       
    } catch (error) {
        yield put({
            type: PLAYERINFORMATION_ERROR,
            error: error
        })
        
    }
}

export function* watchPlayerInformation() {  
    yield takeEvery(PLAYERINFORMATION, playerInformationData);
}