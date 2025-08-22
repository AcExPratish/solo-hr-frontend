import { TUser } from '../user-management/user';

export interface TEmployee extends TUser {
  basic_information: {
    gender?: string;
    address?: string;
  };
}
