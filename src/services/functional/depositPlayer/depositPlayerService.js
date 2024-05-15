import { METHOD_TYPES } from '../../../shared/constants/methodTypes';
import { request } from '../../core/networkRequest';
import { ENDPOINTS} from '../../../shared/constants/endPoints';

export const depositPlayerList = (param) => { 
    return request( 
        METHOD_TYPES.POST,
        ENDPOINTS.depositPlayer,
        param.playerData
    );
}

export const depositApprovePlayerList = (param) => { 
    return request( 
        METHOD_TYPES.POST,
        ENDPOINTS.depositApprovePlayer,
        param.playerData
    );
}

export const depositDeclinePlayerList = (param) => { 
    return request( 
        METHOD_TYPES.POST,
        ENDPOINTS.depositDeclinePlayer,
        param.playerData
    );
}