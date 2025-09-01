import { Nav, Navbar } from 'react-bootstrap';
import { RouteItems, routes } from 'sitemap';
import { capitalize } from 'helpers/utils';
import NavbarVerticalMenu from './NavbarVerticalMenu';
import {
  UilArrowFromRight,
  UilLeftArrowToLeft
} from '@iconscout/react-unicons';
import { useAppContext } from 'providers/AppProvider';
import Button from 'components/base/Button';
import NavbarTopNav from '../navbar-horizontal/NavbarTopNav';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import NavbarVerticalCollapseProvider from './NavbarVerticalCollapseProvider';
import { checkScope } from '@/helpers/auth';
import React from 'react';
import { useTranslation } from 'react-i18next';
import useAuthHook from '@/hooks/modules/useAuthHook';
import { TRole } from '@/types/modules/user-management/role';

const NavbarVerical = () => {
  const {
    config: {
      navbarPosition,
      openNavbarVertical,
      navbarVerticalAppearance,
      isNavbarVerticalCollapsed
    },
    setConfig
  } = useAppContext();

  const { t } = useTranslation();
  const { breakpoints } = useBreakpoints();
  const { user } = useAuthHook();

  const mappedRoutes = React.useMemo(() => {
    let mappedRoutes: RouteItems[] = JSON.parse(JSON.stringify(routes));

    if (user?.roles?.some((role: TRole) => role?.is_superuser)) {
      return mappedRoutes;
    }

    mappedRoutes = mappedRoutes
      .filter(routeParent =>
        routeParent.permission ? checkScope(routeParent.permission) : true
      )
      .map(route => {
        route.pages = route.pages
          .filter(data =>
            data.permission ? checkScope(data.permission) : true
          )
          .map(route2 => {
            if (route2.pages) {
              route2.pages = route2.pages?.filter(data =>
                data.permission ? checkScope(data.permission) : true
              );
            } else {
              route2.pages = undefined;
            }

            return route2;
          });
        return route;
      });

    return mappedRoutes;
  }, []);

  return (
    <NavbarVerticalCollapseProvider>
      <Navbar
        className="navbar-vertical"
        expand="lg"
        variant=""
        data-navbar-appearance={
          navbarVerticalAppearance === 'darker' ? 'darker' : ''
        }
      >
        <Navbar.Collapse id="navbarVerticalCollapse" in={openNavbarVertical}>
          <div className="navbar-vertical-content">
            <Nav className="flex-column" as="ul" id="navbarVerticalNav">
              {mappedRoutes?.map(route => (
                <Nav.Item key={route?.label}>
                  {!route?.labelDisabled && (
                    <>
                      <p className="navbar-vertical-label">
                        {capitalize(t(route?.label))}
                      </p>
                      <hr className="navbar-vertical-line" />
                    </>
                  )}
                  <NavbarVerticalMenu level={1} routes={route.pages} />
                </Nav.Item>
              ))}
            </Nav>

            {navbarPosition === 'combo' && breakpoints.down('lg') && (
              <div className="move-container">
                <div className="navbar-vertical-divider">
                  <hr className="navbar-vertical-hr" />
                </div>
                <NavbarTopNav />
              </div>
            )}
          </div>
        </Navbar.Collapse>
        <div className="navbar-vertical-footer">
          <Button
            className="navbar-vertical-toggle border-0 fw-semibold w-100 white-space-nowrap d-flex align-items-center"
            onClick={() => {
              setConfig({
                isNavbarVerticalCollapsed: !isNavbarVerticalCollapsed
              });
            }}
          >
            {isNavbarVerticalCollapsed ? (
              <UilArrowFromRight size={16} className="mb-1" />
            ) : (
              <>
                <UilLeftArrowToLeft size={16} className="mb-1" />
                <span className="ms-2">Collapsed View</span>
              </>
            )}
          </Button>
        </div>
      </Navbar>
    </NavbarVerticalCollapseProvider>
  );
};

export default NavbarVerical;
