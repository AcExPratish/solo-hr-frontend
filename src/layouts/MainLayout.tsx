import classNames from 'classnames';
import Footer from 'components/footers/Footer';
import NavbarDual from 'components/navbars/navbar-dual/NavbarDual';
import NavbarTopHorizontal from 'components/navbars/navbar-horizontal/NavbarTopHorizontal';
import NavbarTopDefault from 'components/navbars/navbar-top/NavbarTopDefault';
import NavbarVertical from 'components/navbars/navbar-vertical/NavbarVertical';
import { useAppContext } from 'providers/AppProvider';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { AlertMessageProvider } from 'providers/AlertMessageProvider';
import ToastMessage from '@/components/common/custom/ToastMessage';
import useAuthHook from '@/hooks/modules/useAuthHook';
import React from 'react';
import PhoenixLoader from '@/components/common/PhoenixLoader';

const MainLayout = () => {
  const {
    config: { navbarPosition }
  } = useAppContext();

  const { fetchMe } = useAuthHook();
  const [loading, setLoading] = React.useState<boolean>(false);
  const { contentClass, footerClass } = useMainLayoutContext();

  const loadMe = async () => {
    setLoading(true);
    await fetchMe()
      .catch(e => {
        console.error(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    loadMe();
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <PhoenixLoader />
      ) : (
        <React.Fragment>
          <Container fluid className="px-0">
            {(navbarPosition === 'vertical' || navbarPosition === 'combo') && (
              <NavbarVertical />
            )}
            {navbarPosition === 'vertical' && <NavbarTopDefault />}
            {(navbarPosition === 'horizontal' ||
              navbarPosition === 'combo') && <NavbarTopHorizontal />}
            {navbarPosition === 'dual' && <NavbarDual />}

            <div className={classNames(contentClass, 'content')}>
              <AlertMessageProvider>
                <Outlet />
              </AlertMessageProvider>
              <Footer
                className={classNames(footerClass, 'position-absolute')}
              />
              <ToastMessage />
            </div>
          </Container>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default MainLayout;
