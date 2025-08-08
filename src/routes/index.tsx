import MainLayout from 'layouts/MainLayout';
import Starter from 'pages/pages/Starter';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Ecommerce from 'pages/dashboard/ecommerce';
import ProjectManagement from 'pages/dashboard/ProjectManagement';
import MainLayoutProvider from 'providers/MainLayoutProvider';
import Default from 'pages/pages/landing/Default';
import PricingColumn from 'pages/pages/pricing/PricingColumn';
import Error404 from 'pages/error/Error404';
import Error403 from 'pages/error/Error403';
import Error500 from 'pages/error/Error500';
import Showcase from 'pages/Showcase';
import VerticalSidenav from 'pages/pages/layouts/VerticalSidenav';
import DarkModeDemo from 'pages/pages/layouts/DarkModeDemo';
import SidenavCollapse from 'pages/pages/layouts/SidenavCollapse';
import Darknav from 'pages/pages/layouts/Darknav';
import TopnavSlim from 'pages/pages/layouts/TopnavSlim';
import NavbarTopSlim from 'pages/pages/layouts/NavbarTopSlim';
import NavbarTop from 'pages/pages/layouts/NavbarTop';
import NavbarHorizontalSlim from 'pages/pages/layouts/NavbarHorizontalSlim';
import ComboNav from 'pages/pages/layouts/ComboNav';
import ComboNavSlim from 'pages/pages/layouts/ComboNavSlim';
import Members from 'pages/Members';
import DualNav from 'pages/pages/layouts/DualNav';
import App from 'App';
import Crm from 'pages/dashboard/Crm';
import PricingGrid from 'pages/pages/pricing/PricingGrid';
import Alternate from 'pages/pages/landing/Alternate';
import Timeline from 'pages/pages/Timeline';
import ComingSoon from 'pages/ComingSoon';

import { AuthRoutes } from './AuthRoutes';

const routes: RouteObject[] = [
  {
    element: <App />,
    children: [
      AuthRoutes,

      {
        path: '/',
        element: (
          <MainLayoutProvider>
            <MainLayout />
          </MainLayoutProvider>
        ),
        children: [
          {
            index: true,
            element: <Ecommerce />
          },
          {
            path: '/dashboard',
            children: [
              {
                path: 'project-management',
                element: <ProjectManagement />
              },
              {
                path: 'crm',
                element: <Crm />
              }
            ]
          },
          {
            path: '/pages',
            children: [
              {
                path: 'starter',
                element: <Starter />
              },
              {
                path: 'pricing',
                children: [
                  {
                    path: 'pricing-column',
                    element: <PricingColumn />
                  },
                  {
                    path: 'pricing-grid',
                    element: <PricingGrid />
                  }
                ]
              },
              {
                path: 'members',
                element: <Members />
              },
              {
                path: 'timeline',
                element: <Timeline />
              },
              {
                path: 'coming-soon',
                element: <ComingSoon />
              },
              {
                path: 'demo',
                children: [
                  {
                    path: 'vertical-sidenav',
                    element: <VerticalSidenav />
                  },
                  {
                    path: 'dark-mode',
                    element: <DarkModeDemo />
                  },
                  {
                    path: 'sidenav-collapse',
                    element: <SidenavCollapse />
                  },
                  {
                    path: 'darknav',
                    element: <Darknav />
                  },
                  {
                    path: 'topnav-slim',
                    element: <TopnavSlim />
                  },
                  {
                    path: 'navbar-top-slim',
                    element: <NavbarTopSlim />
                  },
                  {
                    path: 'navbar-top',
                    element: <NavbarTop />
                  },
                  {
                    path: 'horizontal-slim',
                    element: <NavbarHorizontalSlim />
                  },
                  {
                    path: 'combo-nav',
                    element: <ComboNav />
                  },
                  {
                    path: 'combo-nav-slim',
                    element: <ComboNavSlim />
                  },
                  {
                    path: 'dual-nav',
                    element: <DualNav />
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        path: 'pages/landing',
        children: [
          {
            path: 'default',
            element: <Default />
          },
          {
            path: 'alternate',
            element: <Alternate />
          }
        ]
      },
      {
        path: '/pages/errors/',
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
        path: 'showcase',
        element: <Showcase />
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
