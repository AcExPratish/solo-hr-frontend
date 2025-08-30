import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { TModalProps } from '@/types/modules';
import ModalForm from '@/components/common/custom/ModalForm';
import { THoliday } from '@/types/modules/employee-management/holiday';
import { HolidaySchema } from '@/validation/employee-management/HolidaySchema';
import { Formik, getIn } from 'formik';
import { formatDateForInput } from '@/helpers/date';

export interface HolidayFormProps {
  formData: THoliday;
  onSubmit: (data: THoliday) => void;
  onClose: () => void;
  modal: TModalProps;
  loading?: boolean;
}

const HolidayForm = ({
  formData,
  modal,
  onSubmit,
  onClose,
  loading
}: HolidayFormProps) => {
  // React Hooks
  const { t } = useTranslation();

  // Use States
  const isView = modal.type === 'view';
  const initialValues = React.useMemo<THoliday>(() => {
    return {
      ...formData
    };
  }, [formData, modal]);

  // On Submit
  const handleOnSubmit = async (values: THoliday) => {
    onSubmit(values);
  };

  return (
    <Formik
      key={modal.show ? 'open' : 'closed'}
      initialValues={initialValues}
      enableReinitialize
      validationSchema={HolidaySchema}
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
          type={modal?.type}
          title={t('holiday')}
          disabled={isView || loading}
          size="lg"
        >
          <Form noValidate className="d-flex flex-column">
            <Row className="g-2">
              <Col xs={12}>
                <FloatingLabel label={t('title')}>
                  <Form.Control
                    disabled={isView}
                    id="title"
                    type="text"
                    name="title"
                    placeholder={t('title')}
                    className={`form-control form-icon-input`}
                    isInvalid={Boolean(touched.title && errors.title)}
                    value={getIn(values, 'title') || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {getIn(touched, 'title') && getIn(errors, 'title') && (
                    <Form.Control.Feedback type="invalid">
                      {getIn(errors, 'title')}
                    </Form.Control.Feedback>
                  )}
                </FloatingLabel>
              </Col>

              <Col xs={12}>
                <FloatingLabel label={t('date')}>
                  <Form.Control
                    disabled={isView}
                    id="date"
                    type="date"
                    name="date"
                    placeholder={t('date')}
                    className={`form-control form-icon-input`}
                    isInvalid={Boolean(touched.date && errors.date)}
                    value={formatDateForInput(getIn(values, 'date')) || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {getIn(touched, 'date') && getIn(errors, 'date') && (
                    <Form.Control.Feedback type="invalid">
                      {getIn(errors, 'date')}
                    </Form.Control.Feedback>
                  )}
                </FloatingLabel>
              </Col>

              <Col xs={12}>
                <FloatingLabel label={t('description')}>
                  <Form.Control
                    disabled={isView}
                    id="description"
                    as="textarea"
                    type="text"
                    name="description"
                    placeholder={t('description')}
                    className={`form-control form-icon-input`}
                    isInvalid={Boolean(
                      touched.description && errors.description
                    )}
                    value={getIn(values, 'description') || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    style={{ height: '150px', resize: 'none' }}
                  />
                  {getIn(touched, 'description') &&
                    getIn(errors, 'description') && (
                      <Form.Control.Feedback type="invalid">
                        {getIn(errors, 'description')}
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

export default HolidayForm;
