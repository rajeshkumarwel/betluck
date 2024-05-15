import { combineReducers } from "redux";

import LoginPlayerReducer from "./loginPlayer/reducer";
import LoginPlayerVerificationReducer from "./loginPlayerVerification/reducer";
import PlayerInformationReducer from "./playerInformation/reducer";
import ManagePlayerInformationReducer from "./managePlayer/reducer";
import AddPlayerReducer from "./AddPlayer/reducer";
import DepositPlayerInformationReducer from "./depositPlayer/reducer";
import WithdrawPlayerInformationReducer from "./withdrawPlayer/reducer";
import TransactionHistoryReducer from "./transactionHistory/reducer";
import { withdrawPlayerList } from "../services/functional";


export const mainReducer = combineReducers({

    loginPlayer: LoginPlayerReducer,
    loginPlayerVerification: LoginPlayerVerificationReducer,
    playerInformationList: PlayerInformationReducer,
    managePlayerList: ManagePlayerInformationReducer,
    addPlayerList: AddPlayerReducer,
    depositPlayerList: DepositPlayerInformationReducer,
    withdrawPlayerList:WithdrawPlayerInformationReducer,
    transactionHistoryList: TransactionHistoryReducer,

})