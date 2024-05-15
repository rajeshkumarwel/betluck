import { all } from 'redux-saga/effects';
import { watchLoginPlayer } from './loginPlayer/saga';
import { watchLoginPlayerVerification } from './loginPlayerVerification/saga';
import { watchPlayerInformation } from './playerInformation/saga';
import { watchManagePlayerInformation, watchManageTransactionPlayerInformation } from './managePlayer/saga';
import { watchAddPlayer, watchDeletePlayer, watchUpdatePlayername, watchUpdatePlayerupi } from './AddPlayer/saga';
import { watchDepositPlayerInformation, watchDepositApprovePlayerInformation, watchDepositDeclinePlayerInformation } from './depositPlayer/saga';
import { watchWithdrawPlayerInformation, watchWithdrawApprovePlayerInformation, watchWithdrawDeclinePlayerInformation } from './withdrawPlayer/saga';
import { watchTransactionHistory } from './transactionHistory/saga';


export function* mainSaga() {
    yield all([
        watchLoginPlayer(),
        watchLoginPlayerVerification(),
        watchPlayerInformation(),
        watchManagePlayerInformation(),
        watchAddPlayer(),
        watchDeletePlayer(),
        watchUpdatePlayername(),
        watchUpdatePlayerupi(),
        watchDepositPlayerInformation(),
        watchWithdrawPlayerInformation(),
        watchManageTransactionPlayerInformation(),
        watchDepositApprovePlayerInformation(),
        watchDepositDeclinePlayerInformation(),
        watchTransactionHistory(),
        watchWithdrawApprovePlayerInformation(),
        watchWithdrawDeclinePlayerInformation()
        
    ])
}