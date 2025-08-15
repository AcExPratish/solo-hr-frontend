import userReducer from './userSlice';
import permissionReducer from './permissionSlice';
import roleReducer from './roleSlice';

const userManagementReducer = {
  user: userReducer,
  role: roleReducer,
  permission: permissionReducer
};
export default userManagementReducer;
