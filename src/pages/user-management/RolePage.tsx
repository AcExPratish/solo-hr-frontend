import React from 'react';
import { useTranslation } from 'react-i18next';
import AdvanceTableProvider from '../../providers/AdvanceTableProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/base/Button';
import SearchBox from '../../components/common/SearchBox';
import { confirmAlert } from '../../components/common/custom/ConfirmAlert';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { checkScope } from '../../helpers/auth';
import useAdvanceTable, {
  UseAdvanceTableProps
} from '../../hooks/useAdvanceTable';
import { TRole } from '@/types/modules/user-management/role';
import { TFilter, TLoader, TModalProps } from '@/types/modules';
import usePermissionHook from '@/hooks/modules/user-management/usePermissionHook';
import useRoleHook from '@/hooks/modules/user-management/useRoleHook';
import RoleTable, {
  roleTableColumns
} from '@/components/modules/user-management/table/RoleTable';
import { pageCount } from '@/helpers/utils';
import RoleForm from '@/components/modules/user-management/form/RoleForm';

// Initial values
const initialValues: TRole = {
  id: '',
  name: '',
  is_superuser: false,
  permissions: []
};

const initialFilter: TFilter = {
  page: 1,
  limit: 10,
  search: ''
};

const RolePage = () => {
  // React Hooks
  const { t } = useTranslation();
  const navigate = useNavigate();
  const page = t('role');

  // Custom Hooks
  const { permissions, fetchAllPermission } = usePermissionHook();
  const {
    roles,
    meta,
    fetchAllRole,
    fetchOneRole,
    createRole,
    updateRole,
    deleteRole
  } = useRoleHook();

  // Role States
  const [loader, setLoader] = React.useState<TLoader>({
    list: false,
    form: false
  });
  const [searchInput, setSearchInput] = React.useState<string>('');
  const [filter, setFilter] = React.useState<TFilter>(initialFilter);
  const [role, setRole] = React.useState<TRole>(initialValues);
  const [modal, setModal] = React.useState<TModalProps>({
    show: false,
    placement: 'end',
    type: ''
  });

  // Handlers
  const handleOnView = (data: TRole) => {
    fetchOneItem(data);
    setModal({ ...modal, ...{ show: true, type: 'view' } });
  };

  const handleOnAdd = () => {
    setRole(initialValues);
    setModal({ ...modal, ...{ show: true, type: 'add' } });
  };

  const handleOnEdit = (data: TRole) => {
    fetchOneItem(data);
    setModal({ ...modal, ...{ show: true, type: 'edit' } });
  };

  const handleOnDelete = (data: TRole) => {
    confirmAlert({
      title: `${t('dialog_delete_title')}`,
      message: `${t('dialog_delete_body', { name: data.name })}`
    }).then(resp => {
      if (resp && data) {
        deleteItem(data);
      }
    });
  };

  // On Submit
  const handleOnSubmit = (formData: TRole) => {
    setLoader({ form: true });
    if (formData.id) {
      updateItem(formData.id, formData);
    } else {
      createItem(formData);
    }
  };

  // API Handlers
  const createItem = (data: TRole) => {
    setModal({ ...modal, ...{ show: true } });
    createRole(data)
      .then(() => {
        toast.success(t('message_success_create', { page, name: data.name }));
        setRole(initialValues);
        setModal({ ...modal, ...{ show: false } });
        setLoader({ form: false });
      })
      .catch(e => {
        console.error(e);
        toast.error(t('message_failed_create'));
        setLoader({ form: false });
      });
  };

  const updateItem = (id: string, data: TRole) => {
    setModal({ ...modal, ...{ show: true } });
    updateRole(id, data)
      .then(() => {
        toast.success(t('message_success_update', { page, name: data.name }));
        setModal({ ...modal, ...{ show: false } });
        setLoader({ form: false });
      })
      .catch(e => {
        console.error(e);
        toast.error(t('message_failed_update'));
        setLoader({ form: false });
      });
  };

  const fetchOneItem = (row: TRole) => {
    setLoader({ list: true });
    fetchOneRole(row.id as string)
      .then(resp => {
        setRole(resp);
      })
      .catch(e => {
        console.error(e);
      });
    setLoader({ list: false });
  };

  const fetchAllItem = () => {
    setLoader({ list: true });
    fetchAllRole(filter)
      .then(() => {
        setLoader({ list: false });
      })
      .catch(e => {
        console.error(e);
        toast.error(t('message_failed'));
        setLoader({ list: false });
      });
  };

  const fetchAllPermissionItem = () => {
    if (permissions.length <= 0) {
      setLoader({ list: true });
      fetchAllPermission({ page: 1, limit: 500 })
        .then(() => {
          setLoader({ list: false });
        })
        .catch(e => {
          console.error(e);
          toast.error(t('message_failed'));
          setLoader({ list: false });
        });
    }
  };

  const deleteItem = (data: TRole) => {
    setLoader({ list: true });
    if (data.id) {
      deleteRole(data.id)
        .then(() => {
          toast.success(t('message_success_delete', { page, name: data.name }));
          setLoader({ list: false });
        })
        .catch(e => {
          console.error(e);
          toast.error(e.data?.message || t('message_failed_delete'));
          setLoader({ list: false });
        });
    }
  };

  // Table
  const mappedTable = () => {
    const tempTable: UseAdvanceTableProps<TRole> = {
      data: roles,
      columns: roleTableColumns({
        onView: handleOnView,
        onEdit: handleOnEdit,
        onDelete: handleOnDelete
      }),
      pageSize: filter.limit,
      pageCount: pageCount(meta?.total || 0, filter?.limit),
      totalRows: meta?.total || 0,
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
    if (!checkScope('roles.view')) {
      navigate('/errors/403');
    } else {
      fetchAllPermissionItem();
    }
  }, []);

  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h2 className="mb-0">{t('roles_and_permissions')}</h2>
        {checkScope('roles.create') && (
          <Button variant="primary" onClick={handleOnAdd}>
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            {t('add')} {page}
          </Button>
        )}
      </div>

      <AdvanceTableProvider {...table}>
        <div className="mb-4 d-flex justify-content-end align-items-center gap-2">
          <SearchBox
            value={searchInput}
            placeholder={`${t('search')} ${t('role')}`}
            onChange={e => setSearchInput(e.target.value)}
          />
        </div>

        <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
          <RoleTable loader={loader.list} />
        </div>
      </AdvanceTableProvider>

      {/* Modals */}
      <RoleForm
        formData={role}
        onSubmit={handleOnSubmit}
        onClose={() => setModal({ ...modal, ...{ show: false, type: '' } })}
        modal={modal}
        loading={loader.form}
      />
    </div>
  );
};

export default RolePage;
