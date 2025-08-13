import { TFilter } from '..';

export interface TUser {
  id?: string;
  username?: string;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  password?: string;
  email?: string;
  phone?: string;
  date_of_birth?: string;
  email_verified_at?: string;
  avatar?: string;
  created_at?: string;
  updated_at?: string;
  created_by_id?: string;
  updated_by_id?: string;
  deleted_at?: string;
}

export interface TUserFilter extends TFilter {}
