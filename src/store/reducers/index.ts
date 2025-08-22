import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import attendanceReducer from './attendanceSlice';
import userManagementReducer from './user-management';
import employeeManagementReducer from './employee-management';

const rootReducer = combineReducers({
  auth: authReducer,
  attendance: attendanceReducer,
  ...userManagementReducer,
  ...employeeManagementReducer
});

export default rootReducer;
