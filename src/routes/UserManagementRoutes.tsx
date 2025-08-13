import { RouteObject } from 'react-router-dom';
import MainLayoutProvider from '../providers/MainLayoutProvider';
import AuthGuard from '../utils/route-guard/AuthGuard';
import MainLayout from '../layouts/MainLayout';
import { lazy, Suspense } from 'react';
import PhoenixLoader from '../components/common/PhoenixLoader';

const UserPage = lazy(() => import('pages/user-management/UserPage'));
const RolePage = lazy(() => import('pages/user-management/RolePage'));

const UserManagementRoutes: RouteObject = {
  path: '/user-management/',
  element: (
    <MainLayoutProvider>
      <AuthGuard>
        <MainLayout />
      </AuthGuard>
    </MainLayoutProvider>
  ),
  children: [
    {
      path: 'user',
      index: true,
      element: (
        <Suspense fallback={<PhoenixLoader />}>
          <UserPage />
        </Suspense>
      )
    },
    {
      path: 'role',
      index: true,
      element: (
        <Suspense fallback={<PhoenixLoader />}>
          <RolePage />
        </Suspense>
      )
    }
  ]
};

export default UserManagementRoutes;
