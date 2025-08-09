import * as Yup from 'yup';
import i18next from 'i18next';
const t = i18next.t;

export const SignInSchema = () => {
  return Yup.object().shape({
    email: Yup.string().required(
      t('form_validation_mandatory', {
        field: t('email')
      })
    ),
    password: Yup.string()
      .min(
        6,
        t('form_validation_min', {
          field: t('password'),
          min: '6'
        })
      )
      .required(
        t('form_validation_mandatory', {
          field: t('password')
        })
      )
  });
};
