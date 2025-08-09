import React from 'react';
import Avatar from 'components/base/Avatar';
import { Card, Dropdown, Nav } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { Link, useNavigate } from 'react-router-dom';
import Scrollbar from 'components/base/Scrollbar';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import useAuthHook from '@/hooks/modules/useAuthHook';
import { profileDropdownNavItems } from '@/data';
import { defaultAvatar } from '@/helpers/common';
import { getUserFirstAndLastName } from '@/helpers/utils';
import { toast } from 'react-toastify';

const ProfileDropdownMenu = ({ className }: { className?: string }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user, logout } = useAuthHook();
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleOnLogoutSubmit = async () => {
    setLoading(true);
    setTimeout(() => {
      logout()
        .then(() => {
          navigate('/auth/sign-in');
        })
        .catch(e => {
          toast.error(e?.response?.data?.message || t('message_failed'));
          console.error(e);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
  };

  return (
    <Dropdown.Menu
      align="end"
      className={classNames(
        className,
        'navbar-top-dropdown-menu navbar-dropdown-caret py-0 dropdown-profile shadow border'
      )}
    >
      <Card className="position-relative border-0">
        <Card.Body className="p-0">
          <div className="d-flex flex-column align-items-center justify-content-center gap-2 pt-4 pb-3">
            <Avatar src={user?.avatar || defaultAvatar} size="xl" />
            <h6 className="text-body-emphasis">
              {getUserFirstAndLastName(user) || ''}
            </h6>
          </div>

          <div style={{ height: '10rem' }}>
            <Scrollbar>
              <Nav className="nav flex-column mb-2 pb-1">
                {profileDropdownNavItems?.map(item => (
                  <Nav.Item key={item.label}>
                    <Nav.Link href={item?.link} className="px-3">
                      <FeatherIcon
                        icon={item?.icon}
                        size={16}
                        className="me-2 text-body"
                      />
                      <span className="text-body-highlight">{item?.label}</span>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Scrollbar>
          </div>
        </Card.Body>

        <Card.Footer className="p-0 border-top border-translucent">
          <div className="px-3 my-3">
            <Link
              to="#"
              className="btn btn-phoenix-secondary d-flex flex-center w-100"
              onClick={handleOnLogoutSubmit}
            >
              <FeatherIcon
                icon="log-out"
                className="me-2"
                size={16}
                spin={loading}
              />
              {t('sign_out')}
            </Link>
          </div>
          <div className="my-2 text-center fw-bold fs-10 text-body-quaternary">
            <Link className="text-body-quaternary me-1" to="#">
              {t('privacy_policy')}
            </Link>
            •
            <Link className="text-body-quaternary mx-1" to="#">
              {t('terms_of_service')}
            </Link>
            •
            <Link className="text-body-quaternary ms-1" to="#">
              {t('cookies')}
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </Dropdown.Menu>
  );
};

export default ProfileDropdownMenu;
