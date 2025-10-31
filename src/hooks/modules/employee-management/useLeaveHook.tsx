import LeaveService from '@/services/employee-management/LeaveService';
import { useDispatch, useSelector } from '@/store';
import {
  getAllLeave,
  createOneLeave,
  getOneLeave,
  updateOneLeave,
  removeOneLeave
} from '@/store/reducers/employee-management/leaveSlice';
import {
  TLeave,
  TLeaveFilter
} from '@/types/modules/employee-management/leave';

const useLeaveHook = () => {
  const dispatch = useDispatch();
  const { leaves, leave, meta } = useSelector(state => state.leave);

  const fetchAllLeave = async (filters: TLeaveFilter): Promise<TLeave[]> => {
    try {
      const resp = await LeaveService.fetchAll(filters);
      const meta = resp?.data?.data?.meta || null;
      const results: TLeave[] = resp?.data?.data?.rows || [];

      dispatch(getAllLeave({ results, meta }));
      return results;
    } catch (e) {
      dispatch(getAllLeave({ results: [], meta: {} }));
      console.error('fetchAllLeave', e);
      throw e;
    }
  };

  const fetchOneLeave = async (id: string): Promise<TLeave> => {
    try {
      const resp = await LeaveService.fetchOne(id);
      const row = resp?.data?.data || null;
      dispatch(getOneLeave({ row }));
      return row;
    } catch (e) {
      dispatch(getOneLeave({ row: null }));
      console.error('fetchOneLeave', e);
      throw e;
    }
  };

  const createLeave = async (data: TLeave): Promise<TLeave> => {
    try {
      const resp = await LeaveService.create(data);
      const row = resp?.data?.data || null;
      dispatch(createOneLeave({ row }));
      return row;
    } catch (e) {
      console.error('createLeave', e);
      throw e;
    }
  };

  const updateLeave = async (id: string, data: TLeave): Promise<TLeave> => {
    try {
      const resp = await LeaveService.update(id, data);
      const row = resp?.data?.data || null;
      dispatch(updateOneLeave({ id, row }));
      return row;
    } catch (e) {
      console.error('updateLeave', e);
      throw e;
    }
  };

  const deleteLeave = async (id: string): Promise<TLeave> => {
    try {
      const resp = await LeaveService.destroy(id);
      const row = resp?.data?.data || null;
      dispatch(removeOneLeave({ id }));
      return row;
    } catch (e) {
      console.error('deleteLeave', e);
      throw e;
    }
  };

  const decideLeave = async (id: string, data: TLeave): Promise<TLeave> => {
    try {
      const resp = await LeaveService.update(id, data);
      const row = resp?.data?.data || null;
      dispatch(updateOneLeave({ id, row }));
      return row;
    } catch (e) {
      console.error('decideLeave', e);
      throw e;
    }
  };

  return {
    fetchAllLeave,
    fetchOneLeave,
    createLeave,
    updateLeave,
    deleteLeave,
    decideLeave,

    leaves,
    leave,
    meta
  };
};

export default useLeaveHook;
