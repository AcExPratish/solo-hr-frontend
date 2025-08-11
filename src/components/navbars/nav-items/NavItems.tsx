import React from 'react';
import {
  Dropdown,
  // Modal,
  Nav
} from 'react-bootstrap';
import ProfileDropdownMenu from './ProfileDropdownMenu';
// import NineDotMenu from './NineDotMenu';
import { useAppContext } from 'providers/AppProvider';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import NotificationDropdownMenu from './NotificationDropdownMenu';
// import ThemeToggler from 'components/common/ThemeToggler';
// import DropdownSearchBox from 'components/common/DropdownSearchBox';
// import SearchResult from 'components/common/SearchResult';
import Button from '@/components/base/Button';
import useAuthHook from '@/hooks/modules/useAuthHook';
import { defaultAvatar } from '@/helpers/common';
import Avatar from '@/components/base/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import useAttendanceHook from '@/hooks/modules/useAttendanceHook';
import { TAttendance } from '@/types/modules/attendance';
import ClockInClockOutModalForm from '@/components/modules/attendance/modal/ClockInClockOutModalForm';
import { toast } from 'react-toastify';
// import classNames from 'classnames';

// interfaces
interface TModalState {
  clock_in: boolean;
  clock_out: boolean;
}

// Initial values
const initialModalValue: TModalState = {
  clock_in: false,
  clock_out: false
};

const NavItems = () => {
  const {
    config: {
      // eslint-disable-next-line
      navbarPosition
    }
  } = useAppContext();
  const { t } = useTranslation();
  const { user } = useAuthHook();
  const [modal, setModal] = React.useState<TModalState>(initialModalValue);
  const { fetchTodaysAttendance, clockIn, clockOut, attendance } =
    useAttendanceHook();

  // const [openSearchModal, setOpenSearchModal] = React.useState<boolean>(false);

  const handleModalAction = (name: keyof TModalState) => {
    setModal(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const handleCloseModal = () => {
    setModal(initialModalValue);
  };

  const handleSubmit = (values: TAttendance) => {
    if (values?.clock_in) {
      const { out_note } = values;
      clockOut({ out_note })
        .then(() => {
          handleCloseModal();
          toast.success(t('clock_out_success'));
        })
        .catch(e => {
          console.error(e);
          toast.error(e?.response?.data?.message || t('message_failed'));
        });
    } else {
      const { in_note } = values;
      clockIn({ in_note })
        .then(() => {
          handleCloseModal();
          toast.success(t('clock_in_success'));
        })
        .catch(e => {
          console.error(e);
          toast.error(e?.response?.data?.message || t('message_failed'));
        });
    }
  };

  React.useEffect(() => {
    fetchTodaysAttendance().catch(e => {
      console.error(e);
    });
  }, []);

  return (
    <div className="navbar-nav navbar-nav-icons flex-row">
      {/* Clock In / Clock Out */}
      <Button
        startIcon={
          <FontAwesomeIcon
            icon={faClock}
            size="lg"
            className={`${
              !attendance?.clock_in ? 'text-success' : 'text-danger'
            } me-1`}
          />
        }
        onClick={() =>
          handleModalAction(attendance?.clock_in ? 'clock_out' : 'clock_in')
        }
      >
        {attendance?.clock_in ? t('clock_out') : t('clock_in')}
      </Button>

      {/* Theme Toggler */}
      {/* <Nav.Item>
        <ThemeToggler className="px-2" />
      </Nav.Item> */}

      {/* Search */}
      {/* <Nav.Item
        className={classNames({
          'd-lg-none':
            navbarPosition === 'vertical' || navbarPosition === 'dual'
        })}
      >
        <Nav.Link onClick={() => setOpenSearchModal(!openSearchModal)}>
          <FeatherIcon icon="search" size={19} style={{ marginBottom: 2 }} />
        </Nav.Link>
      </Nav.Item> */}

      {/* Notification Dropdown */}
      <Nav.Item>
        <Dropdown autoClose="outside" className="h-100">
          <Dropdown.Toggle
            as={Link}
            to="#"
            className="dropdown-caret-none nav-link h-100"
            variant=""
          >
            <FeatherIcon icon="bell" size={20} />
          </Dropdown.Toggle>
          <NotificationDropdownMenu />
        </Dropdown>
      </Nav.Item>

      {/* Profile Dropdown */}
      <Nav.Item>
        <Dropdown autoClose="outside" className="h-100">
          <Dropdown.Toggle
            as={Link}
            to="#!"
            className="dropdown-caret-none nav-link pe-0 py-0 lh-1 h-100 d-flex align-items-center"
            variant=""
          >
            <Avatar src={user?.avatar || defaultAvatar} size="l" />
          </Dropdown.Toggle>
          <ProfileDropdownMenu />
        </Dropdown>
      </Nav.Item>

      {/* Modals */}
      <ClockInClockOutModalForm
        attendance={attendance}
        show={!attendance?.clock_in ? modal.clock_in : modal.clock_out}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />

      {/* <Modal
        show={openSearchModal}
        onHide={() => setOpenSearchModal(false)}
        className="search-box-modal mt-15"
      >
        <Modal.Body className="p-0 bg-transparent">
          <DropdownSearchBox
            className="navbar-top-search-box"
            inputClassName="rounded-pill"
            size="lg"
            style={{ width: 'auto' }}
          >
            <SearchResult />
          </DropdownSearchBox>
        </Modal.Body>
      </Modal> */}
    </div>
  );
};

export default NavItems;
