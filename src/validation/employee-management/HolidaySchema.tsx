import * as Yup from 'yup';
import i18next from 'i18next';
const t = i18next.t;

export const HolidaySchema = Yup.object().shape({
  title: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('title')
      })
    )
    .max(
      200,
      t('form_validation_max', {
        field: t('title'),
        max: '200'
      })
    ),
  date: Yup.date().required(
    t('form_validation_mandatory', {
      field: t('date')
    })
  ),
  description: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('description')
      })
    )
    .max(
      200,
      t('form_validation_max', {
        field: t('description'),
        max: '200'
      })
    ),
  status: Yup.boolean().required(
    t('form_validation_mandatory', {
      field: t('status')
    })
  )
});
