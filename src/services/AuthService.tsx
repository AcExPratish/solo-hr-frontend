import axios from 'axios';

import { getAuthFromLocalStorage } from '../utils/storage';
import api from '../utils/api';
import {
  TAuthRefreshToken,
  TAuthUser,
  TChangePassword,
  TForgotPassword,
  TLogin,
  TResetPassword
} from '@/types/modules/auth';
import { apiEndpoint } from '@/helpers/common';

const authEndpoint: string = `${apiEndpoint}/auth`;

const login = (data: TLogin) => {
  return axios.post(`${authEndpoint}/login`, data);
};

const forgotPassword = (data: TForgotPassword) => {
  return axios.post(`${authEndpoint}/request-password-reset`, data);
};

const resetPassword = (data: TResetPassword) => {
  return axios.post(`${authEndpoint}/password-reset`, data);
};

const changePassword = (data: TChangePassword) => {
  return api.post(`${authEndpoint}/myProfile/changePassword`, data);
};

const fetchUserProfile = () => {
  return api.get(`${authEndpoint}/get`);
};

const updateProfile = (data: TAuthUser) => {
  const formData = new FormData();

  if (data.image instanceof File) {
    formData.append('image', data.image);
  }

  if (data.phone) {
    formData.append('phone', data.phone);
  }

  if (data.name) {
    formData.append('name', data.name);
  }
  if (data.delete_image) {
    formData.append('delete_image', '');
  }

  return api.post(`${authEndpoint}/myProfile/updateProfile`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

const refreshToken = (data: TAuthRefreshToken) => {
  return axios.post(`${authEndpoint}/refresh`, data);
};

const logout = () => {
  const auth = getAuthFromLocalStorage();
  return axios.post(
    `${authEndpoint}/logout`,
    {},
    {
      headers: {
        Authorization: 'Bearer ' + auth.token //the token is a variable which holds the token
      }
    }
  );
};

const AuthService = {
  login,
  logout,
  forgotPassword,
  resetPassword,
  updateProfile,
  fetchUserProfile,
  refreshToken,
  changePassword
};
export default AuthService;
