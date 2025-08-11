import React from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { TForgotPassword } from 'types/modules/auth';
import { ForgotPasswordSchema } from 'validation/AuthSchema';
import useAuthHook from '@/hooks/modules/useAuthHook';
import { TAlert } from '@/types/modules';
import AlertMessage from '@/components/common/AlertMessage';

// Initial values
const initialValues: TForgotPassword = {
  to: '',
  reset_url: `${process.env.REACT_APP_LINK}/auth/reset-password` || ''
};

const ForgotPasswordForm = () => {
  const { t } = useTranslation();
  const { forgotPassword } = useAuthHook();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [alert, setAlert] = React.useState<TAlert | null>(null);

  const handleOnForgotPasswordSubmit = async (values: TForgotPassword) => {
    setLoading(true);
    forgotPassword(values)
      .then(() => {
        setAlert({
          type: 'SUCCESS',
          message: t('message_success_forgot_password')
        });
      })
      .catch(e => {
        console.error(e);
        setAlert({
          type: 'ERROR',
          message: e?.response?.data?.message || t('message_failed')
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="px-xxl-5">
      <div className="text-center mb-6">
        <h4 className="text-body-highlight">{t('forgot_your_password')}?</h4>
        <p className="text-body-tertiary mb-5">
          {t('forgot_password_description')}
        </p>

        {alert && <AlertMessage type={alert.type} message={alert.message} />}

        <Formik
          initialValues={initialValues}
          enableReinitialize
          onSubmit={handleOnForgotPasswordSubmit}
          validationSchema={ForgotPasswordSchema}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors,
            touched
          }) => (
            <Form
              noValidate
              onSubmit={handleSubmit}
              className="d-flex  align-items-center mb-5"
            >
              <Form.Control
                type="email"
                id="to"
                placeholder={t('email')}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.to}
                name="to"
                className={`flex-1 form-control form-icon-input ${
                  touched.to && errors.to ? 'is-invalid' : ''
                }`}
              />

              {touched.to && errors.to && (
                <Form.Control.Feedback type="invalid">
                  {errors.to}
                </Form.Control.Feedback>
              )}

              <Button
                variant="primary"
                className="ms-2"
                endIcon={
                  <FontAwesomeIcon icon={faChevronRight} className="ms-2" />
                }
                type="submit"
                disabled={loading}
              >
                {t('send')}
              </Button>
            </Form>
          )}
        </Formik>
        <Link to="#" className="fs-9 fw-bold">
          {t('still_having_problems')}?
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
