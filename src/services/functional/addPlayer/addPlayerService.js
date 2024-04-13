import { METHOD_TYPES } from '../../../shared/constants/methodTypes';
import { request } from '../../core/networkRequest';
import { ENDPOINTS} from '../../../shared/constants/endPoints';

export const addPlayerList = (param) => { 
    return request( 
        METHOD_TYPES.POST,
        ENDPOINTS.addPlayer,
        param.playerData
    );
}