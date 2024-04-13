import { 
    PLAYERINFORMATION_SUCCESS,
    PLAYERINFORMATION_PENDING,
    PLAYERINFORMATION_ERROR
} from './types';

const initialState = {
    playerInformation: [],
    playerInformationLoader: false,
    playerInformationError: [],
}

export default function PlayerInformationReducer(state = initialState, action) { 
    switch (action.type) {
        case PLAYERINFORMATION_SUCCESS:
            return { 
                ...state,
                playerInformation: action.data,
                playerInformationLoader: false,
            }
        case PLAYERINFORMATION_PENDING:
            return {
                ...state,
                playerInformationLoader: true,
            }
        case PLAYERINFORMATION_ERROR:
            return {
                ...state,
                playerInformationError: action.error,
                playerInformationLoader: false
            }
        default:
            return state;
    }
}