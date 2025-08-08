import MainLayout from 'layouts/MainLayout';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import MainLayoutProvider from 'providers/MainLayoutProvider';
import Error404 from 'pages/error/Error404';
import Error403 from 'pages/error/Error403';
import Error500 from 'pages/error/Error500';
import App from 'App';
import ComingSoon from 'pages/ComingSoon';

import { AuthRoutes } from './AuthRoutes';
import AuthGuard from '@/utils/route-guard/AuthGuard';

const routes: RouteObject[] = [
  {
    element: <App />,
    children: [
      AuthRoutes,

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
            element: <></>
          },
          {
            path: '/dashboard',
            children: [
              {
                path: 'project-management',
                element: <>here</>
              },
              {
                path: 'crm',
                element: <>here2</>
              }
            ]
          },
          {
            path: '/pages',
            children: [
              {
                path: 'coming-soon',
                element: <ComingSoon />
              }
            ]
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
