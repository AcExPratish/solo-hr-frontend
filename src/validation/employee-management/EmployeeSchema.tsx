import * as Yup from 'yup';
import i18next from 'i18next';
import { todayDate } from '@/helpers/date';
import { phoneRegex, positiveNumberRegexWithZero } from '@/helpers/regex';
const t = i18next.t;

const todaysDate = todayDate();
export const IMAGE_MAX_SIZE = 5 * 1024 * 1024; // 5MB
export const IMAGE_ACCEPTED_TYPES = [
  'image/jpeg',
  'image/png',
  'image/jpg'
] as const;

export const EmployeeBasicInfoSchema = Yup.object().shape({
  avatar: Yup.mixed<File | string>()
    .nullable()
    .notRequired()
    .transform((val, orig) => (orig === '' ? null : val))
    .test('fileSize', t('form_validation_image_size'), v => {
      if (!(v instanceof File)) return true;
      return v.size <= IMAGE_MAX_SIZE;
    })
    .test('fileType', t('form_validation_image_type'), v => {
      if (!(v instanceof File)) return true;
      return IMAGE_ACCEPTED_TYPES.includes(
        v.type as (typeof IMAGE_ACCEPTED_TYPES)[number]
      );
    }),
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
      ),
    gender: Yup.string().required(
      t('form_validation_mandatory', {
        field: t('gender').toLowerCase()
      })
    )
  }),
  phone: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('phone').toLowerCase()
      })
    )
    .matches(
      phoneRegex,
      t('form_validation_phone', { field: t('phone').toLowerCase() })
    )
});

export const EmployeePersonalInfoSchema = Yup.object().shape({
  basic_information: Yup.object().shape({
    nationality: Yup.string()
      .notRequired()
      .nullable()
      .max(
        50,
        t('form_validation_max', {
          field: t('nationality').toLowerCase(),
          max: '50'
        })
      ),
    religion: Yup.string()
      .notRequired()
      .nullable()
      .max(
        50,
        t('form_validation_max', {
          field: t('religion').toLowerCase(),
          max: '50'
        })
      ),
    blood_group: Yup.string()
      .notRequired()
      .nullable()
      .max(
        4,
        t('form_validation_max', {
          field: t('blood_group').toLowerCase(),
          max: '4'
        })
      ),
    marital_status: Yup.string()
      .notRequired()
      .nullable()
      .max(
        4,
        t('form_validation_max', {
          field: t('marital_status').toLowerCase(),
          max: '4'
        })
      ),
    employment_of_spouse: Yup.string()
      .notRequired()
      .nullable()
      .max(
        50,
        t('form_validation_max', {
          field: t('employment_of_spouse').toLowerCase(),
          max: '50'
        })
      ),
    no_of_children: Yup.string()
      .notRequired()
      .nullable()
      .matches(
        positiveNumberRegexWithZero,
        t('form_validation_positive', {
          field: t('no_of_children').toLowerCase()
        })
      )
  })
});

export const EmployeeEmergencyContactSchema = Yup.object().shape({
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
        .matches(
          phoneRegex,
          t('form_validation_phone', { field: t('phone').toLowerCase() })
        ),
      phone_2: Yup.string()
        .notRequired()
        .nullable()
        .matches(
          phoneRegex,
          t('form_validation_phone', {
            field: t('alternative_phone').toLowerCase()
          })
        )
    })
  )
});

export const EmployeeAboutEmployeeSchema = Yup.object().shape({
  basic_information: Yup.object().shape({
    about: Yup.string()
      .notRequired()
      .nullable()
      .max(
        250,
        t('form_validation_max', {
          field: t('about').toLowerCase(),
          max: '250'
        })
      )
  })
});

export const EmployeeBankInformationSchema = Yup.object().shape({
  bank_information: Yup.object().shape({
    bank_name: Yup.string()
      .required(
        t('form_validation_mandatory', { field: t('bank_name').toLowerCase() })
      )
      .max(
        250,
        t('form_validation_max', {
          field: t('bank_name').toLowerCase(),
          max: '250'
        })
      ),
    branch_address: Yup.string()
      .required(
        t('form_validation_mandatory', {
          field: t('branch_address').toLowerCase()
        })
      )
      .max(
        250,
        t('form_validation_max', {
          field: t('branch_address').toLowerCase(),
          max: '250'
        })
      ),
    account_holder_name: Yup.string()
      .required(
        t('form_validation_mandatory', {
          field: t('account_holder_name').toLowerCase()
        })
      )
      .max(
        250,
        t('form_validation_max', {
          field: t('account_holder_name').toLowerCase(),
          max: '250'
        })
      ),
    account_number: Yup.string()
      .required(
        t('form_validation_mandatory', {
          field: t('account_number').toLowerCase()
        })
      )
      .max(
        50,
        t('form_validation_max', {
          field: t('account_number').toLowerCase(),
          max: '50'
        })
      ),
    account_type: Yup.string()
      .notRequired()
      .nullable()
      .max(
        50,
        t('form_validation_max', {
          field: t('account_type').toLowerCase(),
          max: '50'
        })
      ),
    swift_code: Yup.string()
      .notRequired()
      .nullable()
      .max(
        50,
        t('form_validation_max', {
          field: t('swift_code').toLowerCase(),
          max: '50'
        })
      )
  })
});

export const EmployeeFamilyInformationSchema = Yup.object().shape({
  family_information: Yup.array().of(
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
        .matches(
          phoneRegex,
          t('form_validation_phone', { field: t('phone').toLowerCase() })
        ),
      phone_2: Yup.string()
        .notRequired()
        .nullable()
        .matches(
          phoneRegex,
          t('form_validation_phone', {
            field: t('alternative_phone').toLowerCase()
          })
        )
    })
  )
});

export const EmployeeEducationSchema = Yup.object().shape({
  education: Yup.array().of(
    Yup.object().shape({
      institution_name: Yup.string()
        .required(
          t('form_validation_mandatory', {
            field: t('institution_name').toLowerCase()
          })
        )
        .max(
          250,
          t('form_validation_max', {
            field: t('institution_name').toLowerCase(),
            max: '250'
          })
        ),
      course: Yup.string()
        .required(
          t('form_validation_mandatory', { field: t('course').toLowerCase() })
        )
        .max(
          250,
          t('form_validation_max', {
            field: t('course').toLowerCase(),
            max: '250'
          })
        ),
      start_date: Yup.date().required(
        t('form_validation_mandatory', { field: t('start_date').toLowerCase() })
      ),
      end_date: Yup.date()
        .nullable()
        .when('is_current', {
          is: false,
          then: schema =>
            schema
              .required(
                t('form_validation_mandatory', {
                  field: t('end_date').toLowerCase()
                })
              )
              .test(
                'end_after_start',
                t('form_validation_min_date', {
                  field: t('end_date').toLowerCase(),
                  minField: t('start_date').toLowerCase()
                }),
                function (value) {
                  const { start_date } = this.parent;
                  if (!value || !start_date) return true;
                  return new Date(value) >= new Date(start_date);
                }
              ),
          otherwise: schema =>
            schema.test(
              'must-be-empty-if-current',
              t('form_validation_must_be_empty', {
                field: t('end_date').toLowerCase(),
                condition: t('is_current').toLowerCase()
              }),
              value => !value
            )
        }),
      is_current: Yup.boolean().required(
        t('form_validation_mandatory', { field: t('is_current').toLowerCase() })
      ),
      percentage_or_gpa: Yup.string()
        .notRequired()
        .nullable()
        .max(
          10,
          t('form_validation_max', {
            field: t('percentage_or_gpa').toLowerCase(),
            max: '10'
          })
        )
    })
  )
});

export const EmployeeExperienceSchema = Yup.object().shape({
  experience: Yup.array().of(
    Yup.object().shape({
      company_name: Yup.string()
        .required(
          t('form_validation_mandatory', {
            field: t('company_name').toLowerCase()
          })
        )
        .max(
          250,
          t('form_validation_max', {
            field: t('company_name').toLowerCase(),
            max: '250'
          })
        ),
      designation: Yup.string()
        .required(
          t('form_validation_mandatory', {
            field: t('designation').toLowerCase()
          })
        )
        .max(
          250,
          t('form_validation_max', {
            field: t('designation').toLowerCase(),
            max: '250'
          })
        ),
      start_date: Yup.date().required(
        t('form_validation_mandatory', { field: t('start_date').toLowerCase() })
      ),
      end_date: Yup.date()
        .nullable()
        .when('is_current', {
          is: false,
          then: schema =>
            schema
              .required(
                t('form_validation_mandatory', {
                  field: t('end_date').toLowerCase()
                })
              )
              .test(
                'end_after_start',
                t('form_validation_min_date', {
                  field: t('end_date').toLowerCase(),
                  minField: t('start_date').toLowerCase()
                }),
                function (value) {
                  const { start_date } = this.parent;
                  if (!value || !start_date) return true;
                  return new Date(value) >= new Date(start_date);
                }
              ),
          otherwise: schema =>
            schema.test(
              'must-be-empty-if-current',
              t('form_validation_must_be_empty', {
                field: t('end_date').toLowerCase(),
                condition: t('is_current').toLowerCase()
              }),
              value => !value
            )
        }),
      is_current: Yup.boolean().required(
        t('form_validation_mandatory', { field: t('is_current').toLowerCase() })
      )
    })
  )
});
