import axios from 'axios';

const baseHeaders = {
};

const axiosInstance = axios.create({
    baseURL: 'api/rest',
    headers: {
        ...baseHeaders
    }
});


export { axiosInstance }

