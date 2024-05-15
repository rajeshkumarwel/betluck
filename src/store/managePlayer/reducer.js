import { 
    MANAGEPLAYER_INFORMATION_SUCCESS,
    MANAGEPLAYER_INFORMATION_PENDING,
    MANAGEPLAYER_INFORMATION_ERROR,
    MANAGETRANSACTIONPLAYER_INFORMATION_SUCCESS,
    MANAGETRANSACTIONPLAYER_INFORMATION_PENDING,
    MANAGETRANSACTIONPLAYER_INFORMATION_ERROR,
} from './types';

const initialState = {
    managePlayerInformation: [],
    managePlayerInformationLoader: false,
    managePlayerInformationError: [],
    manageTransactionPlayerInformation: [],
    manageTransactionPlayerInformationLoader: false,
    manageTransactionPlayerInformationError: [],
}

export default function ManagePlayerInformationReducer(state = initialState, action) { 
    switch (action.type) {
        case MANAGEPLAYER_INFORMATION_SUCCESS:
            return { 
                ...state,
                managePlayerInformation: action.data,
                managePlayerInformationLoader: false,
            }
        case MANAGEPLAYER_INFORMATION_PENDING:
            return {
                ...state,
                managePlayerInformationLoader: true,
            }
        case MANAGEPLAYER_INFORMATION_ERROR:
            return {
                ...state,
                managePlayerInformationError: action.error,
                managePlayerInformationLoader: false
            }
            case MANAGETRANSACTIONPLAYER_INFORMATION_SUCCESS:
                return { 
                    ...state,
                    manageTransactionPlayerInformation: action.data,
                    manageTransactionPlayerInformationLoader: false,
                }
            case MANAGETRANSACTIONPLAYER_INFORMATION_PENDING:
                return {
                    ...state,
                    manageTransactionPlayerInformationLoader: true,
                }
            case MANAGETRANSACTIONPLAYER_INFORMATION_ERROR:
                return {
                    ...state,
                    manageTransactionPlayerInformationError: action.error,
                    manageTransactionPlayerInformationLoader: false
                }
        default:
            return state;
    }
}