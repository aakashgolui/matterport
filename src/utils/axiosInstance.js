import axios from 'axios';

const isHandlerEnabled = (config = {}) => {
    return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ? false : true;
};

/**
 * Before http call this method will call
 */
const requestHandler = (request) => {
    if (isHandlerEnabled(request.config)) {
        console.log('requestHandler', request);
    }
    return request;
};

/**
 * If http request is error then this method will call first
 */
const errorHandler = (error) => {
    if (isHandlerEnabled(error.config)) {
        console.log('errorHandler', error)
    }

    return Promise.reject({ ...error });
};

/**
 * If http request is success then this method will call first
 */
const successHandler = (response) => {
    if (isHandlerEnabled(response.config)) {
        console.log('successHandler', response)
    }
    return response;
};

/**
 * @description axios instance using HTTP interceptor 
 */
export const axiosInstance = axios.create({
    baseURL: 'https://pure-earth-51914.herokuapp.com/api/v1',
});

// request handler 
axiosInstance.interceptors.request.use((request) => requestHandler(request)); 

/**
 * response handler
 */
axiosInstance.interceptors.response.use(
    (response) => successHandler(response),
    (error) => errorHandler(error)
);
