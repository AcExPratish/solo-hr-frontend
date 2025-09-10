import React from 'react';
import KPICard from '@/components/common/KPICard';
import { Col, Row } from 'react-bootstrap';
import { TEmployeeDashboardKPI } from '@/types/modules/dashboard';

interface EmployeeDashboardKPIProps {
  kpis: TEmployeeDashboardKPI[];
  loading?: boolean;
}

const EmployeeDashboardKPI = ({ kpis, loading }: EmployeeDashboardKPIProps) => {
  return (
    <Row>
      {/* Employee Dashboard KPIs */}
      {kpis?.map((kpi, index: number) => (
        <Col key={index} xs={12} md={6} lg={3} className="p-1 m-0">
          <KPICard kpi={kpi} index={index} loading={loading} />
        </Col>
      ))}
    </Row>
  );
};

export default EmployeeDashboardKPI;
