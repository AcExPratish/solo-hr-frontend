import { useDispatch, useSelector } from 'store';
import {
  setTodaysAttendance,
  setClockIn,
  setClockOut
} from '../../store/reducers/attendanceSlice';
import { TAttendance } from '../../types/modules/attendance';
import AttendanceService from '@/services/AttendanceService';

const useAttendanceHook = () => {
  const dispatch = useDispatch();
  const { attendance } = useSelector(state => state.attendance);

  const fetchTodaysAttendance = async () => {
    try {
      const resp = await AttendanceService.fetchTodaysAttendance();
      const row: TAttendance = resp?.data?.data || {};
      dispatch(setTodaysAttendance({ row }));
      return row;
    } catch (e: unknown) {
      console.error('fetchTodaysAttendance', e);
      throw e;
    }
  };

  const clockIn = async (data: TAttendance) => {
    try {
      const resp = await AttendanceService.clockIn(data);
      const row: TAttendance = resp?.data?.data || {};
      dispatch(setClockIn({ row }));
      return row;
    } catch (e: unknown) {
      console.error('clockIn', e);
      throw e;
    }
  };

  const clockOut = async (data: TAttendance) => {
    try {
      const resp = await AttendanceService.clockOut(data);
      const row: TAttendance = resp?.data?.data || {};
      dispatch(setClockOut({ row }));
      return row;
    } catch (e: unknown) {
      console.error('clockOut', e);
      throw e;
    }
  };

  return {
    fetchTodaysAttendance,
    clockIn,
    clockOut,

    attendance
  };
};

export default useAttendanceHook;
