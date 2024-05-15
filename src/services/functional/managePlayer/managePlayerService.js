import { METHOD_TYPES } from '../../../shared/constants/methodTypes';
import { request } from '../../core/networkRequest';
import { ENDPOINTS} from '../../../shared/constants/endPoints';

export const managePlayerList = () => { 
    return request( 
        METHOD_TYPES.GET,
        ENDPOINTS.managePlayerList
    );
}

export const manageTransactionPlayerList = () => { 
    return request( 
        METHOD_TYPES.GET,
        ENDPOINTS.manageTransactionPlayerList
    );
}