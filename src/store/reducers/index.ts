import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import attendanceReducer from './attendanceSlice';
import userManagementReducer from './user-management';

const rootReducer = combineReducers({
  auth: authReducer,
  attendance: attendanceReducer,
  ...userManagementReducer
});

export default rootReducer;
