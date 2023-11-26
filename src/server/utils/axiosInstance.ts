import axios from 'axios';

export default axios.create({
    baseURL: process.env.RAJAONGKIR_BASE_URL,
    headers: {
        key: process.env.RAJAONGKIR_API_KEY,
        'content-type': 'application/x-www-form-urlencoded',
    },
});
