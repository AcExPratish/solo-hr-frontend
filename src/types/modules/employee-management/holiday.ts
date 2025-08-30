import { TFilter } from '..';

export interface THoliday {
  id?: string;
  title?: string;
  date?: string;
  description?: string;
  status?: boolean;
  created_at?: string;
  updated_at?: string;
  created_by_id?: string;
  updated_by_id?: string;
  deleted_at?: string;
}

export interface THolidayFilter extends TFilter {}
