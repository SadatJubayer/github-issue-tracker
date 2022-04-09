import Axios from 'axios';

const baseURL = 'https://api.github.com';

export const axios = Axios.create({
    baseURL,
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
});
