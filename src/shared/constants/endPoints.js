
export const ENDPOINTS = {

    loginPlayer: 'api/v1/players/login',
    loginPlayerVerification: 'api/v1/players/otp',
    playerInformation: 'player/getone/',
    managePlayerList: 'player/getAllPlayers',
    addPlayer: 'player/save',
    deletePlayer: 'player/delete/',
    updatePlayername: 'player/updateName',
    updatePlayerupi: 'player/updateUpi',
    depositPlayer: 'transactions/deposit',
    withdrawPlayer: 'transactions/withdraw',
    withdrawApprovePlayer: 'transactions/withdrawApprove',
    withdrawDeclinePlayer: 'transactions/declineWithdraw',
    manageTransactionPlayerList: 'transactions/getAllTransactions',
    depositApprovePlayer: 'transactions/depositApprove',
    depositDeclinePlayer: 'transactions/depositDecline',
    transactionHistory: 'transactions/getTransactionsByPlayer/'
    
}