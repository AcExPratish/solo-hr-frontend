import React from 'react';
import Button from 'components/base/Button';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import useAuthHook from '@/hooks/modules/useAuthHook';
import { TAlert } from '@/types/modules';
import { TResetPassword } from '@/types/modules/auth';
import { toast } from 'react-toastify';
import AlertMessage from '@/components/common/AlertMessage';
import { Formik } from 'formik';
import { ResetPasswordSchema } from '@/validation/AuthSchema';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ResetPasswordForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { resetPassword } = useAuthHook();
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [alert, setAlert] = React.useState<TAlert | null>(null);
  const urlParams = new URLSearchParams(window.location.search);

  // Initial values
  const initialValues: TResetPassword = {
    email: urlParams.get('email') || '',
    token: urlParams.get('token') || '',
    new_password: ''
  };

  const handleOnResetPasswordSubmit = async (values: TResetPassword) => {
    // eslint-disable-next-line
    const { confirm_password, ...finalData } = values;
    setLoading(true);
    resetPassword(finalData)
      .then(() => {
        toast.success(t('message_success_reset_password'));
        setTimeout(() => {
          navigate('/auth/sign-in');
        }, 1000);
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
    <div className="text-center mb-6">
      <h4 className="text-body-highlight">{t('reset_new_password')}</h4>
      <p className="text-body-tertiary">
        {t('reset_new_password_description')}
      </p>

      {alert && <AlertMessage type={alert.type} message={alert.message} />}

      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={handleOnResetPasswordSubmit}
        validationSchema={ResetPasswordSchema}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched
        }) => (
          <Form noValidate onSubmit={handleSubmit} className="mt-5">
            <Form.Group className="mb-3 text-start">
              <Form.Label htmlFor="password">{t('password')}</Form.Label>
              <div className="form-icon-container">
                <Form.Control
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder={t('password')}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.new_password}
                  name="new_password"
                  className={`form-control form-icon-input ${
                    touched.new_password && errors.new_password
                      ? 'is-invalid'
                      : ''
                  }`}
                />

                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  className="text-body fs-9 form-icon cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    transitionProperty: 'transform, opacity',
                    transitionDuration: '0.3s',
                    transitionTimingFunction: 'ease',
                    transform: showPassword ? 'scale(1.2)' : 'scale(1)',
                    opacity: showPassword ? 1 : 0.8,
                    display: 'inline-block'
                  }}
                />

                {touched.new_password && errors.new_password && (
                  <Form.Control.Feedback type="invalid">
                    {errors.new_password}
                  </Form.Control.Feedback>
                )}
              </div>
            </Form.Group>

            <Form.Group className="mb-3 text-start">
              <Form.Label htmlFor="confirm_password">
                {t('confirm_password')}
              </Form.Label>
              <div className="form-icon-container">
                <Form.Control
                  id="confirm_password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder={t('confirm_password')}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirm_password}
                  name="confirm_password"
                  className={`form-control form-icon-input ${
                    touched.confirm_password && errors.confirm_password
                      ? 'is-invalid'
                      : ''
                  }`}
                />

                <FontAwesomeIcon
                  icon={showConfirmPassword ? faEye : faEyeSlash}
                  className="text-body fs-9 form-icon cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{
                    transitionProperty: 'transform, opacity',
                    transitionDuration: '0.3s',
                    transitionTimingFunction: 'ease',
                    transform: showConfirmPassword ? 'scale(1.2)' : 'scale(1)',
                    opacity: showConfirmPassword ? 1 : 0.8,
                    display: 'inline-block'
                  }}
                />

                {touched.confirm_password && errors.confirm_password && (
                  <Form.Control.Feedback type="invalid">
                    {errors.confirm_password}
                  </Form.Control.Feedback>
                )}
              </div>
            </Form.Group>

            <Button
              variant="primary"
              className="w-100"
              type="submit"
              disabled={loading}
            >
              {t('set_password')}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResetPasswordForm;
