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

const fetchOne = (id: string) => {
  return api.get(`${employeeEndpoint}/${id}`);
};

const create = (data: TEmployee, slug: TEmployeeFormType) => {
  return api.post(`${employeeEndpoint}/${slug}`, data);
};

const update = (id: string, slug: TEmployeeFormType, data: TEmployee) => {
  return api.put(`${employeeEndpoint}/${id}/${slug}`, data);
};

const destroy = (id: string) => {
  return api.delete(`${employeeEndpoint}/${id}`);
};

export default {
  fetchAll,
  fetchOne,
  create,
  update,
  destroy
};
