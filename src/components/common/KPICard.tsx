import React from 'react';
import { TEmployeeDashboardKPI } from '@/types/modules/dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhoenixLoader from './PhoenixLoader';

interface KPICardProps {
  index: number;
  kpi: TEmployeeDashboardKPI;
  loading?: boolean;
}

const colors = [
  {
    backgroundColor: '#DCFCE7',
    color: '#16A34A'
  },
  {
    backgroundColor: '#DBEAFE',
    color: '#2563EB '
  },
  {
    backgroundColor: '#F3E8FF',
    color: '#9333EA'
  },
  {
    backgroundColor: '#FEF3C7',
    color: '#EA580C'
  }
];

const KPICard = ({ kpi, index = 0, loading = false }: KPICardProps) => {
  return (
    <div className="bg-white rounded-3 shadow-sm border border-gray-100 p-4">
      <div className="d-flex items-start justify-content-between">
        {loading ? (
          <PhoenixLoader />
        ) : (
          <React.Fragment>
            <div>
              <p className="fs-9 text-gray-500 mb-1">{kpi?.title ?? ''}</p>
              <h3 className="fs-8 fw-bold text-gray-900 mb-1">
                {kpi?.value ?? ''}
              </h3>
              <div
                className={`fs-10 ${
                  Number(kpi?.change) > 0 ? 'text-success' : 'text-danger'
                }`}
              >
                {Number(kpi?.change) > 0 ? '+' : ''}
                {kpi?.change}%
              </div>
            </div>

            <div>
              <FontAwesomeIcon
                // @ts-expect-error - icon is optional
                icon={kpi?.icon}
                className="p-3 rounded-pill fs-8"
                style={{
                  backgroundColor:
                    colors?.[index % colors?.length]?.backgroundColor,
                  color: colors?.[index % colors?.length]?.color
                }}
              />
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default KPICard;
