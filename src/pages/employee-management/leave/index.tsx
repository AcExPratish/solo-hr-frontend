import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TLoader } from '@/types/modules';
import { useTranslation } from 'react-i18next';
import { checkScope } from '@/helpers/auth';
import { confirmAlert } from '@/components/common/custom/ConfirmAlert';
import useAdvanceTable, { UseAdvanceTableProps } from '@/hooks/useAdvanceTable';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/base/Button';
import SearchBox from '@/components/common/SearchBox';
import AdvanceTableProvider from '@/providers/AdvanceTableProvider';
import { ModalProps } from 'react-bootstrap';
import { pageCount } from '@/helpers/utils';
import LeaveTable, {
  leaveAdminTableColumns
} from '@/components/modules/employee-management/table/LeaveTable';
import {
  TLeave,
  TLeaveFilter
} from '@/types/modules/employee-management/leave';
import useLeaveHook from '@/hooks/modules/employee-management/useLeaveHook';
import LeaveForm from '@/components/modules/employee-management/form/LeaveForm';
import useLeaveTypeHook from '@/hooks/modules/employee-management/useLeaveTypeHook';

// Initial values
const initialFilter: TLeaveFilter = {
  page: 1,
  limit: 10,
  search: ''
};

const initialValues: TLeave = {
  id: undefined,
  user_id: '',
  leave_type_id: '',
  from_date: '',
  to_date: '',
  total_days: 0,
  reason: '',
  status: 'pending'
};

const initialLoader: TLoader = {
  list: false,
  form: false
};

const LeavePage = () => {
  // React Hooks
  const navigate = useNavigate();
  const { t } = useTranslation();
  const page = t('leave');

  // Use States
  const [loader, setLoader] = React.useState<TLoader>(initialLoader);
  const [filter, setFilter] = React.useState<TLeaveFilter>(initialFilter);
  const [searchInput, setSearchInput] = React.useState<string>('');
  const [leave, setLeave] = React.useState<TLeave>(initialValues);
  const [modal, setModal] = React.useState<ModalProps>({
    show: false,
    placement: 'end',
    type: ''
  });

  // Custom Hooks
  const { leaves, meta, fetchAllLeave, createLeave, updateLeave, deleteLeave } =
    useLeaveHook();
  const { fetchAllLeaveType } = useLeaveTypeHook();

  // Handlers
  const handleOnView = (data: TLeave) => {
    setLeave(data);
    setModal({ ...modal, ...{ show: true, type: 'view' } });
  };

  const handleOnAdd = () => {
    setLeave(initialValues);
    setModal({ ...modal, ...{ show: true, type: 'add' } });
  };

  const handleOnEdit = (data: TLeave) => {
    setLeave(data);
    setModal({ ...modal, ...{ show: true, type: 'edit' } });
  };

  const handleOnDelete = (data: TLeave) => {
    confirmAlert({
      title: `${t('dialog_delete_title')}`,
      message: `${t('dialog_delete_body', {
        name: data?.id
      })}`
    }).then(resp => {
      if (resp && data) {
        deleteItem(data);
      }
    });
  };

  // On Submit
  const handleOnSubmit = (formData: TLeave) => {
    const finalData = {
      ...formData,
      from_date: formData.from_date
        ? new Date(formData.from_date).toISOString()
        : '',
      to_date: formData.to_date ? new Date(formData.to_date).toISOString() : ''
    };

    setLoader({ form: true });
    if (finalData.id) {
      updateItem(finalData?.id, finalData);
    } else {
      createItem(finalData);
    }
  };

  // Table
  const mappedTable = () => {
    const tempTable: UseAdvanceTableProps<TLeave> = {
      data: leaves,
      columns: leaveAdminTableColumns({
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

  // API Handlers
  const createItem = (data: TLeave) => {
    setModal({ ...modal, ...{ show: true } });
    createLeave(data)
      .then(() => {
        toast.success(
          t('message_success_create', {
            page,
            name: data.id
          })
        );
        setLeave(initialValues);
        setModal({ ...modal, ...{ show: false } });
        setLoader({ form: false });
      })
      .catch(() => {
        toast.error(t('message_failed_create'));
        setLoader({ form: false });
      });
  };

  const updateItem = (id: string, data: TLeave) => {
    setModal({ ...modal, ...{ show: true } });
    updateLeave(id, data)
      .then(() => {
        toast.success(
          t('message_success_update', {
            page,
            name: data.id
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

  const deleteItem = (data: TLeave) => {
    setLoader({ list: true });
    if (data?.id) {
      deleteLeave(data?.id)
        .then(() => {
          toast.success(
            t('message_success_delete', {
              page,
              name: data.id
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

  const fetchAllItem = () => {
    setLoader({ list: true });
    fetchAllLeave(filter)
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
    if (!checkScope('leaves.view')) {
      navigate('/errors/403');
    }

    fetchAllLeaveType({ page: 1, limit: 100 }).catch(e => console.error(e));
  }, []);

  return (
    <React.Fragment>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h2 className="mb-0">{t('leave_list')}</h2>
        {checkScope('leaves.create') && (
          <div className="d-flex gap-2">
            <Button variant="primary" onClick={handleOnAdd}>
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              {t('add')} {t('leave')}
            </Button>
          </div>
        )}
      </div>

      <AdvanceTableProvider {...table}>
        <div className="mb-4 d-flex justify-content-end align-items-center gap-2">
          <SearchBox
            value={searchInput}
            placeholder={`${t('search')} ${t('leave')}`}
            onChange={e => setSearchInput(e.target.value)}
          />
        </div>

        <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
          <LeaveTable loader={loader.list} />
        </div>
      </AdvanceTableProvider>

      {/* Modals */}
      <LeaveForm
        formData={leave}
        modal={modal}
        onSubmit={values => {
          handleOnSubmit(values);
        }}
        onClose={() => setModal({ ...modal, ...{ show: false, type: '' } })}
        loading={loader.form}
      />
    </React.Fragment>
  );
};

export default LeavePage;
