import employeeReducer from './employeeSlice';
import holidayReducer from './holidaySlice';
import leaveReducer from './leaveSlice';
import leaveTypeReducer from './leaveTypeSlice';

const employeeManagementReducer = {
  employee: employeeReducer,
  holiday: holidayReducer,
  leave: leaveReducer,
  leaveType: leaveTypeReducer
};
export default employeeManagementReducer;
