import api from '@/utils/api';
import { TFilter } from '@/types/modules';
import { serializedObject } from '@/helpers/utils';
import { TRole } from '@/types/modules/user-management/role';
import { apiEndpoint } from '@/helpers/common';

const rolesEndpoint: string = `${apiEndpoint}/roles`;

const fetchAll = (filters: TFilter) => {
  return api.get(`${rolesEndpoint}?${serializedObject(filters)}`);
};

const fetchOne = (id: string) => {
  return api.get(`${rolesEndpoint}/${id}`);
};

const create = (data: TRole) => {
  return api.post(`${rolesEndpoint}`, data);
};

const update = (id: string, data: TRole) => {
  return api.put(`${rolesEndpoint}/${id}`, data);
};

const destroy = (id: string) => {
  return api.delete(`${rolesEndpoint}/${id}`);
};

export default {
  fetchAll,
  fetchOne,
  create,
  update,
  destroy
};
