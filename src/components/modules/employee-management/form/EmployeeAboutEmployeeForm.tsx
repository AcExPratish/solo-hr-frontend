import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Formik, getIn } from 'formik';
import { TModalProps } from '@/types/modules';
import ModalForm from '@/components/common/custom/ModalForm';
import { TEmployee } from '@/types/modules/employee-management/employee';
import { EmployeeAboutEmployeeSchema } from '@/validation/employee-management/EmployeeSchema';

export interface EmployeeAboutEmployeeFormProps {
  formData: TEmployee;
  onSubmit: (data: TEmployee) => void;
  onClose: () => void;
  modal: TModalProps;
  loading?: boolean;
}

const EmployeeAboutEmployeeForm = ({
  formData: initialValues,
  modal,
  onSubmit,
  onClose,
  loading
}: EmployeeAboutEmployeeFormProps) => {
  // React Hooks
  const { t } = useTranslation();

  // Use States
  const isView = modal.type === 'view';

  // On Submit
  const handleOnSubmit = async (values: TEmployee) => {
    onSubmit({ ...values, form_type: 'about-employee' });
  };

  return (
    <Formik
      key={modal.show ? 'open' : 'closed'}
      initialValues={initialValues}
      enableReinitialize
      validationSchema={EmployeeAboutEmployeeSchema}
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
          title={t('about_employee')}
          disabled={loading || isView}
          size="lg"
        >
          <Form noValidate className="d-flex flex-column">
            <Row className="g-2">
              <Col xs={12}>
                <FloatingLabel label={t('about')}>
                  <Form.Control
                    disabled={isView}
                    as="textarea"
                    style={{ height: '150px', resize: 'none' }}
                    id="basic_information.about"
                    type="text"
                    name="basic_information.about"
                    placeholder={t('about')}
                    className={`form-control form-icon-input`}
                    value={values?.basic_information?.about || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={Boolean(
                      getIn(touched, 'basic_information.about') &&
                        getIn(errors, 'basic_information.about')
                    )}
                  />
                  {getIn(touched, 'basic_information.about') &&
                    getIn(errors, 'basic_information.about') && (
                      <Form.Control.Feedback type="invalid">
                        {getIn(errors, 'basic_information.about')}
                      </Form.Control.Feedback>
                    )}
                </FloatingLabel>
              </Col>
            </Row>
          </Form>
        </ModalForm>
      )}
    </Formik>
  );
};

export default EmployeeAboutEmployeeForm;
