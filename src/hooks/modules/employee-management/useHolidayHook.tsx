import { useDispatch, useSelector } from '@/store';
import HolidayService from '@/services/employee-management/HolidayService';
import {
  THoliday,
  THolidayFilter
} from '@/types/modules/employee-management/holiday';
import {
  getAllHoliday,
  getOneHoliday,
  createOneHoliday,
  removeOneHoliday,
  updateOneHoliday
} from '@/store/reducers/employee-management/holidaySlice';
import { holidayMockData } from '@/data/mock-data';

const useHolidayHook = () => {
  const dispatch = useDispatch();
  const { holidays, holiday, meta } = useSelector(state => state.holiday);

  const fetchAllHoliday = async (
    filters: THolidayFilter
  ): Promise<THoliday[]> => {
    try {
      // const resp = await HolidayService.fetchAll(filters);
      // const meta = resp?.data?.data?.meta || null;
      // const results: THoliday[] = resp?.data?.data?.rows || [];

      const results: THoliday[] = holidayMockData;
      const meta = null;
      console.log('results', filters);

      dispatch(getAllHoliday({ results, meta }));
      return results;
    } catch (e) {
      dispatch(getAllHoliday({ results: [], meta: {} }));
      console.error('fetchAllHoliday', e);
      throw e;
    }
  };

  const fetchOneHoliday = async (id: string): Promise<THoliday> => {
    try {
      const resp = await HolidayService.fetchOne(id);
      const row = resp?.data?.data || null;
      dispatch(getOneHoliday({ row }));
      return row;
    } catch (e) {
      dispatch(getOneHoliday({ row: null }));
      console.error('fetchOneHoliday', e);
      throw e;
    }
  };

  const createHoliday = async (data: THoliday): Promise<THoliday> => {
    try {
      const resp = await HolidayService.create(data);
      const row = resp?.data?.data || null;
      dispatch(createOneHoliday({ row }));
      return row;
    } catch (e) {
      console.error('createHoliday', e);
      throw e;
    }
  };

  const updateHoliday = async (
    id: string,
    data: THoliday
  ): Promise<THoliday> => {
    try {
      const resp = await HolidayService.update(id, data);
      const row = resp?.data?.data || null;
      dispatch(updateOneHoliday({ id, row }));
      return row;
    } catch (e) {
      console.error('updateHoliday', e);
      throw e;
    }
  };

  const deleteHoliday = async (id: string): Promise<THoliday> => {
    try {
      const resp = await HolidayService.destroy(id);
      const row = resp?.data?.data || null;
      dispatch(removeOneHoliday({ id }));
      return row;
    } catch (e) {
      console.error('deleteHoliday', e);
      throw e;
    }
  };

  return {
    fetchAllHoliday,
    fetchOneHoliday,
    createHoliday,
    updateHoliday,
    deleteHoliday,

    holidays,
    holiday,
    meta
  };
};

export default useHolidayHook;
