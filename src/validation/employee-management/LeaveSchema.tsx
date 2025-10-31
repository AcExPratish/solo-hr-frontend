import * as Yup from 'yup';
import i18next from 'i18next';
import { convertTimestampToDate } from '@/helpers/date';
const t = i18next.t;

export const LeaveSchema = Yup.object().shape({
  leave_type_id: Yup.string().required(
    t('form_validation_mandatory', { field: t('leave_type') })
  ),
  from_date: Yup.date().required(
    t('form_validation_mandatory', { field: t('from_date') })
  ),
  to_date: Yup.date()
    .required(t('form_validation_mandatory', { field: t('to_date') }))
    .min(
      Yup.ref('from_date'),
      t('form_validation_date_before', {
        from: t('to_date'),
        to: convertTimestampToDate(Yup.ref('from_date'))
      })
    ),
  reason: Yup.string()
    .nullable()
    .max(
      255,
      t('form_validation_max', {
        field: t('reason'),
        max: '255'
      })
    )
});
