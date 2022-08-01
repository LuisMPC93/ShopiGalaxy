import axios from 'axios';
import {Config} from "../utils/Config";

export const axiosInstance = axios.create({
    baseURL: Config.baseURL,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    }
});

export const interceptor = (store) => {
    axiosInstance.interceptors.request.use(
        (config) => {
            //config.headers.Authorization = (store.getState().auth.token) ? `Bearer ${store.getState().auth.token}` : '';
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        (next) => {
            return Promise.resolve(next);
        },
        (error) => {
            if(! error.response){
                console.log("error");
                //error = {response: {data: {error: "connection_error"}}}
                error = {response: {status: 500, data: {message: "connection_error",status: "Error"}}}
                return Promise.reject(error);
            } else {
                switch (error.response.status) {
                    case 500:
                        console.log("error 500");
                        return Promise.reject(error);

                    default:
                        break;
                }
            }
            return Promise.reject(error);
        }
    );
}
