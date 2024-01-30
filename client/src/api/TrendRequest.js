import axios from 'axios'


const API = axios.create({ baseURL: 'http://chatsphere.com' });

export const getUsers  = (data) => API.get('/api/users/tags/trends', data);

export const getTrends = () => API.get(`/api/users/tags/`);

