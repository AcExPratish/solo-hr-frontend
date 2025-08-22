import { Formik } from 'formik';
import React from 'react';
import { Button, Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const EmployeeForm = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Formik initialValues={{}} enableReinitialize onSubmit={() => {}}>
        {() => (
          <Card className="shadow-sm">
            <Card.Header className="d-flex align-items-center justify-content-between">
              <span className="fw-bolder mb-0 fs-8 text-success">
                {t('account_creation')}
              </span>
            </Card.Header>

            <Card.Body>
              <Form noValidate onSubmit={() => {}}>
                <Row className="g-3">
                  <Col md={4} sm={12}>
                    <FloatingLabel label={t('first_name')}>
                      <Form.Control
                        id="first_name"
                        type="text"
                        name="first_name"
                      />
                    </FloatingLabel>
                  </Col>

                  <Col md={4} sm={12}>
                    <FloatingLabel label={t('middle_name')}>
                      <Form.Control
                        id="middle_name"
                        type="text"
                        name="middle_name"
                        placeholder={t('middle_name')}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col md={4} sm={12}>
                    <FloatingLabel label={t('last_name')}>
                      <Form.Control
                        id="last_name"
                        type="text"
                        name="last_name"
                        placeholder={t('last_name')}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col md={4} sm={12}>
                    <FloatingLabel label={t('username')}>
                      <Form.Control
                        id="username"
                        type="text"
                        name="username"
                        placeholder={t('username')}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col md={4} sm={12}>
                    <FloatingLabel label={t('email')}>
                      <Form.Control
                        id="email"
                        type="email"
                        name="email"
                        placeholder={t('email')}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col md={4} sm={12}>
                    <FloatingLabel label={t('date_of_birth')}>
                      <Form.Control
                        id="date_of_birth"
                        type="date"
                        name="date_of_birth"
                        placeholder={t('date_of_birth')}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col md={4} sm={12}>
                    <FloatingLabel label={t('phone')}>
                      <Form.Control
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder={t('phone')}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
              </Form>
            </Card.Body>

            <Card.Footer className="d-flex justify-content-end gap-2">
              <Button variant="danger">{t('reset')}</Button>
              <Button variant="primary">{t('save')}</Button>
            </Card.Footer>
          </Card>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default EmployeeForm;
