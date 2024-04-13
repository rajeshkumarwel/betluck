import { METHOD_TYPES } from '../../../shared/constants/methodTypes';
import { request } from '../../core/networkRequest';
import { ENDPOINTS} from '../../../shared/constants/endPoints';

export const updatePlayerName = (param) => { 
    return request( 
        METHOD_TYPES.PATCH,
        ENDPOINTS.updatePlayername,
        param.playerData
    );
}