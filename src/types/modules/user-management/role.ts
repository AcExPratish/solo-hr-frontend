import { TPermission } from './permission';

export interface TRole {
  id?: string;
  name?: string;
  created_at?: string;
  updated_at?: string;
  is_superuser?: boolean;
  permissions?: TPermission[];
}
