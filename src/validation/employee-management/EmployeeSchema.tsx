import * as Yup from 'yup';
import i18next from 'i18next';
import { todayDate } from '@/helpers/date';
const t = i18next.t;

const todaysDate = todayDate();

export const EmployeeCreateSchema = Yup.object().shape({
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
  basic_information: Yup.object().shape({
    date_of_birth: Yup.date()
      .required(
        t('form_validation_mandatory', {
          field: t('date_of_birth').toLowerCase()
        })
      )
      .max(
        todaysDate,
        t('form_validation_date_before', {
          from: t('date_of_birth').toLowerCase(),
          to: todaysDate
        })
      ),
    joining_date: Yup.date()
      .required(
        t('form_validation_mandatory', {
          field: t('joining_date').toLowerCase()
        })
      )
      .max(
        todaysDate,
        t('form_validation_date_before', {
          from: t('joining_date').toLowerCase(),
          to: todaysDate
        })
      )
  }),
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
    )
});

export const EmployeeUpdateSchema = Yup.object().shape({
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
  basic_information: Yup.object().shape({
    date_of_birth: Yup.date()
      .required(
        t('form_validation_mandatory', {
          field: t('date_of_birth').toLowerCase()
        })
      )
      .max(
        todaysDate,
        t('form_validation_date_before', {
          from: t('date_of_birth').toLowerCase(),
          to: todaysDate
        })
      ),
    joining_date: Yup.date()
      .required(
        t('form_validation_mandatory', {
          field: t('joining_date').toLowerCase()
        })
      )
      .max(
        todaysDate,
        t('form_validation_date_before', {
          from: t('joining_date').toLowerCase(),
          to: todaysDate
        })
      )
  }),
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
    )
});

export const EmergencyContactSchema = Yup.object().shape({
  emergency_contact: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required(
        t('form_validation_mandatory', { field: t('name').toLowerCase() })
      ),
      relationship: Yup.string().required(
        t('form_validation_mandatory', {
          field: t('relationship').toLowerCase()
        })
      ),
      phone_1: Yup.string()
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
      phone_2: Yup.string()
        .notRequired()
        .nullable()
        .length(
          10,
          t('form_validation_exact_digits', {
            field: t('alternative_phone').toLowerCase(),
            digits: 10
          })
        )
    })
  )
});
