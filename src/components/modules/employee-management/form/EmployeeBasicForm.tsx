import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { TUser } from '@/types/modules/user-management/user';
import { TModalProps } from '@/types/modules';
import ModalForm from '@/components/common/custom/ModalForm';
import { formatDateForInput } from '@/helpers/date';
import { TEmployee } from '@/types/modules/employee-management/employee';
import {
  EmployeeCreateSchema,
  EmployeeUpdateSchema
} from '@/validation/employee-management/EmployeeSchema';
import { FieldErrorFeedback, getFieldClass } from '@/helpers/formik';

export interface EmployeeBasicFormProps {
  formData: TEmployee;
  onSubmit: (data: TEmployee) => void;
  onClose: () => void;
  modal: TModalProps;
  loading?: boolean;
}

const EmployeeBasicForm = ({
  formData,
  modal,
  onSubmit,
  onClose,
  loading
}: EmployeeBasicFormProps) => {
  // React Hooks
  const { t } = useTranslation();

  // Use States
  const isView = modal.type === 'view';
  const initialValues = React.useMemo<TEmployee>(() => {
    return {
      ...formData
    };
  }, [formData, modal]);

  // On Submit
  const handleOnSubmit = async (values: TEmployee) => {
    const tempValues: TUser = {
      ...values
    };

    if (values.password && values.password.trim() !== '') {
      tempValues.password = values?.password;
    } else {
      delete tempValues.password;
    }

    onSubmit(tempValues);
  };

  return (
    <Formik
      key={modal.show ? 'open' : 'closed'}
      initialValues={initialValues}
      enableReinitialize
      validationSchema={
        modal.type === 'add' ? EmployeeCreateSchema : EmployeeUpdateSchema
      }
      onSubmit={handleOnSubmit}
    >
      {({
        values,
        handleBlur,
        handleChange,
        errors,
        touched,
        handleSubmit,
        resetForm
      }) => (
        <ModalForm
          modal={modal}
          onClose={() => {
            resetForm();
            onClose();
          }}
          onSubmit={handleSubmit}
          type={modal.type}
          title={t('employee')}
          disabled={loading}
          size="lg"
        >
          <Form noValidate className="d-flex flex-column">
            <Row className="g-2">
              <Col xs={12} md={4}>
                <FloatingLabel label={t('first_name')}>
                  <Form.Control
                    disabled={isView}
                    id="first_name"
                    type="text"
                    name="first_name"
                    placeholder={t('first_name')}
                    className={`form-control form-icon-input ${getFieldClass(
                      touched,
                      errors,
                      'first_name'
                    )}`}
                    value={values.first_name || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />

                  <FieldErrorFeedback
                    touched={touched}
                    errors={errors}
                    path="first_name"
                  />
                </FloatingLabel>
              </Col>

              <Col xs={12} md={4}>
                <FloatingLabel label={t('middle_name')}>
                  <Form.Control
                    disabled={isView}
                    id="middle_name"
                    type="text"
                    name="middle_name"
                    placeholder={t('middle_name')}
                    className={`form-control form-icon-input ${getFieldClass(
                      touched,
                      errors,
                      'middle_name'
                    )}`}
                    value={values.middle_name || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />

                  <FieldErrorFeedback
                    touched={touched}
                    errors={errors}
                    path="middle_name"
                  />
                </FloatingLabel>
              </Col>

              <Col xs={12} md={4}>
                <FloatingLabel label={t('last_name')}>
                  <Form.Control
                    disabled={isView}
                    id="last_name"
                    type="text"
                    name="last_name"
                    placeholder={t('last_name')}
                    className={`form-control form-icon-input ${getFieldClass(
                      touched,
                      errors,
                      'last_name'
                    )}`}
                    value={values.last_name || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />

                  <FieldErrorFeedback
                    touched={touched}
                    errors={errors}
                    path="last_name"
                  />
                </FloatingLabel>
              </Col>

              <Col xs={12}>
                <FloatingLabel label={t('username')}>
                  <Form.Control
                    disabled={isView}
                    id="username"
                    type="text"
                    name="username"
                    placeholder={t('username')}
                    className={`form-control form-icon-input ${getFieldClass(
                      touched,
                      errors,
                      'username'
                    )}`}
                    value={values.username || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />

                  <FieldErrorFeedback
                    touched={touched}
                    errors={errors}
                    path="username"
                  />
                </FloatingLabel>
              </Col>

              <Col xs={12}>
                <FloatingLabel label={t('email')}>
                  <Form.Control
                    disabled={isView}
                    id="email"
                    type="email"
                    name="email"
                    placeholder={t('email')}
                    className={`form-control form-icon-input ${getFieldClass(
                      touched,
                      errors,
                      'email'
                    )}`}
                    value={values.email || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />

                  <FieldErrorFeedback
                    touched={touched}
                    errors={errors}
                    path="email"
                  />
                </FloatingLabel>
              </Col>

              <Col xs={12} md={6}>
                <FloatingLabel label={t('date_of_birth')}>
                  <Form.Control
                    disabled={isView}
                    id="basic_information.date_of_birth"
                    type="date"
                    name="basic_information.date_of_birth"
                    placeholder={t('date_of_birth')}
                    className={`form-control form-icon-input ${getFieldClass(
                      touched,
                      errors,
                      'basic_information.date_of_birth'
                    )}`}
                    value={
                      formatDateForInput(
                        values?.basic_information?.date_of_birth
                      ) || ''
                    }
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />

                  <FieldErrorFeedback
                    touched={touched}
                    errors={errors}
                    path="basic_information.date_of_birth"
                  />
                </FloatingLabel>
              </Col>

              <Col xs={12} md={6}>
                <FloatingLabel label={t('joining_date')}>
                  <Form.Control
                    disabled={isView}
                    id="basic_information.joining_date"
                    type="date"
                    name="basic_information.joining_date"
                    placeholder={t('joining_date')}
                    className={`form-control form-icon-input ${getFieldClass(
                      touched,
                      errors,
                      'basic_information.joining_date'
                    )}`}
                    value={
                      formatDateForInput(
                        values?.basic_information?.joining_date
                      ) || ''
                    }
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />

                  <FieldErrorFeedback
                    touched={touched}
                    errors={errors}
                    path="basic_information.joining_date"
                  />
                </FloatingLabel>
              </Col>

              <Col xs={12}>
                <FloatingLabel label={t('phone')}>
                  <Form.Control
                    disabled={isView}
                    id="phone"
                    type="phone"
                    name="phone"
                    placeholder={t('phone')}
                    className={`form-control form-icon-input ${getFieldClass(
                      touched,
                      errors,
                      'phone'
                    )}`}
                    value={values.phone || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />

                  <FieldErrorFeedback
                    touched={touched}
                    errors={errors}
                    path="phone"
                  />
                </FloatingLabel>
              </Col>
            </Row>
          </Form>
        </ModalForm>
      )}
    </Formik>
  );
};

export default EmployeeBasicForm;
