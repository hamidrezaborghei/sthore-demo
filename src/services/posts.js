import axios from './axios';

const PostsAPI = {
  getAll: (params) => axios.get(`/posts`, { params }),
  single: (id, params) => axios.get(`/posts/${id}`, { params }),
  create: (data) => axios.post(`/posts`, data),
  update: (id, data) => axios.put(`/posts/${id}`, data),
  remove: (id, params) => axios.delete(`/posts/${id}`, { params }),
};

export default PostsAPI;