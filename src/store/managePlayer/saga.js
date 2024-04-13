import { put, call, takeEvery } from 'redux-saga/effects';
import {
    MANAGEPLAYER_INFORMATION,
    MANAGEPLAYER_INFORMATION_SUCCESS,
    MANAGEPLAYER_INFORMATION_PENDING,
    MANAGEPLAYER_INFORMATION_ERROR
} from './types';

import {
    managePlayerList
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

export function* watchManagePlayerInformation() {  
    yield takeEvery(MANAGEPLAYER_INFORMATION, managePlayerInformationData);
}