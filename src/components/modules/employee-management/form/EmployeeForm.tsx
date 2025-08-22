import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { TUser } from '@/types/modules/user-management/user';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TModalProps } from '@/types/modules';
import ModalForm from '@/components/common/custom/ModalForm';
import { formatDateForInput } from '@/helpers/date';
import { TEmployee } from '@/types/modules/employee-management/employee';
import {
  EmployeeCreateSchema,
  EmployeeUpdateSchema
} from '@/validation/employee-management/EmployeeSchema';

export interface EmployeeFormProps {
  formData: TEmployee;
  onSubmit: (data: TEmployee) => void;
  onClose: () => void;
  modal: TModalProps;
  loading?: boolean;
}

const EmployeeForm = ({
  formData,
  modal,
  onSubmit,
  onClose,
  loading
}: EmployeeFormProps) => {
  // React Hooks
  const { t } = useTranslation();

  // Use States
  const isView = modal.type === 'view';
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const initialValues = React.useMemo<TEmployee>(() => {
    return {
      ...formData
    };
  }, [formData, modal]);

  // Handlers
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
                    className={`form-control form-icon-input ${
                      touched.first_name && errors.first_name
                        ? 'is-invalid'
                        : ''
                    }`}
                    value={values.first_name || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {touched.first_name && errors.first_name && (
                    <Form.Control.Feedback type="invalid">
                      {errors.first_name}
                    </Form.Control.Feedback>
                  )}
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
                    className={`form-control form-icon-input ${
                      touched.middle_name && errors.middle_name
                        ? 'is-invalid'
                        : ''
                    }`}
                    value={values.middle_name || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {touched.middle_name && errors.middle_name && (
                    <Form.Control.Feedback type="invalid">
                      {errors.middle_name}
                    </Form.Control.Feedback>
                  )}
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
                    className={`form-control form-icon-input ${
                      touched.last_name && errors.last_name ? 'is-invalid' : ''
                    }`}
                    value={values.last_name || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {touched.last_name && errors.last_name && (
                    <Form.Control.Feedback type="invalid">
                      {errors.last_name}
                    </Form.Control.Feedback>
                  )}
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
                    className={`form-control form-icon-input ${
                      touched.username && errors.username ? 'is-invalid' : ''
                    }`}
                    value={values.username || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {touched.username && errors.username && (
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  )}
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
                    className={`form-control form-icon-input ${
                      touched.email && errors.email ? 'is-invalid' : ''
                    }`}
                    value={values.email || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {touched.email && errors.email && (
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  )}
                </FloatingLabel>
              </Col>

              <Col xs={12}>
                <FloatingLabel label={t('date_of_birth')}>
                  <Form.Control
                    disabled={isView}
                    id="date_of_birth"
                    type="date"
                    name="date_of_birth"
                    placeholder={t('date_of_birth')}
                    className={`form-control form-icon-input ${
                      touched.date_of_birth && errors.date_of_birth
                        ? 'is-invalid'
                        : ''
                    }`}
                    value={formatDateForInput(values.date_of_birth) || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {touched.date_of_birth && errors.date_of_birth && (
                    <Form.Control.Feedback type="invalid">
                      {errors.date_of_birth}
                    </Form.Control.Feedback>
                  )}
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
                    className={`form-control form-icon-input ${
                      touched.phone && errors.phone ? 'is-invalid' : ''
                    }`}
                    value={values.phone || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {touched.phone && errors.phone && (
                    <Form.Control.Feedback type="invalid">
                      {errors.phone}
                    </Form.Control.Feedback>
                  )}
                </FloatingLabel>
              </Col>

              {!isView && (
                <Col xs={12}>
                  <FloatingLabel label={t('password')}>
                    <Form.Control
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      className={`form-control form-icon-input ${
                        touched.password && errors.password ? 'is-invalid' : ''
                      }`}
                      placeholder={t('password')}
                      value={values.password || ''}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.password && (
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    )}

                    <FontAwesomeIcon
                      onClick={handleClickShowPassword}
                      style={{ position: 'absolute', right: '2%', top: '50%' }}
                      icon={showPassword ? faEye : faEyeSlash}
                      className="text-body fs-9 form-icon"
                    />
                  </FloatingLabel>
                </Col>
              )}
            </Row>
          </Form>
        </ModalForm>
      )}
    </Formik>
  );
};

export default EmployeeForm;
