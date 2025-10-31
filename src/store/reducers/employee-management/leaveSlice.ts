import { TMeta } from '@/types/modules';
import { TLeave } from '@/types/modules/employee-management/leave';
import { createSlice } from '@reduxjs/toolkit';

interface LeaveState {
  leaves: TLeave[];
  leave: TLeave;
  meta: TMeta;
}

const initialState: LeaveState = {
  leaves: [],
  leave: <TLeave>{},
  meta: <TMeta>{}
};

const leaveSlice = createSlice({
  name: 'leave',
  initialState,
  reducers: {
    getAllLeave(state, action) {
      state.leaves = action.payload.results || [];
      state.meta = action.payload.meta || <TMeta>{};
    },

    getOneLeave(state, action) {
      state.leave = action.payload.row || null;
    },

    createOneLeave(state, action) {
      state.leaves = [action.payload.row, ...state.leaves];
    },

    updateOneLeave(state, action) {
      state.leaves = state.leaves.map(item => {
        if (item.id !== action.payload.id) return item;
        else return { ...item, ...action.payload.row };
      });
    },

    removeOneLeave(state, action) {
      state.leaves = state.leaves.filter(item => item.id !== action.payload.id);
    }
  }
});

export const {
  getAllLeave,
  getOneLeave,
  createOneLeave,
  updateOneLeave,
  removeOneLeave
} = leaveSlice.actions;
export default leaveSlice.reducer;
