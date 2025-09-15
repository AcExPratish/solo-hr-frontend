import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface TEmployeeDashboard {
  kpis?: TEmployeeDashboardKPI[];
  attendances?: TEmployeeDashboardAttendance[];
  monthlyAttendanceSummary?: TEmployeeDashboardMonthlyAttendanceSummary;
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
