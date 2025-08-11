import React from 'react';
import Button from 'components/base/Button';
import { Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { TAttendance } from '@/types/modules/attendance';
import Avatar from '@/components/base/Avatar';
import { defaultAvatar } from '@/helpers/common';
import useAuthHook from '@/hooks/modules/useAuthHook';

interface ModalProps {
  attendance: TAttendance;
  show: boolean;
  onSubmit: (values: TAttendance) => void;
  onClose: () => void;
}

const ClockInClockOutModalForm = ({
  attendance,
  show,
  onClose,
  onSubmit
}: ModalProps) => {
  const { t } = useTranslation();
  const { user } = useAuthHook();
  const isClockIn = Boolean(attendance?.clock_in);

  const handleClose = () => {
    onClose();
  };

  const handleOnSubmit = (values: TAttendance) => {
    onSubmit(values);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        className="modal"
        centered
        size="sm"
      >
        <Formik
          initialValues={attendance}
          enableReinitialize
          validationSchema={null}
          onSubmit={handleOnSubmit}
        >
          {({ values, handleChange, handleSubmit }) => (
            <Form noValidate onSubmit={handleSubmit}>
              {/* Header */}
              <Modal.Header className="border-0 ps-4 pe-4 pb-0" closeButton />

              {/* Body */}
              <Modal.Body className="ps-4 pe-4 pt-0 mb-1">
                <Row className="gap-2">
                  <Col
                    xs={12}
                    className="d-flex justify-content-center fw-semibold fs-6"
                  >
                    {!isClockIn ? t('clock_in') : t('clock_out')}
                  </Col>

                  <Col xs={12} className="d-flex justify-content-center">
                    <Avatar
                      src={user?.avatar || defaultAvatar}
                      size="4xl"
                      className="mb-3"
                    />
                  </Col>

                  <Col xs={12}>
                    <Form.Group>
                      <FloatingLabel
                        controlId="floatingTextarea2"
                        label={`${t('notes')}`}
                      >
                        <Form.Control
                          as="textarea"
                          placeholder={t('leave_a_note_here')}
                          style={{ height: '80px' }}
                          name={!isClockIn ? 'in_note' : 'out_note'}
                          value={values[!isClockIn ? 'in_note' : 'out_note']}
                          onChange={handleChange}
                        />
                      </FloatingLabel>
                    </Form.Group>
                  </Col>
                </Row>
              </Modal.Body>

              {/* Footer */}
              <Modal.Footer className="border-0 ps-4 pe-4 pb-4 pt-0">
                <Button
                  variant={!isClockIn ? 'success' : 'danger'}
                  type="submit"
                  className="rounded-pill w-100"
                >
                  {!isClockIn ? t('clock_in') : t('clock_out')}
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default ClockInClockOutModalForm;
