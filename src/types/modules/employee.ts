import { TOnboardingCompleted } from './onboarding';
import { TUser } from './user-management/user';

export interface TEmployee extends TUser {
  gender?: string;
  address?: string;
  current_stage?: string;
  up_next?: string;
  completed_stages?: TOnboardingCompleted[];
}
