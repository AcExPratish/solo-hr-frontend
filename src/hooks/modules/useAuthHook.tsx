import { useDispatch, useSelector } from 'store';
import {
  setLogin,
  setLogout,
  setProfile
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
  const { isAuthenticated, user } = useSelector(state => state.auth);

  const login = async (data: TLogin) => {
    const resp = await AuthService.login(data);
    const token: string = resp?.data?.access_token || '';
    const refreshToken: string = resp?.data?.refresh_token || '';
    const user: TAuthUser = resp?.data?.data?.user || null;
    const scopes = resp?.data?.scopes || [];
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
    AuthService.logout().catch(e => console.log('Logout Error:', e));
    dispatch(setLogout());
    // dispatch({ type: 'RESET_STATE' });
  };
  const forgotPassword = async (data: TForgotPassword) => {
    try {
      await AuthService.forgotPassword(data);
    } catch (e: unknown) {
      console.log('Forgot Password:', e);
      throw e;
    }
  };
  const resetPassword = async (data: TResetPassword) => {
    try {
      await AuthService.resetPassword(data);
    } catch (e: unknown) {
      console.log('Reset Password:', e);
      throw e;
    }
  };

  const changePassword = async (data: TChangePassword) => {
    try {
      await AuthService.changePassword(data);
    } catch (e: unknown) {
      console.log('Change Password:', e);
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
      console.log('Update Profile:', e);
      throw e;
    }
  };

  return {
    isAuthenticated,
    user,
    login,
    logout,
    updateProfile,
    forgotPassword,
    resetPassword,
    changePassword
  };
};

export default useAuthHook;
