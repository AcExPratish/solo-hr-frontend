import api from '../utils/api';
import { apiEndpoint } from '@/helpers/common';
import { TAttendance } from '@/types/modules/attendance';

const attendanceEndpoint: string = `${apiEndpoint}/attendance`;

const fetchTodaysAttendance = () => {
  return api.get(`${attendanceEndpoint}/check-attendance`);
};

const clockIn = (data: TAttendance) => {
  return api.post(`${attendanceEndpoint}/punch-in`, data);
};

const clockOut = (data: TAttendance) => {
  return api.post(`${attendanceEndpoint}/punch-out`, data);
};

const AttendanceService = {
  fetchTodaysAttendance,
  clockIn,
  clockOut
};

export default AttendanceService;
