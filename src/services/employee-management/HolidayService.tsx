import api from '@/utils/api';
import { serializedObject } from '@/helpers/utils';
import { apiEndpoint } from '@/helpers/common';
import {
  THoliday,
  THolidayFilter
} from '@/types/modules/employee-management/holiday';

const holidayEndpoint: string = `${apiEndpoint}/holidays`;

const fetchAll = (filters: THolidayFilter) => {
  return api.get(`${holidayEndpoint}?${serializedObject(filters)}`);
};

const fetchOne = (id: string) => {
  return api.get(`${holidayEndpoint}/${id}`);
};

const create = (data: THoliday) => {
  return api.post(`${holidayEndpoint}`, data);
};

const update = (id: string, data: THoliday) => {
  return api.put(`${holidayEndpoint}/${id}`, data);
};

const destroy = (id: string) => {
  return api.delete(`${holidayEndpoint}/${id}`);
};

export default {
  fetchAll,
  fetchOne,
  create,
  update,
  destroy
};
