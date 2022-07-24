import axios from '../utils/axios';

export const loginUser = (data) => {
  return axios.post('/users/login', data);
};

export const registrationUser = (data) => {
  return axios.post('/users/register', data);
};