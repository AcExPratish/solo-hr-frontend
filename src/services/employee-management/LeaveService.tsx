import api from '@/utils/api';
import { serializedObject } from '@/helpers/utils';
import { apiEndpoint } from '@/helpers/common';
import {
  TLeave,
  TLeaveFilter
} from '@/types/modules/employee-management/leave';

const leaveEndpoint: string = `${apiEndpoint}/leaves`;

const fetchAll = (filters: TLeaveFilter) => {
  return api.get(`${leaveEndpoint}?${serializedObject(filters)}`);
};

const fetchOne = (id: string) => {
  return api.get(`${leaveEndpoint}/${id}`);
};

const create = (data: TLeave) => {
  return api.post(`${leaveEndpoint}`, data);
};

const update = (id: string, data: TLeave) => {
  return api.put(`${leaveEndpoint}/${id}`, data);
};

const destroy = (id: string) => {
  return api.delete(`${leaveEndpoint}/${id}`);
};

const decide = (id: string) => {
  return api.post(`${leaveEndpoint}/${id}/decide`);
};

export default {
  fetchAll,
  fetchOne,
  create,
  update,
  destroy,
  decide
};
