import { 
    MANAGEPLAYER_INFORMATION_SUCCESS,
    MANAGEPLAYER_INFORMATION_PENDING,
    MANAGEPLAYER_INFORMATION_ERROR
} from './types';

const initialState = {
    managePlayerInformation: [],
    managePlayerInformationLoader: false,
    managePlayerInformationError: [],
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
        default:
            return state;
    }
}