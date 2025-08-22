import { RouteObject } from 'react-router-dom';
import MainLayoutProvider from '../providers/MainLayoutProvider';
import AuthGuard from '../utils/route-guard/AuthGuard';
import MainLayout from '../layouts/MainLayout';
import { lazy, Suspense } from 'react';
import PhoenixLoader from '../components/common/PhoenixLoader';

const EmployeesPage = lazy(
  () => import('@/pages/employee-management/employee')
);
const EmployeesDetailPage = lazy(
  () => import('@/pages/employee-management/employee/detail')
);

const EmployeeManagementRoutes: RouteObject = {
  path: '/employee-management',
  element: (
    <MainLayoutProvider>
      <AuthGuard>
        <MainLayout />
      </AuthGuard>
    </MainLayoutProvider>
  ),
  children: [
    {
      path: 'employees',
      index: true,
      element: (
        <Suspense fallback={<PhoenixLoader />}>
          <EmployeesPage />
        </Suspense>
      )
    },
    {
      path: 'employees/detail/:employeeId',
      element: (
        <Suspense fallback={<PhoenixLoader />}>
          <EmployeesDetailPage />
        </Suspense>
      )
    }
  ]
};

export default EmployeeManagementRoutes;
