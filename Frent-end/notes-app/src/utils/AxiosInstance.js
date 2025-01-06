import axios from 'axios';
import { BASE_URL } from './Constant';

const AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }   
});

AxiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

AxiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default AxiosInstance;
