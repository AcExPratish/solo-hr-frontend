import React from 'react';
import { Modal, Form, Row, Col, Stack, FloatingLabel } from 'react-bootstrap';
import { Formik, FieldArray, getIn } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  TEmployee,
  TEmployeeEducation
} from '@/types/modules/employee-management/employee';
import { useTranslation } from 'react-i18next';
import Button from '@/components/base/Button';
import { TModalProps } from '@/types/modules';
import { formatDateForInput } from '@/helpers/date';
import { EmployeeEducationSchema } from '@/validation/employee-management/EmployeeSchema';

interface EmployeeEducationFormProps {
  modal: TModalProps;
  onClose: () => void;
  onSubmit: (values: TEmployee) => void;
  formData: TEmployee;
  loading?: boolean;
}

const emptyContact = (): TEmployeeEducation => ({
  id: undefined,
  institution_name: '',
  course: '',
  start_date: '',
  end_date: '',
  is_current: false,
  percentage_or_gpa: ''
});

const EmployeeEducationForm = ({
  modal,
  onClose,
  onSubmit,
  formData,
  loading
}: EmployeeEducationFormProps) => {
  // React Hooks
  const { t } = useTranslation();

  // Use States
  const isView = modal.type === 'view';

  // On Submit
  const handleOnSubmit = async (values: TEmployee) => {
    onSubmit({ ...values, form_type: 'education' });
  };

  return (
    <Modal size="lg" onHide={onClose} {...modal} backdrop={'static'}>
      <Modal.Header className="border-0 ps-4 pe-4 pb-0" closeButton>
        <Modal.Title>{t('education_details')}</Modal.Title>
      </Modal.Header>

      <Formik
        initialValues={formData}
        validationSchema={EmployeeEducationSchema}
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

              <FieldArray name="education">
                {({ push, remove }) => (
                  <div>
                    <Stack gap={4}>
                      {values?.education?.map((data, index: number) => {
                        // Formik Paths
                        const institutionNamePath = `education.${index}.institution_name`;
                        const coursePath = `education.${index}.course`;
                        const startDatePath = `education.${index}.start_date`;
                        const endDatePath = `education.${index}.end_date`;
                        const isCurrentPath = `education.${index}.is_current`;
                        const percentageOrGpaPath = `education.${index}.percentage_or_gpa`;

                        return (
                          <div key={index}>
                            <h5 className="d-flex justify-content-start mb-3">
                              {`${index + 1}. ${t('education_details')}`}
                            </h5>

                            <Row className="g-2">
                              <Col md={12}>
                                <FloatingLabel
                                  className="mb-2"
                                  label={t('institution_name')}
                                >
                                  <Form.Control
                                    disabled={isView}
                                    id={institutionNamePath}
                                    name={institutionNamePath}
                                    value={data.institution_name || ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={Boolean(
                                      getIn(touched, institutionNamePath) &&
                                        getIn(errors, institutionNamePath)
                                    )}
                                    className={`form-control form-icon-input`}
                                  />
                                  {getIn(touched, institutionNamePath) &&
                                    getIn(errors, institutionNamePath) && (
                                      <Form.Control.Feedback type="invalid">
                                        {getIn(errors, institutionNamePath)}
                                      </Form.Control.Feedback>
                                    )}
                                </FloatingLabel>
                              </Col>

                              <Col md={12}>
                                <FloatingLabel
                                  className="mb-2"
                                  label={t('course')}
                                >
                                  <Form.Control
                                    disabled={isView}
                                    id={coursePath}
                                    name={coursePath}
                                    value={data.course || ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={Boolean(
                                      getIn(touched, coursePath) &&
                                        getIn(errors, coursePath)
                                    )}
                                    className={`form-control form-icon-input`}
                                  />
                                  {getIn(touched, coursePath) &&
                                    getIn(errors, coursePath) && (
                                      <Form.Control.Feedback type="invalid">
                                        {getIn(errors, coursePath)}
                                      </Form.Control.Feedback>
                                    )}
                                </FloatingLabel>
                              </Col>

                              <Col md={4}>
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

                              <Col md={4}>
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

                              <Col md={4}>
                                <FloatingLabel
                                  className="mb-2"
                                  label={t('percentage_or_gpa')}
                                >
                                  <Form.Control
                                    disabled={isView}
                                    id={percentageOrGpaPath}
                                    name={percentageOrGpaPath}
                                    value={data.percentage_or_gpa || ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={Boolean(
                                      getIn(touched, percentageOrGpaPath) &&
                                        getIn(errors, percentageOrGpaPath)
                                    )}
                                    className={`form-control form-icon-input`}
                                  />
                                  {getIn(touched, percentageOrGpaPath) &&
                                    getIn(errors, percentageOrGpaPath) && (
                                      <Form.Control.Feedback type="invalid">
                                        {getIn(errors, percentageOrGpaPath)}
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
                          <span className="ms-1">{t('add_education')}</span>
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

export default EmployeeEducationForm;
