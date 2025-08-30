import * as Yup from 'yup';
import i18next from 'i18next';
import { todayDate } from '@/helpers/date';
import { phoneRegex, positiveNumberRegexWithZero } from '@/helpers/regex';
import { employeeDocumentSchema, imageValidatorSchema } from '..';
const t = i18next.t;

const todaysDate = todayDate();

export const EmployeeBasicInfoSchema = Yup.object().shape({
  avatar: imageValidatorSchema,
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
  username: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('username')
      })
    )
    .max(
      200,
      t('form_validation_max', {
        field: t('username'),
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
  basic_information: Yup.object().shape({
    date_of_birth: Yup.date()
      .required(
        t('form_validation_mandatory', {
          field: t('date_of_birth')
        })
      )
      .max(
        todaysDate,
        t('form_validation_date_before', {
          from: t('date_of_birth'),
          to: todaysDate
        })
      ),
    joining_date: Yup.date()
      .required(
        t('form_validation_mandatory', {
          field: t('joining_date')
        })
      )
      .max(
        todaysDate,
        t('form_validation_date_before', {
          from: t('joining_date'),
          to: todaysDate
        })
      ),
    gender: Yup.string().required(
      t('form_validation_mandatory', {
        field: t('gender')
      })
    )
  }),
  phone: Yup.string()
    .required(
      t('form_validation_mandatory', {
        field: t('phone')
      })
    )
    .matches(phoneRegex, t('form_validation_phone', { field: t('phone') }))
});

export const EmployeePersonalInfoSchema = Yup.object().shape({
  basic_information: Yup.object().shape({
    nationality: Yup.string()
      .notRequired()
      .nullable()
      .max(
        50,
        t('form_validation_max', {
          field: t('nationality'),
          max: '50'
        })
      ),
    religion: Yup.string()
      .notRequired()
      .nullable()
      .max(
        50,
        t('form_validation_max', {
          field: t('religion'),
          max: '50'
        })
      ),
    blood_group: Yup.string()
      .notRequired()
      .nullable()
      .max(
        4,
        t('form_validation_max', {
          field: t('blood_group'),
          max: '4'
        })
      ),
    marital_status: Yup.string()
      .notRequired()
      .nullable()
      .max(
        4,
        t('form_validation_max', {
          field: t('marital_status'),
          max: '4'
        })
      ),
    employment_of_spouse: Yup.string()
      .notRequired()
      .nullable()
      .max(
        50,
        t('form_validation_max', {
          field: t('employment_of_spouse'),
          max: '50'
        })
      ),
    no_of_children: Yup.string()
      .notRequired()
      .nullable()
      .matches(
        positiveNumberRegexWithZero,
        t('form_validation_positive', {
          field: t('no_of_children')
        })
      )
  })
});

export const EmployeeEmergencyContactSchema = Yup.object().shape({
  emergency_contact: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required(
        t('form_validation_mandatory', { field: t('name') })
      ),
      relationship: Yup.string().required(
        t('form_validation_mandatory', {
          field: t('relationship')
        })
      ),
      phone_1: Yup.string()
        .required(
          t('form_validation_mandatory', {
            field: t('phone')
          })
        )
        .matches(phoneRegex, t('form_validation_phone', { field: t('phone') })),
      phone_2: Yup.string()
        .notRequired()
        .nullable()
        .matches(
          phoneRegex,
          t('form_validation_phone', {
            field: t('alternative_phone')
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
          field: t('about'),
          max: '250'
        })
      )
  })
});

export const EmployeeBankInformationSchema = Yup.object().shape({
  bank_information: Yup.object().shape({
    bank_name: Yup.string()
      .required(t('form_validation_mandatory', { field: t('bank_name') }))
      .max(
        250,
        t('form_validation_max', {
          field: t('bank_name'),
          max: '250'
        })
      ),
    branch_address: Yup.string()
      .required(
        t('form_validation_mandatory', {
          field: t('branch_address')
        })
      )
      .max(
        250,
        t('form_validation_max', {
          field: t('branch_address'),
          max: '250'
        })
      ),
    account_holder_name: Yup.string()
      .required(
        t('form_validation_mandatory', {
          field: t('account_holder_name')
        })
      )
      .max(
        250,
        t('form_validation_max', {
          field: t('account_holder_name'),
          max: '250'
        })
      ),
    account_number: Yup.string()
      .required(
        t('form_validation_mandatory', {
          field: t('account_number')
        })
      )
      .max(
        50,
        t('form_validation_max', {
          field: t('account_number'),
          max: '50'
        })
      ),
    account_type: Yup.string()
      .notRequired()
      .nullable()
      .max(
        50,
        t('form_validation_max', {
          field: t('account_type'),
          max: '50'
        })
      ),
    swift_code: Yup.string()
      .notRequired()
      .nullable()
      .max(
        50,
        t('form_validation_max', {
          field: t('swift_code'),
          max: '50'
        })
      )
  })
});

export const EmployeeFamilyInformationSchema = Yup.object().shape({
  family_information: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required(
        t('form_validation_mandatory', { field: t('name') })
      ),
      relationship: Yup.string().required(
        t('form_validation_mandatory', {
          field: t('relationship')
        })
      ),
      phone_1: Yup.string()
        .required(
          t('form_validation_mandatory', {
            field: t('phone')
          })
        )
        .matches(phoneRegex, t('form_validation_phone', { field: t('phone') })),
      phone_2: Yup.string()
        .notRequired()
        .nullable()
        .matches(
          phoneRegex,
          t('form_validation_phone', {
            field: t('alternative_phone')
          })
        )
    })
  )
});

export const EmployeeStatutoryInformationSchema = Yup.object().shape({
  statutory_information: Yup.object().shape({
    citizen_investment_trust: employeeDocumentSchema,
    social_security_fund: employeeDocumentSchema,
    provident_fund: employeeDocumentSchema,
    police_clearance: employeeDocumentSchema,
    health_insurance: employeeDocumentSchema,
    tax_clearance: employeeDocumentSchema
  })
});

export const EmployeeSupportingDocumentsSchema = Yup.object().shape({
  supporting_documents: Yup.object().shape({
    pan: employeeDocumentSchema,
    national_id: employeeDocumentSchema,
    citizenship: employeeDocumentSchema,
    passport: employeeDocumentSchema,
    driving_license: employeeDocumentSchema
  })
});

export const EmployeeEducationSchema = Yup.object().shape({
  education: Yup.array().of(
    Yup.object().shape({
      institution_name: Yup.string()
        .required(
          t('form_validation_mandatory', {
            field: t('institution_name')
          })
        )
        .max(
          250,
          t('form_validation_max', {
            field: t('institution_name'),
            max: '250'
          })
        ),
      course: Yup.string()
        .required(t('form_validation_mandatory', { field: t('course') }))
        .max(
          250,
          t('form_validation_max', {
            field: t('course'),
            max: '250'
          })
        ),
      start_date: Yup.date().required(
        t('form_validation_mandatory', { field: t('start_date') })
      ),
      end_date: Yup.date()
        .nullable()
        .when('is_current', {
          is: false,
          then: schema =>
            schema
              .required(
                t('form_validation_mandatory', {
                  field: t('end_date')
                })
              )
              .test(
                'end_after_start',
                t('form_validation_min_date', {
                  field: t('end_date'),
                  minField: t('start_date')
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
                field: t('end_date'),
                condition: t('is_current')
              }),
              value => !value
            )
        }),
      is_current: Yup.boolean().required(
        t('form_validation_mandatory', { field: t('is_current') })
      ),
      percentage_or_gpa: Yup.string()
        .notRequired()
        .nullable()
        .max(
          10,
          t('form_validation_max', {
            field: t('percentage_or_gpa'),
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
            field: t('company_name')
          })
        )
        .max(
          250,
          t('form_validation_max', {
            field: t('company_name'),
            max: '250'
          })
        ),
      designation: Yup.string()
        .required(
          t('form_validation_mandatory', {
            field: t('designation')
          })
        )
        .max(
          250,
          t('form_validation_max', {
            field: t('designation'),
            max: '250'
          })
        ),
      start_date: Yup.date().required(
        t('form_validation_mandatory', { field: t('start_date') })
      ),
      end_date: Yup.date()
        .nullable()
        .when('is_current', {
          is: false,
          then: schema =>
            schema
              .required(
                t('form_validation_mandatory', {
                  field: t('end_date')
                })
              )
              .test(
                'end_after_start',
                t('form_validation_min_date', {
                  field: t('end_date'),
                  minField: t('start_date')
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
                field: t('end_date'),
                condition: t('is_current')
              }),
              value => !value
            )
        }),
      is_current: Yup.boolean().required(
        t('form_validation_mandatory', { field: t('is_current') })
      )
    })
  )
});
