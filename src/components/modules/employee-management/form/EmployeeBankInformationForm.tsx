import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Formik, getIn } from 'formik';
import { TModalProps } from '@/types/modules';
import ModalForm from '@/components/common/custom/ModalForm';
import { TEmployee } from '@/types/modules/employee-management/employee';
import { EmployeeBankInformationSchema } from '@/validation/employee-management/EmployeeSchema';

export interface EmployeeBankInformationFormProps {
  formData: TEmployee;
  onSubmit: (data: TEmployee) => void;
  onClose: () => void;
  modal: TModalProps;
  loading?: boolean;
}

const EmployeeBankInformationForm = ({
  formData: initialValues,
  modal,
  onSubmit,
  onClose,
  loading
}: EmployeeBankInformationFormProps) => {
  // React Hooks
  const { t } = useTranslation();

  // Use States
  const isView = modal.type === 'view';

  // On Submit
  const handleOnSubmit = async (values: TEmployee) => {
    onSubmit({ ...values, form_type: 'bank_information' });
  };

  return (
    <Formik
      key={modal.show ? 'open' : 'closed'}
      initialValues={initialValues}
      enableReinitialize
      validationSchema={EmployeeBankInformationSchema}
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
          title={t('bank_information')}
          disabled={loading || isView}
          size="lg"
        >
          <Form noValidate className="d-flex flex-column">
            <Row className="g-2">
              <Col xs={12} md={4}>
                <FloatingLabel label={t('bank_name')}>
                  <Form.Control
                    disabled={isView}
                    id="bank_information.bank_name"
                    type="text"
                    name="bank_information.bank_name"
                    placeholder={t('bank_name')}
                    className={`form-control form-icon-input`}
                    value={values?.bank_information?.bank_name || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={Boolean(
                      getIn(touched, 'bank_information.bank_name') &&
                        getIn(errors, 'bank_informa tion.bank_name')
                    )}
                  />
                  {getIn(touched, 'bank_information.bank_name') &&
                    getIn(errors, 'bank_information.bank_name') && (
                      <Form.Control.Feedback type="invalid">
                        {getIn(errors, 'bank_information.bank_name')}
                      </Form.Control.Feedback>
                    )}
                </FloatingLabel>
              </Col>

              <Col xs={12} md={4}>
                <FloatingLabel label={t('branch_address')}>
                  <Form.Control
                    disabled={isView}
                    id="bank_information.branch_address"
                    type="text"
                    name="bank_information.branch_address"
                    placeholder={t('branch_address')}
                    className={`form-control form-icon-input`}
                    value={values?.bank_information?.branch_address || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={Boolean(
                      getIn(touched, 'bank_information.branch_address') &&
                        getIn(errors, 'bank_information.branch_address')
                    )}
                  />
                  {getIn(touched, 'bank_information.branch_address') &&
                    getIn(errors, 'bank_information.branch_address') && (
                      <Form.Control.Feedback type="invalid">
                        {getIn(errors, 'bank_information.branch_address')}
                      </Form.Control.Feedback>
                    )}
                </FloatingLabel>
              </Col>

              <Col xs={12} md={4}>
                <FloatingLabel label={t('swift_code')}>
                  <Form.Control
                    disabled={isView}
                    id="bank_information.swift_code"
                    type="text"
                    name="bank_information.swift_code"
                    placeholder={t('swift_code')}
                    className={`form-control form-icon-input`}
                    value={values?.bank_information?.swift_code || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={Boolean(
                      getIn(touched, 'bank_information.swift_code') &&
                        getIn(errors, 'bank_information.swift_code')
                    )}
                  />
                  {getIn(touched, 'bank_information.swift_code') &&
                    getIn(errors, 'bank_information.swift_code') && (
                      <Form.Control.Feedback type="invalid">
                        {getIn(errors, 'bank_information.swift_code')}
                      </Form.Control.Feedback>
                    )}
                </FloatingLabel>
              </Col>

              <Col xs={12} md={4}>
                <FloatingLabel label={t('account_holder_name')}>
                  <Form.Control
                    disabled={isView}
                    id="bank_information.account_holder_name"
                    type="text"
                    name="bank_information.account_holder_name"
                    placeholder={t('account_holder_name')}
                    className={`form-control form-icon-input`}
                    value={values?.bank_information?.account_holder_name || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={Boolean(
                      getIn(touched, 'bank_information.account_holder_name') &&
                        getIn(errors, 'bank_information.account_holder_name')
                    )}
                  />
                  {getIn(touched, 'bank_information.account_holder_name') &&
                    getIn(errors, 'bank_information.account_holder_name') && (
                      <Form.Control.Feedback type="invalid">
                        {getIn(errors, 'bank_information.account_holder_name')}
                      </Form.Control.Feedback>
                    )}
                </FloatingLabel>
              </Col>

              <Col xs={12} md={4}>
                <FloatingLabel label={t('account_number')}>
                  <Form.Control
                    disabled={isView}
                    id="bank_information.account_number"
                    type="text"
                    name="bank_information.account_number"
                    placeholder={t('account_number')}
                    className={`form-control form-icon-input`}
                    value={values?.bank_information?.account_number || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={Boolean(
                      getIn(touched, 'bank_information.account_number') &&
                        getIn(errors, 'bank_information.account_number')
                    )}
                  />
                  {getIn(touched, 'bank_information.account_number') &&
                    getIn(errors, 'bank_information.account_number') && (
                      <Form.Control.Feedback type="invalid">
                        {getIn(errors, 'bank_information.account_number')}
                      </Form.Control.Feedback>
                    )}
                </FloatingLabel>
              </Col>

              <Col xs={12} md={4}>
                <FloatingLabel label={t('account_type')}>
                  <Form.Control
                    disabled={isView}
                    id="bank_information.account_type"
                    type="text"
                    name="bank_information.account_type"
                    placeholder={t('account_type')}
                    className={`form-control form-icon-input`}
                    value={values?.bank_information?.account_type || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={Boolean(
                      getIn(touched, 'bank_information.account_type') &&
                        getIn(errors, 'bank_information.account_type')
                    )}
                  />
                  {getIn(touched, 'bank_information.account_type') &&
                    getIn(errors, 'bank_information.account_type') && (
                      <Form.Control.Feedback type="invalid">
                        {getIn(errors, 'bank_information.account_type')}
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

export default EmployeeBankInformationForm;
