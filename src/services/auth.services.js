import axios from '../utils/axios';

export const loginUser = (data) => {
  return axios.post('/users/login', data);
};