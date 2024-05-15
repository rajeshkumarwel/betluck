import { 
    WITHDRAW_PLAYERINFORMATION_SUCCESS,
    WITHDRAW_PLAYERINFORMATION_PENDING,
    WITHDRAW_PLAYERINFORMATION_ERROR,
    WITHDRAW_APPROVE_PLAYERINFORMATION_SUCCESS,
    WITHDRAW_APPROVE_PLAYERINFORMATION_PENDING,
    WITHDRAW_APPROVE_PLAYERINFORMATION_ERROR,
    WITHDRAW_DECLINE_PLAYERINFORMATION_SUCCESS,
    WITHDRAW_DECLINE_PLAYERINFORMATION_PENDING,
    WITHDRAW_DECLINE_PLAYERINFORMATION_ERROR,
} from './types';

const initialState = {
    withdrawPlayerInformation: [],
    withdrawPlayerInformationLoader: false,
    withdrawPlayerInformationError: [],
    withdrawApprovePlayerInformation: [],
    withdrawApprovePlayerInformationLoader: false,
    withdrawApprovePlayerInformationError: [],
    withdrawDeclinePlayerInformation: [],
    withdrawDeclinePlayerInformationLoader: false,
    withdrawDeclinePlayerInformationError: [],
}

export default function WithdrawPlayerInformationReducer(state = initialState, action) { 
    switch (action.type) {
        case WITHDRAW_PLAYERINFORMATION_SUCCESS:
            return { 
                ...state,
                withdrawPlayerInformation: action.data,
                withdrawPlayerInformationLoader: false,
            }
        case WITHDRAW_PLAYERINFORMATION_PENDING:
            return {
                ...state,
                withdrawPlayerInformationLoader: true,
            }
        case WITHDRAW_PLAYERINFORMATION_ERROR:
            return {
                ...state,
                withdrawPlayerInformationError: action.error,
                withdrawPlayerInformationLoader: false
            }
        case WITHDRAW_APPROVE_PLAYERINFORMATION_SUCCESS:
            return { 
                ...state,
                withdrawApprovePlayerInformation: action.data,
                withdrawApprovePlayerInformationLoader: false,
            }
        case WITHDRAW_APPROVE_PLAYERINFORMATION_PENDING:
            return {
                ...state,
                withdrawApprovePlayerInformationLoader: true,
            }
        case WITHDRAW_APPROVE_PLAYERINFORMATION_ERROR:
            return {
                ...state,
                withdrawApprovePlayerInformationError: action.error,
                withdrawApprovePlayerInformationLoader: false
            }
            case WITHDRAW_DECLINE_PLAYERINFORMATION_SUCCESS:
                return { 
                    ...state,
                    withdrawDeclinePlayerInformation: action.data,
                    withdrawDeclinePlayerInformationLoader: false,
                }
            case WITHDRAW_DECLINE_PLAYERINFORMATION_PENDING:
                return {
                    ...state,
                    withdrawDeclinePlayerInformationLoader: true,
                }
            case WITHDRAW_DECLINE_PLAYERINFORMATION_ERROR:
                return {
                    ...state,
                    withdrawDeclinePlayerInformationError: action.error,
                    withdrawDeclinePlayerInformationLoader: false
                }
        default:
            return state;
    }
}