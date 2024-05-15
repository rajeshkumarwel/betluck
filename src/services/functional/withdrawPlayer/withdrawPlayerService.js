import { METHOD_TYPES } from '../../../shared/constants/methodTypes';
import { request } from '../../core/networkRequest';
import { ENDPOINTS} from '../../../shared/constants/endPoints';

export const withdrawPlayerList = (param) => { 
    return request( 
        METHOD_TYPES.POST,
        ENDPOINTS.withdrawPlayer,
        param.playerData
    );
}

export const withdrawApprovePlayerList = (param) => { 
    return request( 
        METHOD_TYPES.POST,
        ENDPOINTS.withdrawApprovePlayer,
        param.playerData
    );
}

export const withdrawDeclinePlayerList = (param) => { 
    return request( 
        METHOD_TYPES.POST,
        ENDPOINTS.withdrawDeclinePlayer,
        param.playerData
    );
}