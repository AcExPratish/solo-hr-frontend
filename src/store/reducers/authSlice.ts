import { createSlice } from '@reduxjs/toolkit';
import {
  addAuthToLocalStorage,
  getAuthFromLocalStorage,
  removeAuthFromLocalStorage
} from '@/utils/storage';
import { TAuthUser } from '../../types/modules/auth';

interface TAuthState {
  isAuthenticated: boolean;
  user: TAuthUser | null;
  token: string | null;
  refreshToken?: string | null;
  scopes?: [];
}

const auth = getAuthFromLocalStorage();

const user = auth.user;
const token = auth.token;
const refreshToken = auth.token;
const scopes = auth.scopes;

const initialState: TAuthState = {
  isAuthenticated: !!token,
  user,
  token,
  refreshToken,
  scopes
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin(state, action) {
      if (action.payload.user && action.payload.token) {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.token = action.payload.token;
        state.scopes = action.payload.scopes;
        addAuthToLocalStorage(action.payload);
      }
    },
    setProfile(state, action) {
      if (action.payload.user) {
        state.user = action.payload.user;
        localStorage.setItem('user', JSON.stringify(action.payload.user));
      }
    },

    setLogout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      removeAuthFromLocalStorage();
    }
  }
});

export const { setLogin, setLogout, setProfile } = authSlice.actions;
export default authSlice.reducer;
