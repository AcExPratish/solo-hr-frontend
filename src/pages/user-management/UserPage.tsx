/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { TUser, TUserFilter } from '@/types/modules/user-management/user';
import { useNavigate } from 'react-router-dom';
import { TLoader } from '@/types/modules';
import useUserHook from '@/hooks/modules/useUserHook';
import { useTranslation } from 'react-i18next';
import { checkScope } from '@/helpers/auth';
import { confirmAlert } from '@/components/common/custom/ConfirmAlert';
import { getUserFirstAndLastName, pageCount } from '@/helpers/utils';
import useAdvanceTable, { UseAdvanceTableProps } from '@/hooks/useAdvanceTable';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/base/Button';
import SearchBox from '@/components/common/SearchBox';
import AdvanceTableProvider from '@/providers/AdvanceTableProvider';
import { ModalProps } from 'react-bootstrap';
import UserTable, {
  userTableColumns
} from '@/components/modules/user-management/table/UserTable';
import UserForm from '@/components/modules/user-management/form/UserForm';

// Initial values
const initialFilter: TUserFilter = {
  page: 1,
  limit: 10,
  search: ''
};

const initialValues: TUser = {
  id: '',
  username: '',
  first_name: '',
  middle_name: '',
  last_name: '',
  password: '',
  email: '',
  phone: '',
  date_of_birth: '',
  email_verified_at: '',
  role_id: ''
};

const initialLoader: TLoader = {
  list: false,
  form: false
};

const UserPage = () => {
  //React Hooks
  const navigate = useNavigate();
  const { t } = useTranslation();
  const page = t('user');

  // User States
  const [loader, setLoader] = React.useState<TLoader>(initialLoader);
  const [filter, setFilter] = React.useState<TUserFilter>(initialFilter);
  const [searchInput, setSearchInput] = React.useState<string>('');
  const [user, setUser] = React.useState<TUser>(initialValues);
  const [modal, setModal] = React.useState<ModalProps>({
    show: false,
    placement: 'end'
  });

  //Custom Hooks
  const { users, meta, fetchAllUser, createUser, updateUser, deleteUser } =
    useUserHook();

  // Handlers
  const handleOnAdd = () => {
    setUser(initialValues);
    setModal({ ...modal, ...{ show: true } });
  };

  const handleOnEdit = (data: TUser) => {
    fetchOneItem(data);
    setModal({ ...modal, ...{ show: true } });
  };

  const handleOnDelete = (data: TUser) => {
    confirmAlert({
      title: `${t('dialog_delete_title')}`,
      message: `${t('dialog_delete_body', {
        name: getUserFirstAndLastName(data)
      })}`
    }).then(resp => {
      if (resp && data) {
        deleteItem(data);
      }
    });
  };

  // On Submit
  const handleOnSubmit = (formData: TUser) => {
    setLoader({ form: true });
    if (formData.id) {
      updateItem(Number(formData.id), formData);
    } else {
      createItem(formData);
    }
  };

  // Table
  const mappedTable = () => {
    const tempTable: UseAdvanceTableProps<TUser> = {
      data: users,
      columns: userTableColumns({
        onEdit: handleOnEdit,
        onDelete: handleOnDelete
      }),
      pageSize: filter.limit,
      pageCount: pageCount(meta.total_rows || 0, filter.limit),
      totalRows: meta?.total_rows || 0,
      pagination: true,
      sortable: true,
      manualPagination: true,
      onPaginationChange: updater => {
        const newState =
          typeof updater === 'function'
            ? updater(table.getState().pagination)
            : updater;
        table.getState().pagination.pageIndex = newState.pageIndex;
        table.getState().pagination.pageSize = newState.pageSize;
        setFilter({
          ...filter,
          page: newState.pageIndex + 1,
          limit: newState.pageSize
        });
      }
    };
    return tempTable;
  };
  const table = useAdvanceTable(mappedTable());

  // API Handlers
  const createItem = (data: TUser) => {
    setModal({ ...modal, ...{ show: true } });
    createUser(data)
      .then(() => {
        toast.success(
          t('message_success_create', {
            page,
            name: getUserFirstAndLastName(data)
          })
        );
        setUser(initialValues);
        setModal({ ...modal, ...{ show: false } });
        setLoader({ form: false });
      })
      .catch(() => {
        toast.error(t('message_failed_create'));
        setLoader({ form: false });
      });
  };

  const updateItem = (id: number, data: TUser) => {
    setModal({ ...modal, ...{ show: true } });
    updateUser(id, data)
      .then(() => {
        toast.success(
          t('message_success_update', {
            page,
            name: getUserFirstAndLastName(data)
          })
        );
        setModal({ ...modal, ...{ show: false } });
        setLoader({ form: false });
      })
      .catch(() => {
        toast.error(t('message_failed_update'));
        setLoader({ form: false });
      });
  };

  const deleteItem = (data: TUser) => {
    setLoader({ list: true });
    if (data?.id) {
      deleteUser(Number(data?.id))
        .then(() => {
          toast.success(
            t('message_success_delete', {
              page,
              name: getUserFirstAndLastName(data)
            })
          );
          setLoader({ list: false });
        })
        .catch(e => {
          console.log(e);
          toast.error(t('message_failed_delete'));
          setLoader({ list: false });
        });
    }
  };

  const fetchOneItem = (row: TUser) => {
    setLoader({ list: true });
    setUser(row);
    setLoader({ list: false });
  };

  const fetchAllItem = () => {
    setLoader({ list: true });
    fetchAllUser(filter)
      .then(() => {
        setLoader({ list: false });
      })
      .catch(e => {
        console.error(e);
        toast.error(t('message_failed'));
        setLoader({ list: false });
      });
  };

  // Use Effects
  React.useEffect(() => {
    const handler = setTimeout(() => {
      setFilter({ ...filter, search: searchInput, page: 1 });
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchInput]);

  React.useEffect(() => {
    fetchAllItem();
  }, [JSON.stringify(filter)]);

  React.useEffect(() => {
    if (!checkScope('users.view')) {
      navigate('/error/403');
    }
  }, []);

  return (
    <React.Fragment>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h2 className="mb-0">{t('user_list')}</h2>
        {checkScope('users.create') && (
          <Button variant="primary" onClick={handleOnAdd}>
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            {t('add')} {t('user')}
          </Button>
        )}
      </div>

      <AdvanceTableProvider {...table}>
        <div className="mb-4 d-flex justify-content-end align-items-center gap-2">
          <SearchBox
            value={searchInput}
            placeholder={`${t('search')} ${t('user')}`}
            onChange={e => setSearchInput(e.target.value)}
          />
        </div>

        <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
          <UserTable loader={loader.list} />
        </div>
      </AdvanceTableProvider>

      <UserForm
        formData={user}
        modal={modal}
        onSubmit={values => {
          handleOnSubmit(values);
        }}
        onClose={() => {
          setModal({ ...modal, ...{ show: false } });
        }}
        loading={loader.form}
      />
    </React.Fragment>
  );
};

export default UserPage;
