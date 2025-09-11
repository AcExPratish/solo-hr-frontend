import React from 'react';
import EmployeeDashboardKPI from '@/components/modules/dashboard/employee/EmployeeDashboardKPI';
import EmployeeDashboardWeeklyClockInOutTimes from '@/components/modules/dashboard/employee/EmployeeDashboardWeeklyClockInOutTimes';
import { employeeDashboardData } from '@/data/mock-data';
import EmployeeDashboardMonthlyAttendanceSummary from '@/components/modules/dashboard/employee/EmployeeDashboardMonthlyAttendanceSummary';
import { Row } from 'react-bootstrap';

const EmployeeDashboard = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const { kpis, attendances, monthlyAttendanceSummary } = employeeDashboardData;

  // Use Effects
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Row className="gap-2">
      {/* Employee Dashboard KPIs */}
      <EmployeeDashboardKPI kpis={kpis ?? []} loading={loading} />

      {/* Employee Dashboard Monthly Attendance Summary */}
      <EmployeeDashboardMonthlyAttendanceSummary
        monthlyAttendanceSummary={monthlyAttendanceSummary ?? {}}
        loading={loading}
      />

      {/* Employee Dashboard Weekly Clock In/Out Times */}
      <EmployeeDashboardWeeklyClockInOutTimes
        attendances={attendances ?? []}
        loading={loading}
      />
    </Row>
  );
};

export default EmployeeDashboard;
