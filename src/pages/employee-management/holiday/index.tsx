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
import HolidayTable, {
  holidayTableColumns
} from '@/components/modules/employee-management/table/HolidayTable';
import {
  THoliday,
  THolidayFilter
} from '@/types/modules/employee-management/holiday';
import HolidayForm from '@/components/modules/employee-management/form/HolidayForm';
import { pageCount } from '@/helpers/utils';
import useHolidayHook from '@/hooks/modules/employee-management/useHolidayHook';

// Initial values
const initialFilter: THolidayFilter = {
  page: 1,
  limit: 10,
  search: ''
};

const initialValues: THoliday = {
  id: undefined,
  title: '',
  date: '',
  description: '',
  status: true
};

const initialLoader: TLoader = {
  list: false,
  form: false
};

const HolidayPage = () => {
  // React Hooks
  const navigate = useNavigate();
  const { t } = useTranslation();
  const page = t('holiday');

  // User States
  const [loader, setLoader] = React.useState<TLoader>(initialLoader);
  const [filter, setFilter] = React.useState<THolidayFilter>(initialFilter);
  const [searchInput, setSearchInput] = React.useState<string>('');
  const [holiday, setHoliday] = React.useState<THoliday>(initialValues);
  const [modal, setModal] = React.useState<ModalProps>({
    show: false,
    placement: 'end',
    type: ''
  });

  // Custom Hooks
  const {
    holidays,
    meta,
    fetchAllHoliday,
    createHoliday,
    updateHoliday,
    deleteHoliday
  } = useHolidayHook();

  // Handlers
  const handleOnView = (data: THoliday) => {
    setHoliday(data);
    setModal({ ...modal, ...{ show: true, type: 'view' } });
  };

  const handleOnAdd = () => {
    setHoliday(initialValues);
    setModal({ ...modal, ...{ show: true, type: 'add' } });
  };

  const handleOnEdit = (data: THoliday) => {
    setHoliday(data);
    setModal({ ...modal, ...{ show: true, type: 'edit' } });
  };

  const handleOnDelete = (data: THoliday) => {
    confirmAlert({
      title: `${t('dialog_delete_title')}`,
      message: `${t('dialog_delete_body', {
        name: data.title
      })}`
    }).then(resp => {
      if (resp && data) {
        deleteItem(data);
      }
    });
  };

  // On Submit
  const handleOnSubmit = (formData: THoliday) => {
    const finalData = {
      ...formData,
      date: formData.date ? new Date(formData.date).toISOString() : ''
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
    const tempTable: UseAdvanceTableProps<THoliday> = {
      data: holidays,
      columns: holidayTableColumns({
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
  const createItem = (data: THoliday) => {
    setModal({ ...modal, ...{ show: true } });
    createHoliday(data)
      .then(() => {
        toast.success(
          t('message_success_create', {
            page,
            name: data.title
          })
        );
        setHoliday(initialValues);
        setModal({ ...modal, ...{ show: false } });
        setLoader({ form: false });
      })
      .catch(() => {
        toast.error(t('message_failed_create'));
        setLoader({ form: false });
      });
  };

  const updateItem = (id: string, data: THoliday) => {
    setModal({ ...modal, ...{ show: true } });
    updateHoliday(id, data)
      .then(() => {
        toast.success(
          t('message_success_update', {
            page,
            name: data.title
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

  const deleteItem = (data: THoliday) => {
    setLoader({ list: true });
    if (data?.id) {
      deleteHoliday(data?.id)
        .then(() => {
          toast.success(
            t('message_success_delete', {
              page,
              name: data.title
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
    fetchAllHoliday(filter)
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
    if (!checkScope('holidays.view')) {
      navigate('/errors/403');
    }
  }, []);

  return (
    <React.Fragment>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h2 className="mb-0">{t('holiday_list')}</h2>
        {checkScope('holidays.create') && (
          <Button variant="primary" onClick={handleOnAdd}>
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            {t('add')} {t('holiday')}
          </Button>
        )}
      </div>

      <AdvanceTableProvider {...table}>
        <div className="mb-4 d-flex justify-content-end align-items-center gap-2">
          <SearchBox
            value={searchInput}
            placeholder={`${t('search')} ${t('holiday')}`}
            onChange={e => setSearchInput(e.target.value)}
          />
        </div>

        <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
          <HolidayTable loader={loader.list} />
        </div>
      </AdvanceTableProvider>

      {/* Modals */}
      <HolidayForm
        formData={holiday}
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

export default HolidayPage;
