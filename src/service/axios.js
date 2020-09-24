import axios  from 'axios';

const axiosInstance = axios.create({
    baseURL: '/',
});

export const get = async (path, requestConfig) => {
    try {
        return await axiosInstance.get(path, {
            ...requestConfig,
        });
    } catch (err) {
        console.log(err);
    }
};