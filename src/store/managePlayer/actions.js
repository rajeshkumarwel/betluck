import { MANAGEPLAYER_INFORMATION, MANAGETRANSACTIONPLAYER_INFORMATION } from './types';

export function managePlayerInformation() {
    return {
        type: MANAGEPLAYER_INFORMATION,
    }
}

export function manageTransactionPlayerInformation() {
    return {
        type: MANAGETRANSACTIONPLAYER_INFORMATION,
    }
}