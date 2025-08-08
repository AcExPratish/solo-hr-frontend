// eslint-disable-next-line
export const addAuthToLocalStorage = (payload: any) => {
  localStorage.setItem('token', payload.token);
  localStorage.setItem('refresh_token', payload.refreshToken);

  localStorage.setItem('user', JSON.stringify(payload.user));
  localStorage.setItem('scopes', JSON.stringify(payload.scopes));
};

export const removeAuthFromLocalStorage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('user');
  localStorage.removeItem('scopes');
};

export const getAuthFromLocalStorage = () => {
  const tempScopes = localStorage.getItem('scopes') || null;
  const tempUser = localStorage.getItem('user') || null;

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
    token: localStorage.getItem('token') || '',
    refresh_token: localStorage.getItem('refresh_token') || '',
    user,
    scopes
  };
};
