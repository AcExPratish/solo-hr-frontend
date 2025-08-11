import React from 'react';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuthHook from '@/hooks/modules/useAuthHook';
import { Formik } from 'formik';
import { TLogin } from '@/types/modules/auth';
import AlertMessage from '@/components/common/AlertMessage';
import { TAlert } from '@/types/modules';
import { useTranslation } from 'react-i18next';
import { SignInSchema } from '@/validation/AuthSchema';
import { toast } from 'react-toastify';

// Initial values
const initialValues: TLogin = {
  email: '',
  password: ''
};

const SignInForm = () => {
  const { t } = useTranslation();
  const { login } = useAuthHook();
  const [alert, setAlert] = React.useState<TAlert | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const savedEmail = localStorage.getItem('rememberedEmail') || '';
  const [rememberMe, setRememberMe] = React.useState<boolean>(!!savedEmail);

  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  const handleOnLoginSubmit = async (values: TLogin) => {
    setLoading(true);

    if (rememberMe) {
      localStorage.setItem('rememberedEmail', values.email || '');
    } else {
      localStorage.removeItem('rememberedEmail');
    }

    login(values)
      .then(() => {
        toast.success(t('message_success_login'));
      })
      .catch(e => {
        if (e?.response?.status == '401') {
          setAlert({
            type: 'ERROR',
            message: e?.response?.data?.message || t('invalid_credentials')
          });
        } else {
          console.error(e);
          setAlert({
            type: 'ERROR',
            message: e?.response?.data?.message || t('message_failed')
          });
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={handleOnLoginSubmit}
      validationSchema={SignInSchema}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          {alert && <AlertMessage type={alert.type} message={alert.message} />}

          <Form.Group className="mb-3 text-start">
            <Form.Label htmlFor="email">{t('email_address')}</Form.Label>
            <div className="form-icon-container">
              <Form.Control
                id="email"
                type="email"
                placeholder="name@example.com"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
                className={`form-control form-icon-input ${
                  touched.email && errors.email ? 'is-invalid' : ''
                }`}
              />
              <FontAwesomeIcon
                icon={faUser}
                className="text-body fs-9 form-icon"
              />

              {touched.email && errors.email && (
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              )}
            </div>
          </Form.Group>

          <Form.Group className="mb-3 text-start">
            <Form.Label htmlFor="password">{t('password')}</Form.Label>
            <div className="form-icon-container">
              <Form.Control
                id="password"
                type="password"
                placeholder={t('password')}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
                className={`form-control form-icon-input ${
                  touched.password && errors.password ? 'is-invalid' : ''
                }`}
              />
              <FontAwesomeIcon
                icon={faKey}
                className="text-body fs-9 form-icon"
              />

              {touched.password && errors.password && (
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              )}
            </div>
          </Form.Group>

          <Row className="flex-between-center mb-7">
            <Col xs="auto">
              <Form.Check type="checkbox" className="mb-0">
                <Form.Check.Input
                  type="checkbox"
                  name="remember_me"
                  id="remember_me"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <Form.Check.Label htmlFor="remember_me" className="mb-0">
                  {t('remember_me')}
                </Form.Check.Label>
              </Form.Check>
            </Col>

            <Col xs="auto">
              <Link to={`/auth/forgot-password`} className="fs-9 fw-semibold">
                {t('forgot_password')}?
              </Link>
            </Col>
          </Row>

          <Button
            variant="primary"
            type="submit"
            className="w-100 mb-3"
            disabled={loading}
          >
            {t('sign_in')}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
