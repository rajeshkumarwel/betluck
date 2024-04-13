import axios from "axios";
import { METHOD_TYPES } from "../../shared/constants/methodTypes";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
})

instance.interceptors.request.use(
    (config) => {
        config.headers['Content-Type'] = 'application/json';
        config.headers['Accept'] = 'application/json';
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
)

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if(error.response.status === 401) {
            window.location.href = '/';
        }
        return Promise.reject(error);
    }
)


export const request = (method, url, payload, headers) => {
    switch(method) {
        case METHOD_TYPES.GET:
            return instance.get(url, payload);
        case METHOD_TYPES.POST:
            return instance.post(url, payload, { headers });
        case METHOD_TYPES.PUT:
            return instance.put(url, payload, { headers });
        case METHOD_TYPES.PATCH:
            return instance.patch(url, payload, { headers });
        case METHOD_TYPES.DELETE:
            return instance.delete(url, payload, { headers });
        default:
            return null;
    }

}

export default instance;