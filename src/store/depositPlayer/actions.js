import { 
    DEPOSIT_PLAYERINFORMATION,
    DEPOSIT_APPROVE_PLAYERINFORMATION,
    DEPOSIT_DECLINE_PLAYERINFORMATION

} from './types';

export function depositPlayerInformation(param, fn) {
    return {
        type: DEPOSIT_PLAYERINFORMATION,
        param,
        fn,

    }
}

export function depositApprovePlayerInformation(param, fn) {
    return {
        type: DEPOSIT_APPROVE_PLAYERINFORMATION,
        param,
        fn,

    }
}

export function depositDeclinePlayerInformation(param, fn) {
    return {
        type: DEPOSIT_DECLINE_PLAYERINFORMATION,
        param,
        fn,

    }
}