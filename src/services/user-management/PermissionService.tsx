import api from '@/utils/api';
import { serializedObject } from '@/helpers/utils';
import { TFilter } from '@/types/modules';
import { apiEndpoint } from '@/helpers/common';

const permissionEndpoint: string = `${apiEndpoint}/permissions`;

const fetchAll = (filters: TFilter) => {
  return api.get(`${permissionEndpoint}?${serializedObject(filters)}`);
};

export default {
  fetchAll
};
