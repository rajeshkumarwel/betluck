import { 
    ADD_PLAYER_SUCCESS,
    ADD_PLAYER_PENDING,
    ADD_PLAYER_ERROR,
    DELETE_PLAYER_SUCCESS,
    DELETE_PLAYER_PENDING,
    DELETE_PLAYER_ERROR,
    UPDATE_PLAYER_NAME_SUCCESS,
    UPDATE_PLAYER_NAME_PENDING,
    UPDATE_PLAYER_NAME_ERROR,
    UPDATE_PLAYER_UPI_SUCCESS,
    UPDATE_PLAYER_UPI_PENDING,
    UPDATE_PLAYER_UPI_ERROR

} from './types';

const initialState = {
    addPlayerResponse: [],
    addPlayerLoader: false,
    addPlayerError: [],
    deletePlayerResponse: [],
    deletePlayerLoader: false,
    deletePlayerError: [],
    updatePlayernameResponse: [],
    updatePlayernameLoader: false,
    updatePlayernameError: [],
    updatePlayerupiResponse: [],
    updatePlayerupiLoader: false,
    updatePlayerupiError: [],
}

export default function AddPlayerReducer(state = initialState, action) { 
    switch (action.type) {
        case ADD_PLAYER_SUCCESS:
            return { 
                ...state,
                addPlayerResponse: action.data,
                addPlayerLoader: false,
            }
        case ADD_PLAYER_PENDING:
            return {
                ...state,
                addPlayerLoader: true,
            }
        case ADD_PLAYER_ERROR:
            return {
                ...state,
                addPlayerError: action.error,
                addPlayerLoader: false
            }
        case DELETE_PLAYER_SUCCESS:
            return { 
                ...state,
                deletePlayerResponse: action.data,
                deletePlayerLoader: false,
            }
        case DELETE_PLAYER_PENDING:
            return {
                ...state,
                deletePlayerLoader: true,
            }
        case DELETE_PLAYER_ERROR:
            return {
                ...state,
                deletePlayerError: action.error,
                deletePlayerLoader: false
            }
        case UPDATE_PLAYER_NAME_SUCCESS:
            return { 
                ...state,
                updatePlayernameResponse: action.data,
                updatePlayernameLoader: false,
            }
        case UPDATE_PLAYER_NAME_PENDING:
            return {
                ...state,
                updatePlayernameLoader: true,
            }
        case UPDATE_PLAYER_NAME_ERROR:
            return {
                ...state,
                updatePlayernameError: action.error,
                updatePlayernameLoader: false
            }
        case UPDATE_PLAYER_UPI_SUCCESS:
            return { 
                ...state,
                updatePlayerupiResponse: action.data,
                updatePlayerupiLoader: false,
            }
        case UPDATE_PLAYER_UPI_PENDING:
            return {
                ...state,
                updatePlayerupiLoader: true,
            }
        case UPDATE_PLAYER_UPI_ERROR:
            return {
                ...state,
                updatePlayerupiError: action.error,
                updatePlayerupiLoader: false
            }
                    
        default:
            return state;
    }
}