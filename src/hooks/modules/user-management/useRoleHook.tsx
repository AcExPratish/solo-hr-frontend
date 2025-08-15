import { useDispatch, useSelector } from '../../../store';
import RoleService from '@/services/user-management/RoleService';
import { TRole } from '@/types/modules/user-management/role';
import { TFilter } from '@/types/modules';
import {
  getAllRole,
  createOneRole,
  getOneRole,
  removeOneRole,
  updateOneRole
} from '@/store/reducers/user-management/roleSlice';

const useRoleHook = () => {
  const dispatch = useDispatch();
  const { roles, role, meta } = useSelector(state => state.role);

  const fetchAllRole = async (filters: TFilter): Promise<TRole[]> => {
    try {
      const resp = await RoleService.fetchAll(filters);
      const meta = resp?.data?.data?.meta || null;
      const results: TRole[] = resp?.data?.data?.rows || [];
      dispatch(getAllRole({ results, meta }));
      return results;
    } catch (e) {
      console.error('fetchAllRole', e);
      throw e;
    }
  };

  const fetchOneRole = async (id: string): Promise<TRole> => {
    try {
      const resp = await RoleService.fetchOne(id);
      const row = resp?.data?.data || null;
      dispatch(getOneRole({ row }));
      return row;
    } catch (e) {
      dispatch(getOneRole({ row: null }));
      console.error('fetchOneRole', e);
      throw e;
    }
  };

  const createRole = async (data: TRole): Promise<TRole> => {
    try {
      const resp = await RoleService.create(data);
      const row = resp?.data?.data || null;
      dispatch(createOneRole({ row }));
      return row;
    } catch (e) {
      console.error('createRole', e);
      throw e;
    }
  };

  const updateRole = async (id: string, data: TRole): Promise<TRole> => {
    try {
      const resp = await RoleService.update(id, data);
      const row = resp?.data?.data || null;
      dispatch(updateOneRole({ id, row }));
      return row;
    } catch (e) {
      console.error('updateRole', e);
      throw e;
    }
  };

  const deleteRole = async (id: string): Promise<TRole> => {
    try {
      const resp = await RoleService.destroy(id);
      const row = resp?.data?.data || null;
      dispatch(removeOneRole({ id }));
      return row;
    } catch (e) {
      console.error('deleteRole', e);
      throw e;
    }
  };

  return {
    fetchAllRole,
    fetchOneRole,
    createRole,
    deleteRole,
    updateRole,

    roles,
    role,
    meta
  };
};

export default useRoleHook;
