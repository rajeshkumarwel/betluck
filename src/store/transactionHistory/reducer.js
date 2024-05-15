import { 
    TRANSACTIONHISTORY_SUCCESS,
    TRANSACTIONHISTORY_PENDING,
    TRANSACTIONHISTORY_ERROR
} from './types';

const initialState = {
    transactionHistory: [],
    transactionHistoryLoader: false,
    transactionHistoryError: [],
}

export default function TransactionHistoryReducer(state = initialState, action) { 
    switch (action.type) {
        case TRANSACTIONHISTORY_SUCCESS:
            return { 
                ...state,
                transactionHistory: action.data,
                transactionHistoryLoader: false,
            }
        case TRANSACTIONHISTORY_PENDING:
            return {
                ...state,
                transactionHistoryLoader: true,
            }
        case TRANSACTIONHISTORY_ERROR:
            return {
                ...state,
                transactionHistoryError: action.error,
                transactionHistoryLoader: false
            }
        default:
            return state;
    }
}