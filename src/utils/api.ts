import axios from 'axios';
import { getAuthFromLocalStorage, removeAuthFromLocalStorage } from './storage';
import { confirmExpiredTokenAlert } from '@/components/common/custom/ConfirmExpiredTokenAlert';
import AuthService from '@/services/AuthService';
import { getAPIEndpoint } from '@/helpers/utils';

const axiosServices = axios.create({
  baseURL: `${getAPIEndpoint()}`,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json'
  }
});

// Add a request interceptor to handle token refresh
axiosServices.interceptors.request.use(async config => {
  const auth = getAuthFromLocalStorage();
  if (auth?.token) {
    config.headers.Authorization = `Bearer ${auth.token}`;
  }
  return config;
});

// Flag to prevent multiple alerts
let isAlertShown = false;
axiosServices.interceptors.response.use(
  async response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Get the refresh token
        const auth = getAuthFromLocalStorage();
        const resp = await AuthService.refreshToken({
          refresh_token: auth.refresh_token
        });

        const token: string = resp?.data?.access_token || '';
        const refreshToken: string = resp?.data?.refresh_token || '';
        localStorage.setItem('token', token);
        localStorage.setItem('refresh_token', refreshToken);

        // Retry the original request with the new token
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return axiosServices(originalRequest);
      } catch (refreshError) {
        if (!isAlertShown) {
          isAlertShown = true;
          confirmExpiredTokenAlert().then(resp => {
            if (resp) {
              redirectToLoginPage();
            }
          });
        }

        // return Promise.reject(refreshError);
      }
    } else {
      return Promise.reject(error?.response);
    }
  }
);

const redirectToLoginPage = () => {
  removeAuthFromLocalStorage();
  window.location.href = window.location.origin + '/auth/sign-in';
};

export default axiosServices;
