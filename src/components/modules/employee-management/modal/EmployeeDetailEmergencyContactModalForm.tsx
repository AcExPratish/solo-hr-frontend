import React from 'react';
import {
  Modal,
  Form,
  Row,
  Col,
  Stack,
  ModalProps,
  FloatingLabel
} from 'react-bootstrap';
import { Formik, FieldArray } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  TEmployee,
  TEmployeeEmergencyContact
} from '@/types/modules/employee-management/employee';
import { useTranslation } from 'react-i18next';
import { EmergencyContactSchema } from '@/validation/employee-management/EmployeeSchema';
import Button from '@/components/base/Button';

interface EmergencyContactsModalProps {
  modal: ModalProps;
  onClose: () => void;
  onSubmit: (values: TEmployee) => void;
  formData: TEmployee;
}

const emptyContact = (): TEmployeeEmergencyContact => ({
  id: undefined,
  name: '',
  relationship: '',
  phone_1: '',
  phone_2: ''
});

const EmployeeDetailEmergencyContactModalForm = ({
  modal,
  onClose,
  onSubmit,
  formData
}: EmergencyContactsModalProps) => {
  // React Hooks
  const { t } = useTranslation();

  return (
    <Modal size="lg" onHide={onClose} {...modal} backdrop={'static'}>
      <Modal.Header className="border-0 ps-4 pe-4 pb-0" closeButton>
        <Modal.Title>{t('emergency_contact_details')}</Modal.Title>
      </Modal.Header>

      <Formik
        initialValues={formData}
        validationSchema={EmergencyContactSchema}
        onSubmit={values => {
          onSubmit(values);
        }}
        enableReinitialize
      >
        {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Modal.Body className="ps-4 pe-4 pt-0">
              <FieldArray name="emergency_contact">
                {({ push, remove }) => (
                  <div>
                    <div className="d-flex justify-content-end my-2">
                      <Button
                        variant="primary"
                        onClick={() => push(emptyContact())}
                        disabled={values?.emergency_contact?.length === 2}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                        <span className="ms-1">{t('add_contact')}</span>
                      </Button>
                    </div>

                    <Stack gap={4}>
                      {values?.emergency_contact?.map((data, index: number) => {
                        // Formik Validation Paths
                        const namePath = `emergency_contact.${index}.name`;
                        const relationshipPath = `emergency_contact.${index}.relationship`;
                        const phone1Path = `emergency_contact.${index}.phone_1`;
                        const phone2Path = `emergency_contact.${index}.phone_2`;

                        // Formik Error Validation
                        const nameError = (errors as TEmployee)
                          ?.emergency_contact?.[index]?.name;
                        const relationshipError = (errors as TEmployee)
                          ?.emergency_contact?.[index]?.relationship;
                        const phone1Error = (errors as TEmployee)
                          ?.emergency_contact?.[index]?.phone_1;
                        const phone2Error = (errors as TEmployee)
                          ?.emergency_contact?.[index]?.phone_2;

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
                                    id={namePath}
                                    name={namePath}
                                    value={data.name || ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={Boolean(nameError)}
                                    className={`form-control form-icon-input`}
                                  />

                                  {nameError && (
                                    <Form.Control.Feedback type="invalid">
                                      {nameError}
                                    </Form.Control.Feedback>
                                  )}
                                </FloatingLabel>
                              </Col>

                              <Col md={6}>
                                <FloatingLabel
                                  className="mb-2"
                                  label={t('name')}
                                >
                                  <Form.Control
                                    id={relationshipPath}
                                    name={relationshipPath}
                                    value={data.relationship || ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={Boolean(relationshipError)}
                                    className={`form-control form-icon-input`}
                                  />

                                  {relationshipError && (
                                    <Form.Control.Feedback type="invalid">
                                      {relationshipError}
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
                                    id={phone1Path}
                                    name={phone1Path}
                                    value={data.phone_1 || ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={Boolean(phone1Error)}
                                    className={`form-control form-icon-input`}
                                  />

                                  {phone1Error && (
                                    <Form.Control.Feedback type="invalid">
                                      {phone1Error}
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
                                    id={phone2Path}
                                    name={phone2Path}
                                    value={data.phone_2 || ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={Boolean(phone2Error)}
                                    className={`form-control form-icon-input`}
                                  />

                                  {phone2Error && (
                                    <Form.Control.Feedback type="invalid">
                                      {phone2Error}
                                    </Form.Control.Feedback>
                                  )}
                                </FloatingLabel>
                              </Col>
                            </Row>

                            <div className="d-flex justify-content-end mt-3">
                              <Button
                                variant="phoenix-secondary"
                                onClick={() => remove(index)}
                                disabled={
                                  values?.emergency_contact?.length === 1
                                }
                              >
                                <FontAwesomeIcon icon={faTrash} />
                                <span className="ms-1">{t('remove')}</span>
                              </Button>
                            </div>
                          </div>
                        );
                      })}
                    </Stack>
                  </div>
                )}
              </FieldArray>
            </Modal.Body>

            <Modal.Footer className="border-0 ps-4 pe-4 pb-4">
              <Button variant="phoenix-secondary" onClick={onClose}>
                {t('cancel')}
              </Button>
              <Button type="submit" variant="primary">
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

export default EmployeeDetailEmergencyContactModalForm;
