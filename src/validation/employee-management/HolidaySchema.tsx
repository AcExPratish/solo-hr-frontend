import * as Yup from 'yup';
import i18next from 'i18next';
const t = i18next.t;

export const HolidaySchema = Yup.object().shape({
  title: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('title').toLowerCase()
      })
    )
    .max(
      200,
      t('form_validation_max', {
        field: t('title').toLowerCase(),
        max: '200'
      })
    ),
  date: Yup.date().required(
    t('form_validation_mandatory', {
      field: t('date').toLowerCase()
    })
  ),
  description: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('description').toLowerCase()
      })
    )
    .max(
      200,
      t('form_validation_max', {
        field: t('description').toLowerCase(),
        max: '200'
      })
    ),
  status: Yup.boolean().required(
    t('form_validation_mandatory', {
      field: t('status').toLowerCase()
    })
  )
});
