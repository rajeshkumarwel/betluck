import { 
    LOGINPLAYER_VERIFICATION_SUCCESS,
    LOGINPLAYER_VERIFICATION_PENDING,
    LOGINPLAYER_VERIFICATION_ERROR
} from './types';

const initialState = {
    loginPlayerOTPResponse: [],
    loginPlayerOTPLoader: false,
    loginPlayerOTPError: [],
}

export default function LoginPlayerVerificationReducer(state = initialState, action) { 
    switch (action.type) {
        case LOGINPLAYER_VERIFICATION_SUCCESS:
            return { 
                ...state,
                loginPlayerOTPResponse: action.data,
                loginPlayerOTPLoader: false,
            }
        case LOGINPLAYER_VERIFICATION_PENDING:
            return {
                ...state,
                loginPlayerOTPLoader: true,
            }
        case LOGINPLAYER_VERIFICATION_ERROR:
            return {
                ...state,
                loginPlayerOTPError: action.error,
                loginPlayerOTPLoader: false
            }
        default:
            return state;
    }
}