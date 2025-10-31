import LeaveTypeService from '@/services/employee-management/LeaveTypeService';
import { useDispatch, useSelector } from '@/store';
import {
  getAllLeaveType,
  createOneLeaveType,
  getOneLeaveType,
  updateOneLeaveType,
  removeOneLeaveType
} from '@/store/reducers/employee-management/leaveTypeSlice';
import {
  TLeaveType,
  TLeaveTypeFilter
} from '@/types/modules/employee-management/leave';

const useLeaveTypeHook = () => {
  const dispatch = useDispatch();
  const { leaveTypes, leaveType, meta } = useSelector(state => state.leaveType);

  const fetchAllLeaveType = async (
    filters: TLeaveTypeFilter
  ): Promise<TLeaveType[]> => {
    try {
      const resp = await LeaveTypeService.fetchAll(filters);
      const meta = resp?.data?.data?.meta || null;
      const results: TLeaveType[] = resp?.data?.data?.rows || [];

      dispatch(getAllLeaveType({ results, meta }));
      return results;
    } catch (e) {
      dispatch(getAllLeaveType({ results: [], meta: {} }));
      console.error('fetchAllLeaveType', e);
      throw e;
    }
  };

  const fetchOneLeaveType = async (id: string): Promise<TLeaveType> => {
    try {
      const resp = await LeaveTypeService.fetchOne(id);
      const row = resp?.data?.data || null;
      dispatch(getOneLeaveType({ row }));
      return row;
    } catch (e) {
      dispatch(getOneLeaveType({ row: null }));
      console.error('fetchOneLeaveType', e);
      throw e;
    }
  };

  const createLeaveType = async (data: TLeaveType): Promise<TLeaveType> => {
    try {
      const resp = await LeaveTypeService.create(data);
      const row = resp?.data?.data || null;
      dispatch(createOneLeaveType({ row }));
      return row;
    } catch (e) {
      console.error('createLeaveType', e);
      throw e;
    }
  };

  const updateLeaveType = async (
    id: string,
    data: TLeaveType
  ): Promise<TLeaveType> => {
    try {
      const resp = await LeaveTypeService.update(id, data);
      const row = resp?.data?.data || null;
      dispatch(updateOneLeaveType({ id, row }));
      return row;
    } catch (e) {
      console.error('updateLeaveType', e);
      throw e;
    }
  };

  const deleteLeaveType = async (id: string): Promise<TLeaveType> => {
    try {
      const resp = await LeaveTypeService.destroy(id);
      const row = resp?.data?.data || null;
      dispatch(removeOneLeaveType({ id }));
      return row;
    } catch (e) {
      console.error('deleteLeaveType', e);
      throw e;
    }
  };

  return {
    fetchAllLeaveType,
    fetchOneLeaveType,
    createLeaveType,
    updateLeaveType,
    deleteLeaveType,

    leaveTypes,
    leaveType,
    meta
  };
};

export default useLeaveTypeHook;
