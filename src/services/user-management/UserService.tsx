import api from '../../utils/api';
import { TUser, TUserFilter } from '@/types/modules/user-management/user';

import { serializedObject } from '../../helpers/utils';

const userEndpoint: string = `${process.env.REACT_APP_API_ENDPOINT}/users`;

const fetchAll = (params: TUserFilter) => {
  return api.get(`${userEndpoint}?${serializedObject(params)}`);
};

const fetchOne = (id: string) => {
  return api.get(`${userEndpoint}/${id}`);
};

const create = (data: TUser) => {
  return api.post(`${userEndpoint}`, data);
};

const update = (id: string, data: TUser) => {
  return api.put(`${userEndpoint}/${id}`, data);
};

const destroy = (id: string) => {
  return api.delete(`${userEndpoint}/${id}`);
};

export default {
  fetchAll,
  fetchOne,
  create,
  update,
  destroy
};
