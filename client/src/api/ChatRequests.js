import axios from 'axios'


const API = axios.create({ baseURL: 'http://chatsphere.com' });

export const createChat = (data) => API.post('/api/users/chats/', data);

export const userChats = (id) => API.get(`/api/users/chats/${id}`);

export const findChat = (firstId, secondId) => API.get(`/api/users/chats/find/${firstId}/${secondId}`);