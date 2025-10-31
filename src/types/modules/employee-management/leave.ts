import { TFilter } from '..';
import { TUser } from '../user-management/user';

export interface TLeave {
  id?: string;
  user_id?: string;
  leave_type_id?: string;
  from_date?: string;
  to_date?: string;
  total_days?: number;
  reason?: string;
  status?: 'pending' | 'rejected' | 'approved';
  approved_by_id?: string;
  created_by_id?: string;
  updated_by_id?: string;
  created_at?: string;
  updated_at?: string;

  approver?: TUser;
  user?: TUser;
  type?: TLeaveType;
}

export interface TLeaveFilter extends TFilter {}

export interface TLeaveType {
  id?: string;
  name?: string;
  is_paid?: boolean;
  description?: string;
  created_by_id?: string;
  updated_by_id?: string;
  created_at?: string;
  updated_at?: string;

  leaves?: TLeave[];
  policies?: TLeavePolicy[];
}

export interface TLeaveTypeFilter extends TFilter {}

export interface TLeavePolicy {
  id?: string;
  leave_type_id?: string;
  user_id?: string;
  policy_name?: string;
  total_days?: number;
  remaining_days?: string;
  created_by_id?: string;
  updated_by_id?: string;
  created_at?: string;
  updated_at?: string;

  type?: TLeaveType;
  user?: TLeave;
}

export interface TLeavePolicyFilter extends TFilter {}
