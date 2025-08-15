import api from '../../utils/api';
import { serializedObject } from '../../helpers/utils';
import { TFilter } from '@/types/modules';

const permissionEndpoint: string = `${process.env.REACT_APP_API_ENDPOINT}/permissions`;

const fetchAll = (params: TFilter) => {
  return api.get(`${permissionEndpoint}?${serializedObject(params)}`);
};

export default {
  fetchAll
};
