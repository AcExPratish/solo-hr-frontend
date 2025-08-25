import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Formik, getIn } from 'formik';
import { TModalProps, TReactOption } from '@/types/modules';
import ModalForm from '@/components/common/custom/ModalForm';
import { TEmployee } from '@/types/modules/employee-management/employee';
import ReactGroupSelect from '@/components/base/ReactGroupSelect';
import { bloodGroupOptions, maritalStatusOptions } from '@/data';

export interface EmployeePersonalInfoFormProps {
  formData: TEmployee;
  onSubmit: (data: TEmployee) => void;
  onClose: () => void;
  modal: TModalProps;
  loading?: boolean;
}

const EmployeePersonalInfoForm = ({
  formData: initialValues,
  modal,
  onSubmit,
  onClose,
  loading
}: EmployeePersonalInfoFormProps) => {
  // React Hooks
  const { t } = useTranslation();

  // Use States
  const isView = modal.type === 'view';

  // On Submit
  const handleOnSubmit = async (values: TEmployee) => {
    onSubmit({ ...values, form_type: 'personal-info' });
  };

  return (
    <Formik
      key={modal.show ? 'open' : 'closed'}
      initialValues={initialValues}
      enableReinitialize
      //TODO: Add Validation Schema
      validationSchema={null}
      onSubmit={handleOnSubmit}
    >
      {({
        values,
        handleBlur,
        handleChange,
        errors,
        touched,
        handleSubmit,
        resetForm,
        setFieldValue,
        setFieldTouched
      }) => (
        <ModalForm
          modal={modal}
          onClose={() => {
            resetForm();
            onClose();
          }}
          onSubmit={handleSubmit}
          type={modal.type}
          title={t('personal_information')}
          disabled={loading || isView}
          size="lg"
        >
          <Form noValidate className="d-flex flex-column">
            <Row className="g-2">
              <Col xs={12} md={6}>
                <FloatingLabel label={t('nationality')}>
                  <Form.Control
                    disabled={isView}
                    id="basic_information.nationality"
                    type="text"
                    name="basic_information.nationality"
                    placeholder={t('nationality')}
                    className={`form-control form-icon-input`}
                    value={values?.basic_information?.nationality || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={Boolean(
                      getIn(touched, 'basic_information.nationality') &&
                        getIn(errors, 'basic_information.nationality')
                    )}
                  />
                  {getIn(touched, 'basic_information.nationality') &&
                    getIn(errors, 'basic_information.nationality') && (
                      <Form.Control.Feedback type="invalid">
                        {getIn(errors, 'basic_information.nationality')}
                      </Form.Control.Feedback>
                    )}
                </FloatingLabel>
              </Col>

              <Col xs={12} md={6}>
                <FloatingLabel label={t('religion')}>
                  <Form.Control
                    disabled={isView}
                    id="basic_information.religion"
                    type="text"
                    name="basic_information.religion"
                    placeholder={t('religion')}
                    className={`form-control form-icon-input`}
                    value={values?.basic_information?.religion || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={Boolean(
                      getIn(touched, 'basic_information.religion') &&
                        getIn(errors, 'basic_information.religion')
                    )}
                  />
                  {getIn(touched, 'basic_information.religion') &&
                    getIn(errors, 'basic_information.religion') && (
                      <Form.Control.Feedback type="invalid">
                        {getIn(errors, 'basic_information.religion')}
                      </Form.Control.Feedback>
                    )}
                </FloatingLabel>
              </Col>

              <Col xs={12}>
                <Form.Group>
                  <Form.Label htmlFor="bloodGroupOptions" className="ps-0">
                    {t('blood_group')}
                  </Form.Label>
                  <ReactGroupSelect
                    isDisabled={isView}
                    options={bloodGroupOptions}
                    name="basic_information.blood_group"
                    value={
                      bloodGroupOptions?.find(
                        (option: TReactOption) =>
                          option?.value ===
                          values?.basic_information?.blood_group
                      ) ?? null
                    }
                    onBlur={() =>
                      setFieldTouched('basic_information.blood_group', true)
                    }
                    onChange={option =>
                      setFieldValue(
                        'basic_information.blood_group',
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        //@ts-expect-error
                        option?.value
                      )
                    }
                    placeholder={`${t('select')} ${t(
                      'blood_group'
                    ).toLowerCase()} ....`}
                  />
                  {getIn(touched, 'basic_information.blood_group') &&
                    getIn(errors, 'basic_information.blood_group') && (
                      <small className="text-danger">
                        {getIn(errors, 'basic_information.blood_group')}
                      </small>
                    )}
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Form.Group>
                  <Form.Label htmlFor="maritalStatusOptions" className="ps-0">
                    {t('marital_status')}
                  </Form.Label>
                  <ReactGroupSelect
                    isDisabled={isView}
                    options={maritalStatusOptions}
                    name="basic_information.marital_status"
                    value={
                      maritalStatusOptions?.find(
                        (option: TReactOption) =>
                          option?.value ===
                          values?.basic_information?.marital_status
                      ) ?? null
                    }
                    onBlur={() =>
                      setFieldTouched('basic_information.marital_status', true)
                    }
                    onChange={option =>
                      setFieldValue(
                        'basic_information.marital_status',
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        //@ts-expect-error
                        option?.value
                      )
                    }
                    placeholder={`${t('select')} ${t(
                      'marital_status'
                    ).toLowerCase()} ....`}
                  />
                  {getIn(touched, 'basic_information.marital_status') &&
                    getIn(errors, 'basic_information.marital_status') && (
                      <small className="text-danger">
                        {getIn(errors, 'basic_information.marital_status')}
                      </small>
                    )}
                </Form.Group>
              </Col>

              <Col xs={12} md={6}>
                <FloatingLabel label={t('employment_of_spouse')}>
                  <Form.Control
                    disabled={isView}
                    id="basic_information.employment_of_spouse"
                    type="text"
                    name="basic_information.employment_of_spouse"
                    placeholder={t('employment_of_spouse')}
                    className={`form-control form-icon-input`}
                    value={
                      values?.basic_information?.employment_of_spouse || ''
                    }
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={Boolean(
                      getIn(
                        touched,
                        'basic_information.employment_of_spouse'
                      ) &&
                        getIn(errors, 'basic_information.employment_of_spouse')
                    )}
                  />
                  {getIn(touched, 'basic_information.employment_of_spouse') &&
                    getIn(errors, 'basic_information.employment_of_spouse') && (
                      <Form.Control.Feedback type="invalid">
                        {getIn(
                          errors,
                          'basic_information.employment_of_spouse'
                        )}
                      </Form.Control.Feedback>
                    )}
                </FloatingLabel>
              </Col>

              <Col xs={12} md={6}>
                <FloatingLabel label={t('no_of_children')}>
                  <Form.Control
                    disabled={isView}
                    id="basic_information.no_of_children"
                    type="text"
                    name="basic_information.no_of_children"
                    placeholder={t('no_of_children')}
                    className={`form-control form-icon-input`}
                    value={values?.basic_information?.no_of_children || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={Boolean(
                      getIn(touched, 'basic_information.no_of_children') &&
                        getIn(errors, 'basic_information.no_of_children')
                    )}
                  />
                  {getIn(touched, 'basic_information.no_of_children') &&
                    getIn(errors, 'basic_information.no_of_children') && (
                      <Form.Control.Feedback type="invalid">
                        {getIn(errors, 'basic_information.no_of_children')}
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

export default EmployeePersonalInfoForm;
