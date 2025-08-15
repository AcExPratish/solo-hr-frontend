import * as Yup from 'yup';
import i18next from 'i18next';
const t = i18next.t;

export const RoleSchema = Yup.object().shape({
  name: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('name').toLowerCase()
      })
    )
    .max(
      200,
      t('form_validation_max', {
        field: t('name').toLowerCase(),
        max: '200'
      })
    )
});
