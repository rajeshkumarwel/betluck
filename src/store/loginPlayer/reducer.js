import { 
    LOGINPLAYER_SUCCESS,
    LOGINPLAYER_PENDING,
    LOGINPLAYER_ERROR
} from './types';

const initialState = {
    loginPlayerResponse: [],
    loginPlayerLoader: false,
    loginPlayerError: [],
}

export default function LoginPlayerReducer(state = initialState, action) { 
    switch (action.type) {
        case LOGINPLAYER_SUCCESS:
            return { 
                ...state,
                loginPlayerResponse: action.data,
                loginPlayerLoader: false,
            }
        case LOGINPLAYER_PENDING:
            return {
                ...state,
                loginPlayerLoader: true,
            }
        case LOGINPLAYER_ERROR:
            return {
                ...state,
                loginPlayerError: action.error,
                loginPlayerLoader: false
            }
        default:
            return state;
    }
}