import { METHOD_TYPES } from '../../../shared/constants/methodTypes';
import { request } from '../../core/networkRequest';
import { ENDPOINTS} from '../../../shared/constants/endPoints';

export const updatePlayerupi = (param) => { 
    return request( 
        METHOD_TYPES.PATCH,
        ENDPOINTS.updatePlayerupi,
        param.playerData
    );
}