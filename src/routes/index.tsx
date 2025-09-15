import MainLayout from 'layouts/MainLayout';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import MainLayoutProvider from 'providers/MainLayoutProvider';
import Error404 from 'pages/error/Error404';
import Error403 from 'pages/error/Error403';
import Error500 from 'pages/error/Error500';
import App from 'App';

import { AuthRoutes } from './AuthRoutes';
import AuthGuard from '@/utils/route-guard/AuthGuard';
import UserManagementRoutes from './UserManagementRoutes';
import EmployeeManagementRoutes from './EmployeeManagementRoutes';
import Dashboard from '@/pages/dashboard';

const routes: RouteObject[] = [
  {
    element: <App />,
    children: [
      AuthRoutes,
      UserManagementRoutes,
      EmployeeManagementRoutes,

      {
        path: '/',
        element: (
          <MainLayoutProvider>
            <AuthGuard>
              <MainLayout />
            </AuthGuard>
          </MainLayoutProvider>
        ),
        children: [
          {
            index: true,
            element: <Dashboard />
          },
          {
            path: '/dashboard',
            element: <Dashboard />
          }
        ]
      },

      {
        path: '/errors/',
        children: [
          {
            path: '404',
            element: <Error404 />
          },
          {
            path: '403',
            element: <Error403 />
          },
          {
            path: '500',
            element: <Error500 />
          }
        ]
      },

      {
        path: '*',
        element: <Error404 />
      }
    ]
  }
];

export const router = createBrowserRouter(routes);

export default routes;
