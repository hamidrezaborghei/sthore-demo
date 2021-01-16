import axios from './axios';

const CommentsAPI = {
  getAll: (postID, params) => axios.get(`/posts/${postID}/comments`, { params }),
};

export default CommentsAPI;