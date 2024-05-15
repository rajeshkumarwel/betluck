import { 
    DEPOSIT_PLAYERINFORMATION_SUCCESS,
    DEPOSIT_PLAYERINFORMATION_PENDING,
    DEPOSIT_PLAYERINFORMATION_ERROR,
    DEPOSIT_APPROVE_PLAYERINFORMATION_SUCCESS,
    DEPOSIT_APPROVE_PLAYERINFORMATION_PENDING,
    DEPOSIT_APPROVE_PLAYERINFORMATION_ERROR,
    DEPOSIT_DECLINE_PLAYERINFORMATION_SUCCESS,
    DEPOSIT_DECLINE_PLAYERINFORMATION_PENDING,
    DEPOSIT_DECLINE_PLAYERINFORMATION_ERROR,
} from './types';

const initialState = {
    depositPlayerInformation: [],
    depositPlayerInformationLoader: false,
    depositPlayerInformationError: [],
    depositApprovePlayerInformation: [],
    depositApprovePlayerInformationLoader: false,
    depositApprovePlayerInformationError: [],
    depositDeclinePlayerInformation: [],
    depositDeclinePlayerInformationLoader: false,
    depositDeclinePlayerInformationError: [],
}

export default function DepositPlayerInformationReducer(state = initialState, action) { 
    switch (action.type) {
        case DEPOSIT_PLAYERINFORMATION_SUCCESS:
            return { 
                ...state,
                depositPlayerInformation: action.data,
                depositPlayerInformationLoader: false,
            }
        case DEPOSIT_PLAYERINFORMATION_PENDING:
            return {
                ...state,
                depositPlayerInformationLoader: true,
            }
        case DEPOSIT_PLAYERINFORMATION_ERROR:
            return {
                ...state,
                depositPlayerInformationError: action.error,
                depositPlayerInformationLoader: false
            }
            case DEPOSIT_APPROVE_PLAYERINFORMATION_SUCCESS:
                return { 
                    ...state,
                    depositApprovePlayerInformation: action.data,
                    depositApprovePlayerInformationLoader: false,
                }
            case DEPOSIT_APPROVE_PLAYERINFORMATION_PENDING:
                return {
                    ...state,
                    depositApprovePlayerInformationLoader: true,
                }
            case DEPOSIT_APPROVE_PLAYERINFORMATION_ERROR:
                return {
                    ...state,
                    depositApprovePlayerInformationError: action.error,
                    depositApprovePlayerInformationLoader: false
                }
                case DEPOSIT_DECLINE_PLAYERINFORMATION_SUCCESS:
                    return { 
                        ...state,
                        depositDeclinePlayerInformation: action.data,
                        depositDeclinePlayerInformationLoader: false,
                    }
                case DEPOSIT_DECLINE_PLAYERINFORMATION_PENDING:
                    return {
                        ...state,
                        depositDeclinePlayerInformationLoader: true,
                    }
                case DEPOSIT_DECLINE_PLAYERINFORMATION_ERROR:
                    return {
                        ...state,
                        depositDeclinePlayerInformationError: action.error,
                        depositDeclinePlayerInformationLoader: false
                    }
        default:
            return state;
    }
}