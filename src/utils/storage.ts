import { decryptData, encryptData } from '@/helpers/crypto';

// eslint-disable-next-line
export const addAuthToLocalStorage = (payload: any) => {
  localStorage.setItem('token', encryptData(payload.token));
  localStorage.setItem('refresh_token', encryptData(payload.refreshToken));

  localStorage.setItem('user', encryptData(JSON.stringify(payload.user)));
  localStorage.setItem('scopes', encryptData(JSON.stringify(payload.scopes)));
};

export const removeAuthFromLocalStorage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('user');
  localStorage.removeItem('scopes');
};

export const getAuthFromLocalStorage = () => {
  const tempScopes = decryptData(localStorage.getItem('scopes')) || null;
  const tempUser = decryptData(localStorage.getItem('user')) || null;

  let user = null;
  let scopes = [];

  try {
    user = tempUser ? JSON.parse(tempUser) : null;
    scopes = tempScopes ? JSON.parse(tempScopes) : [];
  } catch (e) {
    console.log(e);
    removeAuthFromLocalStorage();
  }
  return {
    token: decryptData(localStorage.getItem('token')) || '',
    refresh_token: decryptData(localStorage.getItem('refresh_token')) || '',
    user,
    scopes
  };
};
