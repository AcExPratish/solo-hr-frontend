import { TMeta } from '@/types/modules';
import { THoliday } from '@/types/modules/employee-management/holiday';
import { createSlice } from '@reduxjs/toolkit';

interface HolidayState {
  holidays: THoliday[];
  holiday: THoliday;
  meta: TMeta;
}

const initialState: HolidayState = {
  holidays: [],
  holiday: <THoliday>{},
  meta: <TMeta>{}
};

const holidaySlice = createSlice({
  name: 'holiday',
  initialState,
  reducers: {
    getAllHoliday(state, action) {
      state.holidays = action.payload.results || [];
      state.meta = action.payload.meta || <TMeta>{};
    },

    getOneHoliday(state, action) {
      state.holiday = action.payload.row || null;
    },

    createOneHoliday(state, action) {
      state.holidays = [action.payload.row, ...state.holidays];
    },

    updateOneHoliday(state, action) {
      state.holidays = state.holidays.map(item => {
        if (item.id !== action.payload.id) return item;
        else return { ...item, ...action.payload.row };
      });
    },

    removeOneHoliday(state, action) {
      state.holidays = state.holidays.filter(
        item => item.id !== action.payload.id
      );
    }
  }
});

export const {
  getAllHoliday,
  getOneHoliday,
  createOneHoliday,
  updateOneHoliday,
  removeOneHoliday
} = holidaySlice.actions;
export default holidaySlice.reducer;
