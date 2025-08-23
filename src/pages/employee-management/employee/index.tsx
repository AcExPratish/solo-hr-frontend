import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TLoader } from '@/types/modules';
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
import EmployeeTable, {
  employeeTableColumns
} from '@/components/modules/employee-management/table/EmployeeTable';
import {
  TEmployee,
  TEmployeeFilter
} from '@/types/modules/employee-management/employee';
import useEmployeeHook from '@/hooks/modules/employee-management/useEmployeeHook';
import EmployeeBasicForm from '@/components/modules/employee-management/form/EmployeeBasicForm';

// Initial values
const initialFilter: TEmployeeFilter = {
  page: 1,
  limit: 10,
  search: ''
};

const initialValues: TEmployee = {
  id: '',
  username: '',
  first_name: '',
  middle_name: '',
  last_name: '',
  password: '',
  email: '',
  phone: '',
  email_verified_at: '',
  basic_information: {
    date_of_birth: '',
    gender: '',
    nationality: '',
    religion: '',
    marital_status: '',
    employment_spouse: '',
    no_of_children: '',
    blood_group: '',

    // Employment
    joining_date: '',
    department_id: '',
    designation_id: '',

    // Address
    province_id: '',
    district_id: '',
    city_id: '',
    address: '',
    zip_code: '',
    postal_code: ''
  }
};

const initialLoader: TLoader = {
  list: false,
  form: false
};

const EmployeePage = () => {
  // React Hooks
  const navigate = useNavigate();
  const { t } = useTranslation();
  const page = t('employee');

  // Use States
  const [loader, setLoader] = React.useState<TLoader>(initialLoader);
  const [filter, setFilter] = React.useState<TEmployeeFilter>(initialFilter);
  const [searchInput, setSearchInput] = React.useState<string>('');
  const [employee, setEmployee] = React.useState<TEmployee>(initialValues);
  const [modal, setModal] = React.useState<ModalProps>({
    show: false,
    placement: 'end',
    type: ''
  });

  // Custom Hooks
  const {
    employees,
    meta,
    fetchAllEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    fetchOneEmployee
  } = useEmployeeHook();

  // Handlers
  const handleOnView = (data: TEmployee) => {
    fetchOneItem(data);
    setModal({ ...modal, ...{ show: true, type: 'view' } });
  };

  const handleOnAdd = () => {
    setEmployee(initialValues);
    setModal({ ...modal, ...{ show: true, type: 'add' } });
  };

  const handleOnEdit = (data: TEmployee) => {
    fetchOneItem(data);
    setModal({ ...modal, ...{ show: true, type: 'edit' } });
  };

  const handleOnDelete = (data: TEmployee) => {
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
  const handleOnSubmit = (formData: TEmployee) => {
    setLoader({ form: true });
    if (formData.id) {
      updateItem(formData?.id, formData);
    } else {
      createItem(formData);
    }
  };

  // Table
  const mappedTable = () => {
    const tempTable: UseAdvanceTableProps<TEmployee> = {
      data: employees,
      columns: employeeTableColumns({
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
  const createItem = (data: TEmployee) => {
    setModal({ ...modal, ...{ show: true } });
    createEmployee(data)
      .then(() => {
        toast.success(
          t('message_success_create', {
            page,
            name: getUserFirstAndLastName(data)
          })
        );
        setEmployee(initialValues);
        setModal({ ...modal, ...{ show: false } });
        setLoader({ form: false });
      })
      .catch(() => {
        toast.error(t('message_failed_create'));
        setLoader({ form: false });
      });
  };

  const updateItem = (id: string, data: TEmployee) => {
    setModal({ ...modal, ...{ show: true } });
    updateEmployee(id, data)
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

  const deleteItem = (data: TEmployee) => {
    setLoader({ list: true });
    if (data?.id) {
      deleteEmployee(data?.id)
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

  const fetchOneItem = (row: TEmployee) => {
    setLoader({ list: true });
    fetchOneEmployee(row?.id || '')
      .then(resp => {
        setEmployee(resp);
      })
      .catch(e => {
        console.error(e);
      });
    setLoader({ list: false });
  };

  const fetchAllItem = () => {
    setLoader({ list: true });
    fetchAllEmployee(filter)
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
    // TODO: Add permission for employee management
    if (!checkScope('users.view')) {
      navigate('/errors/403');
    }
  }, []);

  return (
    <React.Fragment>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h2 className="mb-0">{t('employee_list')}</h2>
        {checkScope('users.create') && (
          <Button variant="primary" onClick={handleOnAdd}>
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            {t('add')} {t('employee')}
          </Button>
        )}
      </div>

      <AdvanceTableProvider {...table}>
        <div className="mb-4 d-flex justify-content-end align-items-center gap-2">
          <SearchBox
            value={searchInput}
            placeholder={`${t('search')} ${t('employee')}`}
            onChange={e => setSearchInput(e.target.value)}
          />
        </div>

        <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
          <EmployeeTable loader={loader.list} />
        </div>
      </AdvanceTableProvider>

      {/* Modals */}
      <EmployeeBasicForm
        formData={employee}
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

export default EmployeePage;
