import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { TUser } from './user-management/user';

export interface TEmployeeDashboard {
  kpis?: TEmployeeDashboardKPI[];
  attendances?: TEmployeeDashboardAttendance[];
  monthlyAttendanceSummary?: TEmployeeDashboardMonthlyAttendanceSummary;
  upcomingEvents?: TEmployeeDashboardEvent[];
  upcomingLeaves?: TEmployeeDashboardLeave[];
}

export interface TEmployeeDashboardKPI {
  title?: string;
  value?: string;
  change?: number;
  icon?: IconProp;
}

export type TEmployeeDashboardAttendanceStatus = 'weekend' | 'present' | 'late';

export interface TEmployeeDashboardAttendance {
  day?: string;
  clock_in?: string;
  clock_out?: string;
  status?: TEmployeeDashboardAttendanceStatus;
}

export interface TEmployeeDashboardMonthlyAttendanceSummary {
  month?: string;
  present?: number;
  late?: number;
  absent?: number;
}

export interface TEmployeeDashboardEvent {
  id?: string;
  title?: string;
  date?: string;
  description?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
  created_by_id?: string;
  updated_by_id?: string;
  type?: 'holiday' | 'birthday' | 'anniversary';
}

export interface TEmployeeDashboardLeave {
  id?: string;
  title?: string;
  date?: string;
  description?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
  created_by_id?: string;
  updated_by_id?: string;
  type?: 'today' | 'this_week' | 'this_month';
  user?: TUser;
}
