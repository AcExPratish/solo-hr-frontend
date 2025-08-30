import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { TUser } from '@/types/modules/user-management/user';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TModalProps, TReactOption } from '@/types/modules';
import {
  UserCreateSchema,
  UserUpdateSchema
} from '@/validation/user-management/UserSchema';
import ModalForm from '@/components/common/custom/ModalForm';
import useRoleHook from '@/hooks/modules/user-management/useRoleHook';
import ReactGroupSelect from '@/components/base/ReactGroupSelect';
import { TRole } from '@/types/modules/user-management/role';

export interface UserFormProps {
  formData: TUser;
  onSubmit: (data: TUser) => void;
  onClose: () => void;
  modal: TModalProps;
  loading?: boolean;
}

export interface TUserForm extends TUser {
  roleOptions?: TReactOption[];
}

const UserForm = ({
  formData,
  modal,
  onSubmit,
  onClose,
  loading
}: UserFormProps) => {
  // React Hooks
  const { t } = useTranslation();

  // Custom Hooks
  const { roles } = useRoleHook();

  // Use States
  const isView = modal.type === 'view';
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [roleOption, setRoleOption] = React.useState<TReactOption[]>([]);
  const initialValues = React.useMemo<TUserForm>(() => {
    let roleOptions: TReactOption[] = [];

    roleOptions =
      formData?.roles?.map((data: TRole) => ({
        label: data?.name || '',
        value: data?.id || ''
      })) || [];

    return {
      ...formData,
      roleOptions
    };
  }, [formData, modal]);

  // Handlers
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // On Submit
  const handleOnSubmit = async (values: TUserForm) => {
    const roleIds =
      values?.roleOptions?.map((role: TReactOption) => role?.value) || [];

    const tempValues: TUser = {
      ...values,
      roles: roleIds as string[]
    };

    if (values.password && values.password.trim() !== '') {
      tempValues.password = values?.password;
    } else {
      delete tempValues.password;
    }

    onSubmit(tempValues);
  };

  React.useEffect(() => {
    setRoleOption(
      roles?.map((data: TRole) => ({
        label: data?.name || '',
        value: data?.id || ''
      })) || []
    );
  }, [roles]);

  return (
    <Formik
      key={modal.show ? 'open' : 'closed'}
      initialValues={initialValues}
      enableReinitialize
      validationSchema={
        modal.type === 'add' ? UserCreateSchema : UserUpdateSchema
      }
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
        setFieldValue,
        setFieldTouched
      }) => (
        <ModalForm
          modal={modal}
          onClose={() => {
            resetForm();
            onClose();
          }}
          onSubmit={handleSubmit}
          type={modal?.type}
          title={t('user')}
          disabled={isView || loading}
          size="lg"
        >
          <Form noValidate className="d-flex flex-column">
            <Row className="g-2">
              <Col xs={12} md={4}>
                <FloatingLabel label={t('first_name')}>
                  <Form.Control
                    disabled={isView}
                    id="first_name"
                    type="text"
                    name="first_name"
                    placeholder={t('first_name')}
                    className={`form-control form-icon-input ${
                      touched.first_name && errors.first_name
                        ? 'is-invalid'
                        : ''
                    }`}
                    value={values.first_name || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {touched.first_name && errors.first_name && (
                    <Form.Control.Feedback type="invalid">
                      {errors.first_name}
                    </Form.Control.Feedback>
                  )}
                </FloatingLabel>
              </Col>

              <Col xs={12} md={4}>
                <FloatingLabel label={t('middle_name')}>
                  <Form.Control
                    disabled={isView}
                    id="middle_name"
                    type="text"
                    name="middle_name"
                    placeholder={t('middle_name')}
                    className={`form-control form-icon-input ${
                      touched.middle_name && errors.middle_name
                        ? 'is-invalid'
                        : ''
                    }`}
                    value={values.middle_name || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {touched.middle_name && errors.middle_name && (
                    <Form.Control.Feedback type="invalid">
                      {errors.middle_name}
                    </Form.Control.Feedback>
                  )}
                </FloatingLabel>
              </Col>

              <Col xs={12} md={4}>
                <FloatingLabel label={t('last_name')}>
                  <Form.Control
                    disabled={isView}
                    id="last_name"
                    type="text"
                    name="last_name"
                    placeholder={t('last_name')}
                    className={`form-control form-icon-input ${
                      touched.last_name && errors.last_name ? 'is-invalid' : ''
                    }`}
                    value={values.last_name || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {touched.last_name && errors.last_name && (
                    <Form.Control.Feedback type="invalid">
                      {errors.last_name}
                    </Form.Control.Feedback>
                  )}
                </FloatingLabel>
              </Col>

              <Col xs={12}>
                <FloatingLabel label={t('email')}>
                  <Form.Control
                    disabled={isView}
                    id="email"
                    type="email"
                    name="email"
                    placeholder={t('email')}
                    className={`form-control form-icon-input ${
                      touched.email && errors.email ? 'is-invalid' : ''
                    }`}
                    value={values.email || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {touched.email && errors.email && (
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  )}
                </FloatingLabel>
              </Col>

              <Col xs={12}>
                <FloatingLabel label={t('phone')}>
                  <Form.Control
                    disabled={isView}
                    id="phone"
                    type="phone"
                    name="phone"
                    placeholder={t('phone')}
                    className={`form-control form-icon-input ${
                      touched.phone && errors.phone ? 'is-invalid' : ''
                    }`}
                    value={values.phone || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {touched.phone && errors.phone && (
                    <Form.Control.Feedback type="invalid">
                      {errors.phone}
                    </Form.Control.Feedback>
                  )}
                </FloatingLabel>
              </Col>

              {!isView && (
                <Col xs={12}>
                  <FloatingLabel label={t('password')}>
                    <Form.Control
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      className={`form-control form-icon-input ${
                        touched.password && errors.password ? 'is-invalid' : ''
                      }`}
                      placeholder={t('password')}
                      value={values.password || ''}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.password && (
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    )}

                    <FontAwesomeIcon
                      onClick={handleClickShowPassword}
                      style={{ position: 'absolute', right: '2%', top: '50%' }}
                      icon={showPassword ? faEye : faEyeSlash}
                      className="text-body fs-9 form-icon"
                    />
                  </FloatingLabel>
                </Col>
              )}

              <Col xs={12} className="mt-0">
                <Form.Group>
                  <Form.Label htmlFor="roleOptions" className="ps-0">
                    {t('role')}
                  </Form.Label>
                  <ReactGroupSelect
                    isDisabled={isView}
                    options={roleOption}
                    isMulti
                    name="roleOptions"
                    value={values.roleOptions}
                    onBlur={() => setFieldTouched('roleOptions', true)}
                    onChange={options => setFieldValue('roleOptions', options)}
                    placeholder={`${t('select')} ${t('role')} ....`}
                  />
                  {touched.roleOptions && errors.roleOptions && (
                    <small className="text-danger"> {errors.roleOptions}</small>
                  )}
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </ModalForm>
      )}
    </Formik>
  );
};

export default UserForm;
