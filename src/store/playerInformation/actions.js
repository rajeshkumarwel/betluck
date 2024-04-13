import { PLAYERINFORMATION } from './types';

export function playerInformation(param) {
    return {
        type: PLAYERINFORMATION,
        param,

    }
}