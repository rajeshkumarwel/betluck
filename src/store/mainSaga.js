import { all } from 'redux-saga/effects';
import { watchLoginPlayer } from './loginPlayer/saga';
import { watchLoginPlayerVerification } from './loginPlayerVerification/saga';
import { watchPlayerInformation } from './playerInformation/saga';
import { watchManagePlayerInformation } from './managePlayer/saga';
import { watchAddPlayer, watchDeletePlayer, watchUpdatePlayername, watchUpdatePlayerupi } from './AddPlayer/saga';


export function* mainSaga() {
    yield all([
        watchLoginPlayer(),
        watchLoginPlayerVerification(),
        watchPlayerInformation(),
        watchManagePlayerInformation(),
        watchAddPlayer(),
        watchDeletePlayer(),
        watchUpdatePlayername(),
        watchUpdatePlayerupi()
    ])
}