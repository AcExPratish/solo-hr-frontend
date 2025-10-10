import api from '@/utils/api';
import { serializedObject } from '@/helpers/utils';
import { apiEndpoint } from '@/helpers/common';
import {
  TEmployee,
  TEmployeeFilter,
  TEmployeeFormType
} from '@/types/modules/employee-management/employee';

const employeeEndpoint: string = `${apiEndpoint}/employees`;

const fetchAll = (filters: TEmployeeFilter) => {
  return api.get(`${employeeEndpoint}?${serializedObject(filters)}`);
};

const fetchOne = (_id: string) => {
  return api.get(`${employeeEndpoint}/${_id}`);
};

const create = (data: TEmployee) => {
  return api.post(`${employeeEndpoint}`, data);
};

const update = (_id: string, slug: TEmployeeFormType, data: TEmployee) => {
  return api.put(`${employeeEndpoint}/${_id}/${slug}`, data);
};

const destroy = (_id: string) => {
  return api.delete(`${employeeEndpoint}/${_id}`);
};

export default {
  fetchAll,
  fetchOne,
  create,
  update,
  destroy
};
