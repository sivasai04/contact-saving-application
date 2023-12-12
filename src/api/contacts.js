import axios from 'axios';

const api = axios.create({
    baseURL:"https://cm-server-api.onrender.com",
})

export default api;