import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import attendanceReducer from './attendanceSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  attendance: attendanceReducer
});

export default rootReducer;
