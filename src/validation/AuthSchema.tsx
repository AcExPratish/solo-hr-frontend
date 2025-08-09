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

export const ForgotPasswordSchema = () => {
  return Yup.object().shape({
    to: Yup.string().required(
      t('form_validation_mandatory', {
        field: t('email')
      })
    )
  });
};

export const ResetPasswordSchema = () => {
  return Yup.object().shape({
    new_password: Yup.string().required(
      t('form_validation_mandatory', {
        field: t('password')
      })
    ),
    confirm_password: Yup.string()
      .required(
        t('form_validation_mandatory', {
          field: t('confirm_password')
        })
      )
      .oneOf([Yup.ref('new_password')], t('passwords_do_not_match'))
  });
};
