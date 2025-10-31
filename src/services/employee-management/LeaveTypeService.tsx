import api from '@/utils/api';
import { serializedObject } from '@/helpers/utils';
import { apiEndpoint } from '@/helpers/common';
import {
  TLeaveType,
  TLeaveTypeFilter
} from '@/types/modules/employee-management/leave';

const leaveTypeEndpoint: string = `${apiEndpoint}/leave-types`;

const fetchAll = (filters: TLeaveTypeFilter) => {
  return api.get(`${leaveTypeEndpoint}?${serializedObject(filters)}`);
};

const fetchOne = (id: string) => {
  return api.get(`${leaveTypeEndpoint}/${id}`);
};

const create = (data: TLeaveType) => {
  return api.post(`${leaveTypeEndpoint}`, data);
};

const update = (id: string, data: TLeaveType) => {
  return api.put(`${leaveTypeEndpoint}/${id}`, data);
};

const destroy = (id: string) => {
  return api.delete(`${leaveTypeEndpoint}/${id}`);
};

export default {
  fetchAll,
  fetchOne,
  create,
  update,
  destroy
};
