import { useDispatch, useSelector } from 'store';
import {
  setLogin,
  setLogout,
  setProfile,
  setAuthInitialized
} from '../../store/reducers/authSlice';
import {
  TAuthUser,
  TChangePassword,
  TForgotPassword,
  TLogin,
  TResetPassword
} from '../../types/modules/auth';
import AuthService from '@/services/AuthService';

const useAuthHook = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, isAuthLoading, user } = useSelector(
    state => state.auth
  );

  const login = async (data: TLogin) => {
    const resp = await AuthService.login(data);
    const token: string = resp?.data?.data?.access_token || '';
    const refreshToken: string = resp?.data?.data?.refresh_token || '';
    const user: TAuthUser = resp?.data?.data?.user || null;
    const scopes = resp?.data?.data?.scopes || [];
    dispatch(
      setLogin({
        user,
        token,
        refreshToken,
        scopes
      })
    );
    // window.location.reload();
  };

  const logout = async () => {
    // AuthService.logout().catch(e => console.error('Logout Error:', e));
    dispatch(setLogout());
    // dispatch({ type: 'RESET_STATE' });
  };

  const forgotPassword = async (data: TForgotPassword) => {
    try {
      await AuthService.forgotPassword(data);
    } catch (e: unknown) {
      console.error('Forgot Password:', e);
      throw e;
    }
  };

  const resetPassword = async (data: TResetPassword) => {
    try {
      await AuthService.resetPassword(data);
    } catch (e: unknown) {
      console.error('Reset Password:', e);
      throw e;
    }
  };

  const changePassword = async (data: TChangePassword) => {
    try {
      await AuthService.changePassword(data);
    } catch (e: unknown) {
      console.error('Change Password:', e);
      throw e;
    }
  };

  const updateProfile = async (data: TAuthUser) => {
    try {
      const resp = await AuthService.updateProfile(data);
      const row = resp?.data?.data || null;

      if (row) dispatch(setProfile({ user: row }));
      return row;
    } catch (e: unknown) {
      console.error('Update Profile:', e);
      throw e;
    }
  };

  return {
    isAuthenticated,
    isAuthLoading,
    user,
    login,
    logout,
    updateProfile,
    forgotPassword,
    resetPassword,
    changePassword,
    setAuthInitialized: () => dispatch(setAuthInitialized())
  };
};

export default useAuthHook;
