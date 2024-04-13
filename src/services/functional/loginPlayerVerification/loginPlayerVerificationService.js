import { METHOD_TYPES } from '../../../shared/constants/methodTypes';
import { request } from '../../core/networkRequest';
import { ENDPOINTS} from '../../../shared/constants/endPoints';

export const loginPlayerVerificationList = (param) => { 
    return request( 
        METHOD_TYPES.POST,
        ENDPOINTS.loginPlayerVerification + '?enteredOtp=' + param.otpData.OTP
    );
}