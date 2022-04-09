import Axios from 'axios';

const token = '';
const baseURL = 'https://api.github.com';

export const axios = Axios.create({
    baseURL,
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
    },
});
