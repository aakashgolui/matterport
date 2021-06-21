import { axiosInstance } from './axiosInstance'

/**
 * @description login http call
 * @param url string
 * @param data any
 */
export const login = async (url, data) => {
    try {
        return await axiosInstance.post(url, data);
    } catch (error) {
        // console.error(error);
        return error.response;
    }
};

/**
 * @description register http call
 * @param url string
 * @param data any
 */
export const register = async (url, data) => {
    try {
        return await axiosInstance.post(url, data);
    } catch (error) {
        // console.error(error);
        return error.response;
    }
};