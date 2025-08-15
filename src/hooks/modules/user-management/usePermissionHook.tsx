import { useDispatch, useSelector } from '@/store';
import { getAllPermission } from '@/store/reducers/user-management/permissionSlice';
import { TFilter } from '@/types/modules';
import { TPermission } from '@/types/modules/user-management/permission';
import PermissionService from '@/services/user-management/PermissionService';

const usePermissionHook = () => {
  const dispatch = useDispatch();
  const { permissions, meta } = useSelector(state => state.permission);

  const fetchAllPermission = async (
    params: TFilter
  ): Promise<TPermission[]> => {
    try {
      const resp = await PermissionService.fetchAll(params);
      const meta = resp?.data?.data?.meta || null;
      const results: TPermission[] = resp?.data?.data?.rows || [];
      dispatch(getAllPermission({ results, meta }));
      return results;
    } catch (e) {
      dispatch(getAllPermission({ results: [], meta: {} }));
      console.error('fetchAllPermission', e);
      throw e;
    }
  };

  return {
    fetchAllPermission,

    permissions,
    meta
  };
};

export default usePermissionHook;
