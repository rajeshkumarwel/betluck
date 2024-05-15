import { 
    WITHDRAW_PLAYERINFORMATION,
    WITHDRAW_APPROVE_PLAYERINFORMATION,
    WITHDRAW_DECLINE_PLAYERINFORMATION
 } from './types';

export function withdrawPlayerInformation(param, fn) {
    return {
        type: WITHDRAW_PLAYERINFORMATION,
        param,
        fn,

    }
}

export function withdrawApprovePlayerInformation(param, fn) {
    return {
        type: WITHDRAW_APPROVE_PLAYERINFORMATION,
        param,
        fn,

    }
}

export function withdrawDeclinePlayerInformation(param, fn) {
    return {
        type: WITHDRAW_DECLINE_PLAYERINFORMATION,
        param,
        fn,

    }
}