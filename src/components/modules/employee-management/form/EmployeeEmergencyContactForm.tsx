import React from 'react';
import { Modal, Form, Row, Col, Stack, FloatingLabel } from 'react-bootstrap';
import { Formik, FieldArray, getIn } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  TEmployee,
  TEmployeeEmergencyContact
} from '@/types/modules/employee-management/employee';
import { useTranslation } from 'react-i18next';
import { EmployeeEmergencyContactSchema } from '@/validation/employee-management/EmployeeSchema';
import Button from '@/components/base/Button';
import { TModalProps } from '@/types/modules';

interface EmployeeEmergencyContactFormProps {
  modal: TModalProps;
  onClose: () => void;
  onSubmit: (values: TEmployee) => void;
  formData: TEmployee;
  loading?: boolean;
}

const emptyContact = (): TEmployeeEmergencyContact => ({
  _id: undefined,
  name: '',
  relationship: '',
  phone_1: '',
  phone_2: ''
});

const EmployeeEmergencyContactForm = ({
  modal,
  onClose,
  onSubmit,
  formData,
  loading
}: EmployeeEmergencyContactFormProps) => {
  // React Hooks
  const { t } = useTranslation();

  // Use States
  const isView = modal.type === 'view';

  // On Submit
  const handleOnSubmit = async (values: TEmployee) => {
    const { _id, emergency_contact } = values;
    onSubmit({
      _id,
      emergency_contact,
      form_type: 'emergency_contact'
    });
  };

  return (
    <Modal size="lg" onHide={onClose} {...modal} backdrop={'static'}>
      <Modal.Header className="border-0 ps-4 pe-4 pb-0" closeButton>
        <Modal.Title>{`${t(modal?.type || '')} ${t(
          'emergency_contact_number'
        )}`}</Modal.Title>
      </Modal.Header>

      <Formik
        initialValues={formData}
        validationSchema={EmployeeEmergencyContactSchema}
        onSubmit={handleOnSubmit}
        enableReinitialize
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          touched
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Modal.Body className="ps-4 pe-4 pt-0">
              <hr />

              <FieldArray name="emergency_contact">
                {({ push, remove }) => (
                  <div>
                    <Stack gap={4}>
                      {values?.emergency_contact?.map((data, index: number) => {
                        // Formik Paths
                        const namePath = `emergency_contact.${index}.name`;
                        const relationshipPath = `emergency_contact.${index}.relationship`;
                        const phone1Path = `emergency_contact.${index}.phone_1`;
                        const phone2Path = `emergency_contact.${index}.phone_2`;

                        return (
                          <div key={index}>
                            <h5 className="d-flex justify-content-start mb-3">
                              {index == 0 && t('primary_contact_details')}
                              {index == 1 && t('secondary_contact_details')}
                            </h5>

                            <Row className="g-2">
                              <Col md={6}>
                                <FloatingLabel
                                  className="mb-2"
                                  label={t('name')}
                                >
                                  <Form.Control
                                    disabled={isView}
                                    id={namePath}
                                    name={namePath}
                                    value={data.name || ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={Boolean(
                                      getIn(touched, namePath) &&
                                        getIn(errors, namePath)
                                    )}
                                    className={`form-control form-icon-input`}
                                  />
                                  {getIn(touched, namePath) &&
                                    getIn(errors, namePath) && (
                                      <Form.Control.Feedback type="invalid">
                                        {getIn(errors, namePath)}
                                      </Form.Control.Feedback>
                                    )}
                                </FloatingLabel>
                              </Col>

                              <Col md={6}>
                                <FloatingLabel
                                  className="mb-2"
                                  label={t('relationship')}
                                >
                                  <Form.Control
                                    disabled={isView}
                                    id={relationshipPath}
                                    name={relationshipPath}
                                    value={data.relationship || ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={Boolean(
                                      getIn(touched, relationshipPath) &&
                                        getIn(errors, relationshipPath)
                                    )}
                                    className={`form-control form-icon-input`}
                                  />
                                  {getIn(touched, relationshipPath) &&
                                    getIn(errors, relationshipPath) && (
                                      <Form.Control.Feedback type="invalid">
                                        {getIn(errors, relationshipPath)}
                                      </Form.Control.Feedback>
                                    )}
                                </FloatingLabel>
                              </Col>

                              <Col md={6}>
                                <FloatingLabel
                                  className="mb-2"
                                  label={t('phone')}
                                >
                                  <Form.Control
                                    disabled={isView}
                                    id={phone1Path}
                                    name={phone1Path}
                                    value={data.phone_1 || ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={Boolean(
                                      getIn(touched, phone1Path) &&
                                        getIn(errors, phone1Path)
                                    )}
                                    className={`form-control form-icon-input`}
                                  />
                                  {getIn(touched, phone1Path) &&
                                    getIn(errors, phone1Path) && (
                                      <Form.Control.Feedback type="invalid">
                                        {getIn(errors, phone1Path)}
                                      </Form.Control.Feedback>
                                    )}
                                </FloatingLabel>
                              </Col>

                              <Col md={6}>
                                <FloatingLabel
                                  className="mb-2"
                                  label={t('alternative_phone')}
                                >
                                  <Form.Control
                                    disabled={isView}
                                    id={phone2Path}
                                    name={phone2Path}
                                    value={data.phone_2 || ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={Boolean(
                                      getIn(touched, phone2Path) &&
                                        getIn(errors, phone2Path)
                                    )}
                                    className={`form-control form-icon-input`}
                                  />
                                  {getIn(touched, phone2Path) &&
                                    getIn(errors, phone2Path) && (
                                      <Form.Control.Feedback type="invalid">
                                        {getIn(errors, phone2Path)}
                                      </Form.Control.Feedback>
                                    )}
                                </FloatingLabel>
                              </Col>
                            </Row>

                            <div className="d-flex justify-content-end mt-3">
                              <Button
                                variant="phoenix-danger"
                                onClick={() => remove(index)}
                                disabled={
                                  values?.emergency_contact?.length === 1
                                }
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
                          hidden={values?.emergency_contact?.length === 2}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                          <span className="ms-1">{t('add_contact')}</span>
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

export default EmployeeEmergencyContactForm;
