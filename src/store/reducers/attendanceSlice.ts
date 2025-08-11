import { TAttendance } from '@/types/modules/attendance';
import { createSlice } from '@reduxjs/toolkit';

interface AttendanceState {
  attendance: TAttendance;
}

const initialState: AttendanceState = {
  attendance: <TAttendance>{}
};

const attendanceSlice = createSlice({
  name: 'attendance',
  initialState,
  reducers: {
    setTodaysAttendance(state, action) {
      state.attendance = action.payload.row || {};
    },
    setClockIn(state, action) {
      state.attendance = { ...state.attendance, ...action.payload.row };
    },
    setClockOut(state, action) {
      state.attendance = { ...state.attendance, ...action.payload.row };
    }
  }
});

export const { setTodaysAttendance, setClockIn, setClockOut } =
  attendanceSlice.actions;
export default attendanceSlice.reducer;
