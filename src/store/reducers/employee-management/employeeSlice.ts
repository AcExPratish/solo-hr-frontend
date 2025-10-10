import { TMeta } from '@/types/modules';
import { TEmployee } from '@/types/modules/employee-management/employee';
import { createSlice } from '@reduxjs/toolkit';

interface EmployeeState {
  employees: TEmployee[];
  employee: TEmployee;
  meta: TMeta;
}

const initialState: EmployeeState = {
  employees: [],
  employee: <TEmployee>{},
  meta: <TMeta>{}
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    getAllEmployee(state, action) {
      state.employees = action.payload.results || [];
      state.meta = action.payload.meta || <TMeta>{};
    },

    getOneEmployee(state, action) {
      state.employee = action.payload.row || null;
    },

    createOneEmployee(state, action) {
      state.employees = [...state.employees, action.payload.row];
    },

    updateOneEmployee(state, action) {
      state.employees = state.employees.map(item => {
        if (item._id !== action.payload._id) return item;
        else return { ...item, ...action.payload.row };
      });
    },

    removeOneEmployee(state, action) {
      state.employees = state.employees.filter(
        item => item._id !== action.payload._id
      );
    }
  }
});

export const {
  getAllEmployee,
  getOneEmployee,
  createOneEmployee,
  updateOneEmployee,
  removeOneEmployee
} = employeeSlice.actions;
export default employeeSlice.reducer;
