import React from 'react';
import EmployeeDashboardKPI from '@/components/modules/dashboard/employee/EmployeeDashboardKPI';
import EmployeeDashboardWeeklyClockInOutTimes from '@/components/modules/dashboard/employee/EmployeeDashboardWeeklyClockInOutTimes';
import { employeeDashboardData } from '@/data/mock-data';
import EmployeeDashboardMonthlyAttendanceSummary from '@/components/modules/dashboard/employee/EmployeeDashboardMonthlyAttendanceSummary';
import { Col, Row } from 'react-bootstrap';
import DashboardUpcomingEvents from '@/components/modules/dashboard/DashboardUpcomingEvents';
import DashboardUpcomingLeaves from '@/components/modules/dashboard/DashboardUpcomingLeaves';

const EmployeeDashboard = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const {
    kpis,
    attendances,
    monthlyAttendanceSummary,
    upcomingEvents,
    upcomingLeaves
  } = employeeDashboardData;

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

      <Row className="gap-2 gap-md-0">
        {/* Employee Dashboard Monthly Attendance Summary */}
        <Col xs={12} md={4} style={{ padding: '0rem .300rem', margin: '0' }}>
          <EmployeeDashboardMonthlyAttendanceSummary
            monthlyAttendanceSummary={monthlyAttendanceSummary ?? {}}
            loading={loading}
          />
        </Col>

        {/* Employee Dashboard Upcoming Events */}
        <Col xs={12} md={4} style={{ padding: '0rem .375rem', margin: '0' }}>
          <DashboardUpcomingEvents
            upcomingEvents={upcomingEvents ?? []}
            loading={loading}
          />
        </Col>

        {/* Employee Dashboard Upcoming Leaves*/}
        <Col xs={12} md={4} style={{ padding: '0rem .375rem', margin: '0' }}>
          <DashboardUpcomingLeaves
            upcomingLeaves={upcomingLeaves ?? []}
            loading={loading}
          />
        </Col>
      </Row>

      {/* Employee Dashboard Weekly Clock In/Out Times */}
      <EmployeeDashboardWeeklyClockInOutTimes
        attendances={attendances ?? []}
        loading={loading}
      />
    </Row>
  );
};

export default EmployeeDashboard;
