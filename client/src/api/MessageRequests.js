import axios from 'axios'


const API = axios.create({ baseURL: 'http://chatsphere.com' });

export const getMessages = (id) => API.get(`/api/users/message/${id}`);

export const addMessage = (data) => API.post('/api/users/message/', data);