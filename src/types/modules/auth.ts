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
}

export interface TAuthUser {
  id?: number;
  name?: string;
  email?: string;
  image?: string | Blob | File;
  phone?: string;
  delete_image?: number;
}

export interface TAuthRefreshToken {
  refresh_token?: string;
}

export interface TChangePassword {
  password?: string;
  new_password?: string;
  current_password?: string;
  confirm_password?: string;
}
