import axios from 'axios'


const API = axios.create({ baseURL: 'http://chatsphere.com' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const getTimelinePosts= (id)=> API.get(`/api/users/posts/${id}/timeline`);
export const likePost=(id, userId)=>API.put(`/api/users/posts/${id}/like`, {userId: userId})