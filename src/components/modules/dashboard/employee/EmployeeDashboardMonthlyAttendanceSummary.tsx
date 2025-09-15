import React from 'react';
import { TEmployeeDashboardMonthlyAttendanceSummary } from '@/types/modules/dashboard';
import { useTranslation } from 'react-i18next';
import PhoenixLoader from '@/components/common/PhoenixLoader';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface EmployeeDashboardMonthlyAttendanceSummaryProps {
  monthlyAttendanceSummary: TEmployeeDashboardMonthlyAttendanceSummary;
  loading?: boolean;
}

const EmployeeDashboardMonthlyAttendanceSummary = ({
  monthlyAttendanceSummary,
  loading
}: EmployeeDashboardMonthlyAttendanceSummaryProps) => {
  // React Hooks
  const { t } = useTranslation();

  // Chart Labels and Series
  const labels = [t('present'), t('late'), t('absent')];
  const series = [
    monthlyAttendanceSummary?.present ?? 0,
    monthlyAttendanceSummary?.late ?? 0,
    monthlyAttendanceSummary?.absent ?? 0
  ];

  // Chart Options
  const options: ApexOptions = {
    chart: {
      type: 'donut',
      toolbar: { show: false },
      animations: { enabled: true }
    },
    labels,
    colors: ['#16A34A', '#F59E0B', '#EF4444'],
    legend: {
      show: true,
      position: 'bottom',
      fontSize: '12px',
      markers: { size: 10 },
      formatter: function (seriesName: string, opts: { seriesIndex: number }) {
        const val = series[opts?.seriesIndex];
        return `${seriesName} (${val})`;
      }
    },
    dataLabels: { enabled: false },
    stroke: { width: 0 },
    plotOptions: {
      pie: {
        donut: {
          size: '72%',
          labels: {
            show: true,
            name: {
              show: true
            },
            value: {
              show: true
            },
            total: { show: false }
          }
        }
      }
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val}`
      }
    },
    responsive: [
      {
        breakpoint: 640,
        options: {
          legend: { fontSize: '12px' },
          plotOptions: {
            pie: { donut: { size: '72%' } }
          }
        }
      }
    ]
  };

  return (
    <div className="bg-white rounded-3 shadow-sm shadow-sm mb-0 pb-0">
      <div className="p-3">
        <h6 className="fw-semibold text-dark fs-9">
          {t('monthly_attendance_summary')}
        </h6>
      </div>

      <hr className="text-gray-200 p-0 m-0 mb-2" />

      <div className="p-3">
        <div className="rounded">
          <div className="d-flex align-items-end justify-content-around h-100 px-3 pb-3">
            {loading ? (
              <PhoenixLoader />
            ) : (
              <Chart options={options} series={series} type="donut" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboardMonthlyAttendanceSummary;
