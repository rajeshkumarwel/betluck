import { METHOD_TYPES } from '../../../shared/constants/methodTypes';
import { request } from '../../core/networkRequest';
import { ENDPOINTS} from '../../../shared/constants/endPoints';

export const playerInformationList = (param) => { 
    return request( 
        METHOD_TYPES.GET,
        ENDPOINTS.playerInformation + param.playerId
    );
}