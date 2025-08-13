import * as Yup from 'yup';
import i18next from 'i18next';
const t = i18next.t;

export const UserSchema = Yup.object().shape({
  first_name: Yup.string().required(
    t('form_validation_mandatory', {
      field: t('first_name').toLowerCase()
    })
  ),
  last_name: Yup.string().required(
    t('form_validation_mandatory', {
      field: t('last_name').toLowerCase()
    })
  ),
  email: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('email').toLowerCase()
      })
    )
    .email(t('form_validation_invalid_email')),
  phone: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('phone')
      })
    )
    .length(
      10,
      t('form_validation_exact_digits', {
        field: t('phone'),
        digits: 10
      })
    ),
  password: Yup.string().min(
    6,
    t('form_validation_min', {
      field: t('password').toLowerCase(),
      min: '6'
    })
  )
});
