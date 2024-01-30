import axios from "axios";

const API = axios.create({ baseURL: "http://chatsphere.com" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
  });

export const getUser = (userId) => API.get(`/api/users/cur/${userId}`);
export const updateUser = (id, userData) =>  API.put(`/api/users/cur/${id}`, userData);
export const getAllUser = ()=> API.get('/api/users/cur')
export const followUser = (id,data)=> API.put(`api/users/cur/${id}/follow`, data)
export const unfollowUser = (id, data)=> API.put(`api/users/cur/${id}/unfollow`, data)