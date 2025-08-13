import { useDispatch, useSelector } from '@/store';
import UserService from '@/services/user-management/UserService';
import { TUser, TUserFilter } from '@/types/modules/user-management/user';
import {
  getAllUser,
  getOneUser,
  createOneUser,
  updateOneUser,
  removeOneUser
} from '@/store/reducers/user-management/userSlice';

const useUserHook = () => {
  const dispatch = useDispatch();
  const { users, user, meta } = useSelector(state => state.user);

  const fetchAllUser = async (params: TUserFilter): Promise<TUser[]> => {
    try {
      const resp = await UserService.fetchAll(params);
      const meta = resp?.data?.data?.meta || null;
      const results: TUser[] = resp?.data?.data?.rows || [];
      dispatch(getAllUser({ results, meta }));
      return results;
    } catch (e) {
      dispatch(getAllUser({ results: [], meta: {} }));
      console.error('fetchAllUser', e);
      throw e;
    }
  };

  const fetchOneUser = async (id: number) => {
    try {
      const resp = await UserService.fetchOne(id);
      const row = resp?.data?.data || null;
      dispatch(getOneUser({ row }));
      return resp;
    } catch (e) {
      dispatch(getOneUser({ row: null }));
      console.error('fetchOneUser', e);
      throw e;
    }
  };

  const createUser = async (data: TUser) => {
    try {
      const resp = await UserService.create(data);
      const row = resp?.data?.data || null;
      dispatch(createOneUser({ row }));
      return resp;
    } catch (e) {
      console.error('createUser', e);
      throw e;
    }
  };

  const updateUser = async (id: number, data: TUser) => {
    try {
      const resp = await UserService.update(id, data);
      const row = resp?.data?.data || null;
      dispatch(updateOneUser({ id, row }));
      return resp;
    } catch (e) {
      console.error('updateUser', e);
      throw e;
    }
  };

  const deleteUser = async (id: number) => {
    try {
      const resp = await UserService.destroy(id);
      dispatch(removeOneUser({ id }));
      return resp;
    } catch (e) {
      console.error('deleteUser', e);
      throw e;
    }
  };

  return {
    fetchAllUser,
    fetchOneUser,
    createUser,
    updateUser,
    deleteUser,

    users,
    user,
    meta
  };
};

export default useUserHook;
