import * as Yup from 'yup';
import i18next from 'i18next';
const t = i18next.t;

export const UserCreateSchema = Yup.object().shape({
  first_name: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('first_name').toLowerCase()
      })
    )
    .max(
      200,
      t('form_validation_max', {
        field: t('first_name').toLowerCase(),
        max: '200'
      })
    ),
  middle_name: Yup.string()
    .notRequired()
    .nullable()
    .max(
      200,
      t('form_validation_max', {
        field: t('middle_name').toLowerCase(),
        max: '200'
      })
    ),
  last_name: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('last_name').toLowerCase()
      })
    )
    .max(
      200,
      t('form_validation_max', {
        field: t('last_name').toLowerCase(),
        max: '200'
      })
    ),
  username: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('username').toLowerCase()
      })
    )
    .max(
      200,
      t('form_validation_max', {
        field: t('username').toLowerCase(),
        max: '200'
      })
    ),
  email: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('email').toLowerCase()
      })
    )
    .email(t('form_validation_invalid_email'))
    .max(
      200,
      t('form_validation_max', {
        field: t('email').toLowerCase(),
        max: '200'
      })
    ),
  phone: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('phone').toLowerCase()
      })
    )
    .length(
      10,
      t('form_validation_exact_digits', {
        field: t('phone').toLowerCase(),
        digits: 10
      })
    ),
  roleOptions: Yup.array().min(
    1,
    t('form_validation_mandatory', { field: t('role').toLowerCase() })
  ),
  password: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('password').toLowerCase()
      })
    )
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
      t('form_validation_password_validation_message')
    )
    .max(
      200,
      t('form_validation_max', {
        field: t('password').toLowerCase(),
        max: '200'
      })
    )
});

export const UserUpdateSchema = Yup.object().shape({
  first_name: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('first_name').toLowerCase()
      })
    )
    .max(
      200,
      t('form_validation_max', {
        field: t('first_name').toLowerCase(),
        max: '200'
      })
    ),
  middle_name: Yup.string()
    .notRequired()
    .nullable()
    .max(
      200,
      t('form_validation_max', {
        field: t('middle_name').toLowerCase(),
        max: '200'
      })
    ),
  last_name: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('last_name').toLowerCase()
      })
    )
    .max(
      200,
      t('form_validation_max', {
        field: t('last_name').toLowerCase(),
        max: '200'
      })
    ),
  username: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('username').toLowerCase()
      })
    )
    .max(
      200,
      t('form_validation_max', {
        field: t('username').toLowerCase(),
        max: '200'
      })
    ),
  email: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('email').toLowerCase()
      })
    )
    .email(t('form_validation_invalid_email'))
    .max(
      200,
      t('form_validation_max', {
        field: t('email').toLowerCase(),
        max: '200'
      })
    ),
  phone: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('phone').toLowerCase()
      })
    )
    .length(
      10,
      t('form_validation_exact_digits', {
        field: t('phone').toLowerCase(),
        digits: 10
      })
    ),
  roleOptions: Yup.array().min(
    1,
    t('form_validation_mandatory', { field: t('role').toLowerCase() })
  ),
  password: Yup.string()
    .transform(v => (v === '' ? undefined : v))
    .when([], {
      is: (value: string | undefined) => !!value,
      then: schema =>
        schema
          .required(
            t('form_validation_mandatory', {
              field: t('password').toLowerCase()
            })
          )
          .matches(
            /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
            t('form_validation_password_validation_message')
          )
          .max(
            200,
            t('form_validation_max', {
              field: t('password').toLowerCase(),
              max: '200'
            })
          ),
      otherwise: schema => schema.notRequired()
    })
});
