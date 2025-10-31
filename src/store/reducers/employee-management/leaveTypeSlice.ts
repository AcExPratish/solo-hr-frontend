import { TMeta } from '@/types/modules';
import { TLeaveType } from '@/types/modules/employee-management/leave';
import { createSlice } from '@reduxjs/toolkit';

interface LeaveTypeState {
  leaveTypes: TLeaveType[];
  leaveType: TLeaveType;
  meta: TMeta;
}

const initialState: LeaveTypeState = {
  leaveTypes: [],
  leaveType: <TLeaveType>{},
  meta: <TMeta>{}
};

const leaveTypeSlice = createSlice({
  name: 'leaveType',
  initialState,
  reducers: {
    getAllLeaveType(state, action) {
      state.leaveTypes = action.payload.results || [];
      state.meta = action.payload.meta || <TMeta>{};
    },

    getOneLeaveType(state, action) {
      state.leaveType = action.payload.row || null;
    },

    createOneLeaveType(state, action) {
      state.leaveTypes = [action.payload.row, ...state.leaveTypes];
    },

    updateOneLeaveType(state, action) {
      state.leaveTypes = state.leaveTypes.map(item => {
        if (item.id !== action.payload.id) return item;
        else return { ...item, ...action.payload.row };
      });
    },

    removeOneLeaveType(state, action) {
      state.leaveTypes = state.leaveTypes.filter(
        item => item.id !== action.payload.id
      );
    }
  }
});

export const {
  getAllLeaveType,
  getOneLeaveType,
  createOneLeaveType,
  updateOneLeaveType,
  removeOneLeaveType
} = leaveTypeSlice.actions;
export default leaveTypeSlice.reducer;
