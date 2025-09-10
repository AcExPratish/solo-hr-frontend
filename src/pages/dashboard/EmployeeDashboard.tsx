import React from 'react';
import EmployeeDashboardKPI from '@/components/modules/dashboard/employee/EmployeeDashboardKPI';
import EmployeeDashboardWeeklyClockInOutTimes from '@/components/modules/dashboard/employee/EmployeeDashboardWeeklyClockInOutTimes';
import { employeeDashboardData } from '@/data/mock-data';

const EmployeeDashboard = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const { kpis, attendances } = employeeDashboardData;

  // Use Effects
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <React.Fragment>
      {/* Employee Dashboard KPIs */}
      <EmployeeDashboardKPI kpis={kpis ?? []} loading={loading} />

      {/* Employee Dashboard Weekly Clock In/Out Times */}
      <EmployeeDashboardWeeklyClockInOutTimes
        attendances={attendances ?? []}
        loading={loading}
      />
    </React.Fragment>
  );
};

export default EmployeeDashboard;
