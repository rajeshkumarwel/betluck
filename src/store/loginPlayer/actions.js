import { LOGINPLAYER } from './types';

export function loginPlayer(param, fn) {
    return {
        type: LOGINPLAYER,
        param,
        fn,
    }
}