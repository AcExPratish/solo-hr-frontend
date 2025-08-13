import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { TUser } from '@/types/modules/user-management/user';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TModalProps, TReactOption } from '@/types/modules';
import { UserSchema } from '@/validation/user-management/UserSchema';
import ModalForm from '@/components/common/custom/ModalForm';
import { formatDateForInput } from '@/helpers/date';

export interface UserFormProps {
  formData: TUser;
  onSubmit: (data: TUser) => void;
  onClose: () => void;
  modal: TModalProps;
  loading?: boolean;
}

export interface TUserForm extends TUser {
  roleSelect?: TReactOption | null;
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

  // Use State
  const isView = modal.type === 'view';
  const [showPassword, setShowPassword] = React.useState(false);
  //   const [roleOption, setRoleOption] = React.useState<TReactOption[]>([]);
  //   const initialValues = React.useMemo<TUserForm>(() => {
  //     let roleSelect = null;
  //     const options = [].map(data => {
  //       const option = {
  //         label: data.name,
  //         value: data.id
  //       };
  //       if (formData.user_role?.id == data.id) {
  //         roleSelect = option;
  //       }
  //       return option;
  //     });
  //     setRoleOption(options);

  //     return {
  //       ...formData,
  //       roleSelect
  //     };
  //   }, [formData, roles, modal]);

  // Handlers
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // On Submit
  const handleOnSubmit = async (values: TUserForm) => {
    // const roleId = values.roleSelect?.value as number | null;

    // const tempValues: TUser = {
    //   name: values.name,
    //   email: values.email,
    //   phone: values.phone,
    //   status: values.status,
    //   id: formData.id,
    //   role_id: roleId
    // };
    // if (values.password) {
    //   tempValues.password = values.password;
    // }
    onSubmit(values);
  };

  return (
    <Formik
      key={modal.show ? 'open' : 'closed'}
      initialValues={formData}
      enableReinitialize
      validationSchema={UserSchema}
      onSubmit={handleOnSubmit}
    >
      {({
        isSubmitting,
        values,
        handleBlur,
        handleChange,
        errors,
        touched,
        handleSubmit
      }) => (
        <ModalForm
          modal={modal}
          onClose={onClose}
          onSubmit={handleSubmit}
          type={modal.type}
          title={t('user')}
          disabled={isSubmitting || loading}
          size="lg"
        >
          <Form noValidate className="d-flex flex-column gap-2">
            <FloatingLabel label={t('first_name')}>
              <Form.Control
                disabled={isView}
                id="first_name"
                type="text"
                name="first_name"
                placeholder={t('first_name')}
                className={`form-control form-icon-input ${
                  touched.first_name && errors.first_name ? 'is-invalid' : ''
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

            <FloatingLabel label={t('middle_name')}>
              <Form.Control
                disabled={isView}
                id="middle_name"
                type="text"
                name="middle_name"
                placeholder={t('middle_name')}
                className={`form-control form-icon-input ${
                  touched.middle_name && errors.middle_name ? 'is-invalid' : ''
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

            <FloatingLabel label={t('username')}>
              <Form.Control
                disabled={isView}
                id="username"
                type="text"
                name="username"
                placeholder={t('username')}
                className={`form-control form-icon-input ${
                  touched.username && errors.username ? 'is-invalid' : ''
                }`}
                value={values.username || ''}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {touched.username && errors.username && (
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              )}
            </FloatingLabel>

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

            <FloatingLabel label={t('date_of_birth')}>
              <Form.Control
                disabled={isView}
                id="date_of_birth"
                type="date"
                name="date_of_birth"
                placeholder={t('date_of_birth')}
                className={`form-control form-icon-input ${
                  touched.date_of_birth && errors.date_of_birth
                    ? 'is-invalid'
                    : ''
                }`}
                value={formatDateForInput(values.date_of_birth) || ''}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {touched.date_of_birth && errors.date_of_birth && (
                <Form.Control.Feedback type="invalid">
                  {errors.date_of_birth}
                </Form.Control.Feedback>
              )}
            </FloatingLabel>

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

            {!isView && (
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
                {touched.password && errors.password && (
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
            )}
          </Form>
        </ModalForm>
      )}
    </Formik>
  );
};

export default UserForm;
