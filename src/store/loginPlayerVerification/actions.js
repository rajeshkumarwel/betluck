import { LOGINPLAYER_VERIFICATION } from './types';

export function loginPlayerVerification(param, fn) {
    return {
        type: LOGINPLAYER_VERIFICATION,
        param,
        fn,
    }
}