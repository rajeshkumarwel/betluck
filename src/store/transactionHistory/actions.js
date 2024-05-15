import { TRANSACTIONHISTORY } from './types';

export function transactionHistory(param) {
    return {
        type: TRANSACTIONHISTORY,
        param,

    }
}