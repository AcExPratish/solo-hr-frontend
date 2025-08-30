import * as Yup from 'yup';
import i18next from 'i18next';
import { phoneRegex } from '@/helpers/regex';
const t = i18next.t;

export const UserCreateSchema = Yup.object().shape({
  first_name: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('first_name')
      })
    )
    .max(
      200,
      t('form_validation_max', {
        field: t('first_name'),
        max: '200'
      })
    ),
  middle_name: Yup.string()
    .notRequired()
    .nullable()
    .max(
      200,
      t('form_validation_max', {
        field: t('middle_name'),
        max: '200'
      })
    ),
  last_name: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('last_name')
      })
    )
    .max(
      200,
      t('form_validation_max', {
        field: t('last_name'),
        max: '200'
      })
    ),
  email: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('email')
      })
    )
    .email(t('form_validation_invalid_email'))
    .max(
      200,
      t('form_validation_max', {
        field: t('email'),
        max: '200'
      })
    ),
  phone: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('phone')
      })
    )
    .matches(phoneRegex, t('form_validation_phone', { field: t('phone') })),
  roleOptions: Yup.array().min(
    1,
    t('form_validation_mandatory', { field: t('role') })
  ),
  password: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('password')
      })
    )
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
      t('form_validation_password_validation_message')
    )
    .max(
      200,
      t('form_validation_max', {
        field: t('password'),
        max: '200'
      })
    )
});

export const UserUpdateSchema = Yup.object().shape({
  first_name: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('first_name')
      })
    )
    .max(
      200,
      t('form_validation_max', {
        field: t('first_name'),
        max: '200'
      })
    ),
  middle_name: Yup.string()
    .notRequired()
    .nullable()
    .max(
      200,
      t('form_validation_max', {
        field: t('middle_name'),
        max: '200'
      })
    ),
  last_name: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('last_name')
      })
    )
    .max(
      200,
      t('form_validation_max', {
        field: t('last_name'),
        max: '200'
      })
    ),
  email: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('email')
      })
    )
    .email(t('form_validation_invalid_email'))
    .max(
      200,
      t('form_validation_max', {
        field: t('email'),
        max: '200'
      })
    ),
  phone: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('phone')
      })
    )
    .matches(phoneRegex, t('form_validation_phone', { field: t('phone') })),
  roleOptions: Yup.array().min(
    1,
    t('form_validation_mandatory', { field: t('role') })
  ),
  password: Yup.string()
    .transform(v => (v === '' ? undefined : v))
    .when([], {
      is: (value: string | undefined) => !!value,
      then: schema =>
        schema
          .required(
            t('form_validation_mandatory', {
              field: t('password')
            })
          )
          .matches(
            /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
            t('form_validation_password_validation_message')
          )
          .max(
            200,
            t('form_validation_max', {
              field: t('password'),
              max: '200'
            })
          ),
      otherwise: schema => schema.notRequired()
    })
});
