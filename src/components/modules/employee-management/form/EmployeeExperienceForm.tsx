import React from 'react';
import { Modal, Form, Row, Col, Stack, FloatingLabel } from 'react-bootstrap';
import { Formik, FieldArray, getIn } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  TEmployee,
  TEmployeeExperience
} from '@/types/modules/employee-management/employee';
import { useTranslation } from 'react-i18next';
import Button from '@/components/base/Button';
import { TModalProps } from '@/types/modules';
import { formatDateForInput } from '@/helpers/date';
import { EmployeeExperienceSchema } from '@/validation/employee-management/EmployeeSchema';

interface EmployeeExperienceFormProps {
  modal: TModalProps;
  onClose: () => void;
  onSubmit: (values: TEmployee) => void;
  formData: TEmployee;
  loading?: boolean;
}

const emptyContact = (): TEmployeeExperience => ({
  id: undefined,
  company_name: '',
  designation: '',
  start_date: '',
  end_date: '',
  is_current: false
});

const EmployeeExperienceForm = ({
  modal,
  onClose,
  onSubmit,
  formData,
  loading
}: EmployeeExperienceFormProps) => {
  // React Hooks
  const { t } = useTranslation();

  // Use States
  const isView = modal.type === 'view';

  // On Submit
  const handleOnSubmit = async (values: TEmployee) => {
    const { id, experience } = values;
    onSubmit({
      id,
      experience,
      form_type: 'experience'
    });
  };

  return (
    <Modal size="lg" onHide={onClose} {...modal} backdrop={'static'}>
      <Modal.Header className="border-0 ps-4 pe-4 pb-0" closeButton>
        <Modal.Title>{`${t(modal?.type || '')} ${t(
          'experience_information'
        )}`}</Modal.Title>
      </Modal.Header>

      <Formik
        initialValues={formData}
        validationSchema={EmployeeExperienceSchema}
        onSubmit={handleOnSubmit}
        enableReinitialize
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          touched,
          setFieldValue
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Modal.Body className="ps-4 pe-4 pt-0">
              <hr />

              <FieldArray name="experience">
                {({ push, remove }) => (
                  <div>
                    <Stack gap={4}>
                      {values?.experience?.map((data, index: number) => {
                        // Formik Paths
                        const companyNamePath = `experience.${index}.company_name`;
                        const designationPath = `experience.${index}.designation`;
                        const startDatePath = `experience.${index}.start_date`;
                        const endDatePath = `experience.${index}.end_date`;
                        const isCurrentPath = `experience.${index}.is_current`;

                        return (
                          <div key={index}>
                            <h5 className="d-flex justify-content-start mb-3">
                              {`${index + 1}. ${t('experience_information')}`}
                            </h5>

                            <Row className="g-2">
                              <Col md={12}>
                                <FloatingLabel
                                  className="mb-2"
                                  label={t('company_name')}
                                >
                                  <Form.Control
                                    disabled={isView}
                                    id={companyNamePath}
                                    name={companyNamePath}
                                    value={data.company_name || ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={Boolean(
                                      getIn(touched, companyNamePath) &&
                                        getIn(errors, companyNamePath)
                                    )}
                                    className={`form-control form-icon-input`}
                                  />
                                  {getIn(touched, companyNamePath) &&
                                    getIn(errors, companyNamePath) && (
                                      <Form.Control.Feedback type="invalid">
                                        {getIn(errors, companyNamePath)}
                                      </Form.Control.Feedback>
                                    )}
                                </FloatingLabel>
                              </Col>

                              <Col md={12}>
                                <FloatingLabel
                                  className="mb-2"
                                  label={t('designation')}
                                >
                                  <Form.Control
                                    disabled={isView}
                                    id={designationPath}
                                    name={designationPath}
                                    value={data.designation || ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={Boolean(
                                      getIn(touched, designationPath) &&
                                        getIn(errors, designationPath)
                                    )}
                                    className={`form-control form-icon-input`}
                                  />
                                  {getIn(touched, designationPath) &&
                                    getIn(errors, designationPath) && (
                                      <Form.Control.Feedback type="invalid">
                                        {getIn(errors, designationPath)}
                                      </Form.Control.Feedback>
                                    )}
                                </FloatingLabel>
                              </Col>

                              <Col md={6}>
                                <FloatingLabel label={t('start_date')}>
                                  <Form.Control
                                    disabled={isView}
                                    id={startDatePath}
                                    type="date"
                                    name={startDatePath}
                                    placeholder={t('start_date')}
                                    className={`form-control form-icon-input`}
                                    value={
                                      formatDateForInput(
                                        getIn(values, startDatePath)
                                      ) || ''
                                    }
                                    onBlur={handleBlur}
                                    onChange={e => {
                                      setFieldValue(endDatePath, '');
                                      handleChange(e);
                                    }}
                                    isInvalid={Boolean(
                                      getIn(touched, startDatePath) &&
                                        getIn(errors, startDatePath)
                                    )}
                                  />
                                  {getIn(touched, startDatePath) &&
                                    getIn(errors, startDatePath) && (
                                      <Form.Control.Feedback type="invalid">
                                        {getIn(errors, startDatePath)}
                                      </Form.Control.Feedback>
                                    )}
                                </FloatingLabel>
                              </Col>

                              <Col md={6}>
                                <FloatingLabel label={t('end_date')}>
                                  <Form.Control
                                    disabled={isView}
                                    id={endDatePath}
                                    type="date"
                                    name={endDatePath}
                                    placeholder={t('end_date')}
                                    className={`form-control form-icon-input`}
                                    value={
                                      formatDateForInput(
                                        getIn(values, endDatePath)
                                      ) || ''
                                    }
                                    onBlur={handleBlur}
                                    onChange={e => {
                                      setFieldValue(isCurrentPath, false);
                                      handleChange(e);
                                    }}
                                    isInvalid={Boolean(
                                      getIn(touched, endDatePath) &&
                                        getIn(errors, endDatePath)
                                    )}
                                  />
                                  {getIn(touched, endDatePath) &&
                                    getIn(errors, endDatePath) && (
                                      <Form.Control.Feedback type="invalid">
                                        {getIn(errors, endDatePath)}
                                      </Form.Control.Feedback>
                                    )}
                                </FloatingLabel>
                              </Col>

                              <Col md={12}>
                                <Form.Check type="checkbox" id={isCurrentPath}>
                                  <Form.Check.Input
                                    type="checkbox"
                                    name={isCurrentPath}
                                    checked={!!getIn(values, isCurrentPath)}
                                    onBlur={handleBlur}
                                    onChange={e => {
                                      const checked = e.currentTarget.checked;
                                      setFieldValue(isCurrentPath, checked);
                                      if (checked)
                                        setFieldValue(endDatePath, '');
                                    }}
                                  />
                                  <Form.Check.Label className="fw-semibold fs-9">
                                    {t('is_current')}
                                  </Form.Check.Label>
                                </Form.Check>
                              </Col>
                            </Row>

                            <div className="d-flex justify-content-end mt-3">
                              <Button
                                variant="phoenix-danger"
                                onClick={() => remove(index)}
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </Button>
                            </div>
                          </div>
                        );
                      })}

                      <div className="d-flex justify-content-start my-2">
                        <Button
                          disabled={isView || loading}
                          variant="primary"
                          onClick={() => push(emptyContact())}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                          <span className="ms-1">{t('add_experience')}</span>
                        </Button>
                      </div>
                    </Stack>
                  </div>
                )}
              </FieldArray>
            </Modal.Body>

            <Modal.Footer className="border-0 ps-4 pe-4 pb-4">
              <Button variant="phoenix-secondary" onClick={onClose}>
                {t('cancel')}
              </Button>
              <Button
                type="submit"
                variant="primary"
                disabled={isView || loading}
              >
                <FontAwesomeIcon icon={faSave} className="me-2" />
                <span>{t('save')}</span>
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default EmployeeExperienceForm;
