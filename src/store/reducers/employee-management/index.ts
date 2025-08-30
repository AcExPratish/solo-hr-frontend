import employeeReducer from './employeeSlice';
import holidayReducer from './holidaySlice';

const employeeManagementReducer = {
  employee: employeeReducer,
  holiday: holidayReducer
};
export default employeeManagementReducer;
