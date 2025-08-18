import { TOnboardingStage } from '@/types/modules/onboarding';
import i18next from 'i18next';
const t = i18next.t;

export const onboardingStages: TOnboardingStage[] = [
  { label: t('account_creation'), value: 'account_creation' },
  { label: t('basic_information'), value: 'basic_information' },
  {
    label: t('family_and_emergency_contacts'),
    value: 'family_and_emergency_contacts'
  },
  { label: t('experience_and_education'), value: 'experience_and_education' },
  {
    label: t('bank_and_payroll_information'),
    value: 'bank_and_payroll_information'
  },
  {
    label: t('additional_information'),
    value: 'additional_information'
  },
  {
    label: t('documents_and_agreements'),
    value: 'documents_and_agreements'
  },
  { label: t('review_and_submit'), value: 'review_and_submit' }
];
