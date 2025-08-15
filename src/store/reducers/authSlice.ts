import { createSlice } from '@reduxjs/toolkit';
import { TAuthUser } from '@/types/modules/auth';
import {
  addAuthToLocalStorage,
  getAuthFromLocalStorage,
  removeAuthFromLocalStorage
} from '@/utils/storage';
import { encryptData } from '@/helpers/crypto';

interface TAuthState {
  isAuthenticated: boolean;
  isAuthLoading: boolean;
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
  isAuthLoading: true, // Start with loading true to prevent flash
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
        state.isAuthLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.scopes = action.payload.scopes;
        addAuthToLocalStorage(action.payload);
      }
    },

    setProfile(state, action) {
      if (action.payload.user) {
        state.user = action.payload.user;
        localStorage.setItem(
          'user',
          encryptData(JSON.stringify(action.payload.user))
        );
      }
    },

    setLogout(state) {
      state.isAuthenticated = false;
      state.isAuthLoading = false;
      state.user = null;
      state.token = null;
      removeAuthFromLocalStorage();
    },

    setAuthLoading(state, action) {
      state.isAuthLoading = action.payload;
    },

    setAuthInitialized(state) {
      state.isAuthLoading = false;
    }
  }
});

export const {
  setLogin,
  setLogout,
  setProfile,
  setAuthLoading,
  setAuthInitialized
} = authSlice.actions;
export default authSlice.reducer;
