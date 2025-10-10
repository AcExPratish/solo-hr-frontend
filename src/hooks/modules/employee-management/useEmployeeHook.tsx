import { useDispatch, useSelector } from '@/store';
import {
  getAllEmployee,
  getOneEmployee,
  createOneEmployee,
  updateOneEmployee,
  removeOneEmployee
} from '@/store/reducers/employee-management/employeeSlice';
import {
  TEmployee,
  TEmployeeFilter,
  TEmployeeFormType
} from '@/types/modules/employee-management/employee';
import EmployeeService from '@/services/employee-management/EmployeeService';

const useEmployeeHook = () => {
  const dispatch = useDispatch();
  const { employees, employee, meta } = useSelector(state => state.employee);

  const fetchAllEmployee = async (
    filters: TEmployeeFilter
  ): Promise<TEmployee[]> => {
    try {
      const resp = await EmployeeService.fetchAll(filters);
      const meta = resp?.data?.data?.meta || null;
      const results: TEmployee[] = resp?.data?.data?.rows || [];
      dispatch(getAllEmployee({ results, meta }));
      return results;
    } catch (e) {
      dispatch(getAllEmployee({ results: [], meta: {} }));
      console.error('fetchAllEmployee', e);
      throw e;
    }
  };

  const fetchOneEmployee = async (_id: string): Promise<TEmployee> => {
    try {
      const resp = await EmployeeService.fetchOne(_id);
      const row = resp?.data?.data || null;
      dispatch(getOneEmployee({ row }));
      return row;
    } catch (e) {
      dispatch(getOneEmployee({ row: null }));
      console.error('fetchOneEmployee', e);
      throw e;
    }
  };

  const createEmployee = async (data: TEmployee): Promise<TEmployee> => {
    try {
      const resp = await EmployeeService.create(data);
      const row = resp?.data?.data || null;
      dispatch(createOneEmployee({ row }));
      return row;
    } catch (e) {
      console.error('createEmployee', e);
      throw e;
    }
  };

  const updateEmployee = async (
    _id: string,
    slug: TEmployeeFormType,
    data: TEmployee
  ): Promise<TEmployee> => {
    try {
      const resp = await EmployeeService.update(_id, slug, data);
      const row = resp?.data?.data || null;
      dispatch(updateOneEmployee({ _id, slug, row }));
      return row;
    } catch (e) {
      console.error('updateEmployee', e);
      throw e;
    }
  };

  const deleteEmployee = async (_id: string): Promise<TEmployee> => {
    try {
      const resp = await EmployeeService.destroy(_id);
      const row = resp?.data?.data || null;
      dispatch(removeOneEmployee({ _id }));
      return row;
    } catch (e) {
      console.error('deleteEmployee', e);
      throw e;
    }
  };

  return {
    fetchAllEmployee,
    fetchOneEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee,

    employees,
    employee,
    meta
  };
};

export default useEmployeeHook;
