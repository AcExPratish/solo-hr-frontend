import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { TModalProps, TReactOption } from '@/types/modules';
import ModalForm from '@/components/common/custom/ModalForm';
import { Formik, getIn } from 'formik';
import { formatDateForInput } from '@/helpers/date';
import { LeaveSchema } from '@/validation/employee-management/LeaveSchema';
import ReactGroupSelect from '@/components/base/ReactGroupSelect';
import { TLeave } from '@/types/modules/employee-management/leave';
import dayjs from 'dayjs';
import useLeaveTypeHook from '@/hooks/modules/employee-management/useLeaveTypeHook';

export interface LeaveFormProps {
  formData: TLeave;
  onSubmit: (data: TLeave) => void;
  onClose: () => void;
  modal: TModalProps;
  loading?: boolean;
}

const LeaveForm = ({
  formData,
  modal,
  onSubmit,
  onClose,
  loading
}: LeaveFormProps) => {
  // React Hooks
  const { t } = useTranslation();
  const { leaveTypes } = useLeaveTypeHook();

  const leaveTypeOptions = leaveTypes?.map(data => {
    return { label: data?.name, value: data?.id };
  });

  // Use States
  const isView = modal.type === 'view';
  const initialValues = React.useMemo<TLeave>(() => {
    return {
      ...formData
    };
  }, [formData, modal]);

  // On Submit
  const handleOnSubmit = async (values: TLeave) => {
    onSubmit(values);
  };

  return (
    <Formik
      key={modal.show ? 'open' : 'closed'}
      initialValues={initialValues}
      enableReinitialize
      validationSchema={LeaveSchema}
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
        setFieldTouched,
        setFieldValue
      }) => {
        React.useEffect(() => {
          const fromRaw = getIn(values, 'from_date');
          const toRaw = getIn(values, 'to_date');

          if (fromRaw && toRaw) {
            const from = dayjs(fromRaw);
            const to = dayjs(toRaw);
            if (from.isValid() && to.isValid()) {
              const diff = to.diff(from, 'day') + 1;
              setFieldValue('total_days', diff >= 0 ? diff : 0, false);
            } else {
              setFieldValue('total_days', '', false);
            }
          } else {
            setFieldValue('total_days', '', false);
          }
        }, [values.from_date, values.to_date]);

        return (
          <ModalForm
            modal={modal}
            onClose={() => {
              resetForm();
              onClose();
            }}
            onSubmit={handleSubmit}
            type={modal?.type}
            title={t('leave')}
            disabled={isView || loading}
            size="lg"
          >
            <Form noValidate className="d-flex flex-column">
              <Row className="g-2">
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label htmlFor="status" className="ps-0">
                      {t('leave_type')}
                    </Form.Label>
                    <ReactGroupSelect
                      isDisabled={isView}
                      options={leaveTypeOptions}
                      name="leave_type_id"
                      value={
                        leaveTypeOptions?.find(
                          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                          //@ts-expect-error
                          (option: TReactOption) =>
                            option?.value === values?.leave_type_id
                        ) ?? null
                      }
                      onBlur={() => setFieldTouched('leave_type_id', true)}
                      onChange={option =>
                        setFieldValue(
                          'leave_type_id',
                          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                          //@ts-expect-error
                          option?.value
                        )
                      }
                      placeholder={`${t('select')} ${t('leave_type')} ....`}
                    />
                    {getIn(touched, 'leave_type_id') &&
                      getIn(errors, 'leave_type_id') && (
                        <small className="text-danger">
                          {getIn(errors, 'leave_type_id')}
                        </small>
                      )}
                  </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                  <FloatingLabel label={t('from')}>
                    <Form.Control
                      disabled={isView}
                      id="from_date"
                      type="date"
                      name="from_date"
                      placeholder={t('from_date')}
                      className={`form-control form-icon-input`}
                      isInvalid={Boolean(touched.from_date && errors.from_date)}
                      value={
                        formatDateForInput(getIn(values, 'from_date')) || ''
                      }
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {getIn(touched, 'from_date') &&
                      getIn(errors, 'from_date') && (
                        <Form.Control.Feedback type="invalid">
                          {getIn(errors, 'from_date')}
                        </Form.Control.Feedback>
                      )}
                  </FloatingLabel>
                </Col>

                <Col xs={12} md={6}>
                  <FloatingLabel label={t('to')}>
                    <Form.Control
                      disabled={!getIn(values, 'from_date') || isView}
                      id="to_date"
                      type="date"
                      name="to_date"
                      placeholder={t('to_date')}
                      className={`form-control form-icon-input`}
                      isInvalid={Boolean(touched.to_date && errors.to_date)}
                      value={formatDateForInput(getIn(values, 'to_date')) || ''}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {getIn(touched, 'to_date') && getIn(errors, 'to_date') && (
                      <Form.Control.Feedback type="invalid">
                        {getIn(errors, 'to_date')}
                      </Form.Control.Feedback>
                    )}
                  </FloatingLabel>
                </Col>

                <Col xs={12} md={6}>
                  <FloatingLabel label={t('no_of_days')}>
                    <Form.Control
                      disabled
                      id="total_days"
                      type="number"
                      name="total_days"
                      placeholder={t('total_days')}
                      className={`form-control form-icon-input`}
                      isInvalid={Boolean(
                        touched.total_days && errors.total_days
                      )}
                      value={getIn(values, 'total_days')}
                      onBlur={handleBlur}
                    />
                    {getIn(touched, 'total_days') &&
                      getIn(errors, 'total_days') && (
                        <Form.Control.Feedback type="invalid">
                          {getIn(errors, 'total_days')}
                        </Form.Control.Feedback>
                      )}
                  </FloatingLabel>
                </Col>

                <Col xs={12}>
                  <FloatingLabel label={t('reason')}>
                    <Form.Control
                      disabled={isView}
                      id="reason"
                      as="textarea"
                      type="text"
                      name="reason"
                      placeholder={t('reason')}
                      className={`form-control form-icon-input`}
                      isInvalid={Boolean(touched.reason && errors.reason)}
                      value={getIn(values, 'reason') || ''}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      style={{ height: '150px', resize: 'none' }}
                    />
                    {getIn(touched, 'reason') && getIn(errors, 'reason') && (
                      <Form.Control.Feedback type="invalid">
                        {getIn(errors, 'reason')}
                      </Form.Control.Feedback>
                    )}
                  </FloatingLabel>
                </Col>
              </Row>
            </Form>
          </ModalForm>
        );
      }}
    </Formik>
  );
};

export default LeaveForm;
