import { TUser } from './user-management/user';

export interface TLogin {
  email?: string;
  password?: string;
}

export interface TForgotPassword {
  to?: string;
  reset_url?: string;
}

export interface TResetPassword {
  email?: string;
  token?: string;
  new_password?: string;
  confirm_password?: string;
}

export interface TAuthUser extends TUser {}

export interface TAuthRefreshToken {
  refresh_token?: string;
}

export interface TChangePassword {
  password?: string;
  new_password?: string;
  current_password?: string;
  confirm_password?: string;
}
