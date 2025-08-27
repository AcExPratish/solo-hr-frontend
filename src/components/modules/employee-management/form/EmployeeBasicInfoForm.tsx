import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Formik, getIn } from 'formik';
import { TModalProps, TReactOption } from '@/types/modules';
import ModalForm from '@/components/common/custom/ModalForm';
import { formatDateForInput } from '@/helpers/date';
import { TEmployee } from '@/types/modules/employee-management/employee';
import { EmployeeBasicInfoSchema } from '@/validation/employee-management/EmployeeSchema';
import ReactGroupSelect from '@/components/base/ReactGroupSelect';
import { genderOptions } from '@/data';
import CustomAvatarHandler from '@/components/common/custom/CustomAvatarHandler';
import { isImageFile } from '@/helpers/utils';

export interface EmployeeBasicInfoFormProps {
  formData: TEmployee;
  onSubmit: (data: TEmployee) => void;
  onClose: () => void;
  modal: TModalProps;
  loading?: boolean;
}

const EmployeeBasicInfoForm = ({
  formData: initialValues,
  modal,
  onSubmit,
  onClose,
  loading
}: EmployeeBasicInfoFormProps) => {
  // React Hooks
  const { t } = useTranslation();

  // Use States
  const isView = modal.type === 'view';

  // On Submit
  const handleOnSubmit = async (values: TEmployee) => {
    onSubmit({ ...values, form_type: 'basic_info' });
  };

  return (
    <Formik
      key={modal.show ? 'open' : 'closed'}
      initialValues={initialValues}
      enableReinitialize
      validationSchema={EmployeeBasicInfoSchema}
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
        setFieldTouched,
        validateField,
        setFieldError
      }) => {
        const handleImageChange = async (file: File) => {
          await setFieldValue('avatar', file, false);
          setFieldValue('avatar', file);
          await validateField('avatar');
        };

        const handleImageDelete = async () => {
          await setFieldValue('avatar', null, false);
          setFieldTouched('avatar', false);
          setFieldError('avatar', undefined);
        };

        return (
          <ModalForm
            modal={modal}
            onClose={() => {
              resetForm();
              onClose();
            }}
            onSubmit={handleSubmit}
            type={modal.type}
            title={t('basic_information')}
            disabled={isView || loading}
            size="lg"
          >
            <Form noValidate className="d-flex flex-column">
              <Row className="g-2">
                <Col xs={12}>
                  <CustomAvatarHandler
                    label={t('upload_profile_image')}
                    currentImage={values?.avatar ?? null}
                    onImageChange={handleImageChange}
                    onImageDelete={handleImageDelete}
                    isImageFile={isImageFile}
                    showDeleteButton={true}
                    fieldName="avatar"
                    errors={errors}
                    touched={touched}
                    onBlur={() => setFieldTouched('avatar', true)}
                  />
                </Col>

                <Col xs={12} md={4}>
                  <FloatingLabel label={t('first_name')}>
                    <Form.Control
                      disabled={isView}
                      id="first_name"
                      type="text"
                      name="first_name"
                      placeholder={t('first_name')}
                      className={`form-control form-icon-input`}
                      value={values.first_name || ''}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isInvalid={Boolean(
                        getIn(touched, 'first_name') &&
                          getIn(errors, 'first_name')
                      )}
                    />
                    {getIn(touched, 'first_name') &&
                      getIn(errors, 'first_name') && (
                        <Form.Control.Feedback type="invalid">
                          {getIn(errors, 'first_name')}
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
                      className={`form-control form-icon-input`}
                      value={values.middle_name || ''}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isInvalid={Boolean(
                        getIn(touched, 'middle_name') &&
                          getIn(errors, 'middle_name')
                      )}
                    />
                    {getIn(touched, 'middle_name') &&
                      getIn(errors, 'middle_name') && (
                        <Form.Control.Feedback type="invalid">
                          {getIn(errors, 'middle_name')}
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
                      className={`form-control form-icon-input`}
                      value={values.last_name || ''}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isInvalid={Boolean(
                        getIn(touched, 'last_name') &&
                          getIn(errors, 'last_name')
                      )}
                    />
                    {getIn(touched, 'last_name') &&
                      getIn(errors, 'last_name') && (
                        <Form.Control.Feedback type="invalid">
                          {getIn(errors, 'last_name')}
                        </Form.Control.Feedback>
                      )}
                  </FloatingLabel>
                </Col>

                <Col xs={12}>
                  <FloatingLabel label={t('username')}>
                    <Form.Control
                      disabled={isView}
                      id="username"
                      type="text"
                      name="username"
                      placeholder={t('username')}
                      className={`form-control form-icon-input`}
                      value={values.username || ''}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isInvalid={Boolean(
                        getIn(touched, 'username') && getIn(errors, 'username')
                      )}
                    />
                    {getIn(touched, 'username') &&
                      getIn(errors, 'username') && (
                        <Form.Control.Feedback type="invalid">
                          {getIn(errors, 'username')}
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
                      className={`form-control form-icon-input`}
                      value={values.email || ''}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isInvalid={Boolean(
                        getIn(touched, 'email') && getIn(errors, 'email')
                      )}
                    />
                    {getIn(touched, 'email') && getIn(errors, 'email') && (
                      <Form.Control.Feedback type="invalid">
                        {getIn(errors, 'email')}
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
                      className={`form-control form-icon-input`}
                      value={values.phone || ''}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isInvalid={Boolean(
                        getIn(touched, 'phone') && getIn(errors, 'phone')
                      )}
                    />
                    {getIn(touched, 'phone') && getIn(errors, 'phone') && (
                      <Form.Control.Feedback type="invalid">
                        {getIn(errors, 'phone')}
                      </Form.Control.Feedback>
                    )}
                  </FloatingLabel>
                </Col>

                <Col xs={12}>
                  <Form.Group>
                    <Form.Label htmlFor="genderOptions" className="ps-0">
                      {t('gender')}
                    </Form.Label>
                    <ReactGroupSelect
                      isDisabled={isView}
                      options={genderOptions}
                      name="basic_information.gender"
                      value={
                        genderOptions?.find(
                          (option: TReactOption) =>
                            option?.value === values?.basic_information?.gender
                        ) ?? null
                      }
                      onBlur={() =>
                        setFieldTouched('basic_information.gender', true)
                      }
                      onChange={option =>
                        setFieldValue(
                          'basic_information.gender',
                          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                          //@ts-expect-error
                          option?.value
                        )
                      }
                      placeholder={`${t('select')} ${t(
                        'gender'
                      ).toLowerCase()} ....`}
                    />
                    {getIn(touched, 'basic_information.gender') &&
                      getIn(errors, 'basic_information.gender') && (
                        <small className="text-danger">
                          {getIn(errors, 'basic_information.gender')}
                        </small>
                      )}
                  </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                  <FloatingLabel label={t('date_of_birth')}>
                    <Form.Control
                      disabled={isView}
                      id="basic_information.date_of_birth"
                      type="date"
                      name="basic_information.date_of_birth"
                      placeholder={t('date_of_birth')}
                      className={`form-control form-icon-input`}
                      value={
                        formatDateForInput(
                          values?.basic_information?.date_of_birth
                        ) || ''
                      }
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isInvalid={Boolean(
                        getIn(touched, 'basic_information.date_of_birth') &&
                          getIn(errors, 'basic_information.date_of_birth')
                      )}
                    />
                    {getIn(touched, 'basic_information.date_of_birth') &&
                      getIn(errors, 'basic_information.date_of_birth') && (
                        <Form.Control.Feedback type="invalid">
                          {getIn(errors, 'basic_information.date_of_birth')}
                        </Form.Control.Feedback>
                      )}
                  </FloatingLabel>
                </Col>

                <Col xs={12} md={6}>
                  <FloatingLabel label={t('joining_date')}>
                    <Form.Control
                      disabled={isView}
                      id="basic_information.joining_date"
                      type="date"
                      name="basic_information.joining_date"
                      placeholder={t('joining_date')}
                      className={`form-control form-icon-input`}
                      value={
                        formatDateForInput(
                          values?.basic_information?.joining_date
                        ) || ''
                      }
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isInvalid={Boolean(
                        getIn(touched, 'basic_information.joining_date') &&
                          getIn(errors, 'basic_information.joining_date')
                      )}
                    />
                    {getIn(touched, 'basic_information.joining_date') &&
                      getIn(errors, 'basic_information.joining_date') && (
                        <Form.Control.Feedback type="invalid">
                          {getIn(errors, 'basic_information.joining_date')}
                        </Form.Control.Feedback>
                      )}
                  </FloatingLabel>
                </Col>

                <hr className="my-4" />

                {/* Address */}
                <Col xs={12}>
                  <h5>{t('address')}</h5>
                </Col>

                <Col xs={12} md={4}>
                  <FloatingLabel label={t('province')}>
                    <Form.Control
                      disabled={isView}
                      id="basic_information.province"
                      type="text"
                      name="basic_information.province"
                      placeholder={t('province')}
                      className={`form-control form-icon-input`}
                      value={values?.basic_information?.province || ''}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isInvalid={Boolean(
                        getIn(touched, 'basic_information.province') &&
                          getIn(errors, 'basic_information.province')
                      )}
                    />
                    {getIn(touched, 'basic_information.province') &&
                      getIn(errors, 'basic_information.province') && (
                        <Form.Control.Feedback type="invalid">
                          {getIn(errors, 'basic_information.province')}
                        </Form.Control.Feedback>
                      )}
                  </FloatingLabel>
                </Col>

                <Col xs={12} md={4}>
                  <FloatingLabel label={t('district')}>
                    <Form.Control
                      disabled={isView}
                      id="basic_information.district"
                      type="text"
                      name="basic_information.district"
                      placeholder={t('district')}
                      className={`form-control form-icon-input`}
                      value={values?.basic_information?.district || ''}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isInvalid={Boolean(
                        getIn(touched, 'basic_information.district') &&
                          getIn(errors, 'basic_information.district')
                      )}
                    />
                    {getIn(touched, 'basic_information.district') &&
                      getIn(errors, 'basic_information.district') && (
                        <Form.Control.Feedback type="invalid">
                          {getIn(errors, 'basic_information.district')}
                        </Form.Control.Feedback>
                      )}
                  </FloatingLabel>
                </Col>

                <Col xs={12} md={4}>
                  <FloatingLabel label={t('city')}>
                    <Form.Control
                      disabled={isView}
                      id="basic_information.city"
                      type="text"
                      name="basic_information.city"
                      placeholder={t('city')}
                      className={`form-control form-icon-input`}
                      value={values?.basic_information?.city || ''}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isInvalid={Boolean(
                        getIn(touched, 'basic_information.city') &&
                          getIn(errors, 'basic_information.city')
                      )}
                    />
                    {getIn(touched, 'basic_information.city') &&
                      getIn(errors, 'basic_information.city') && (
                        <Form.Control.Feedback type="invalid">
                          {getIn(errors, 'basic_information.city')}
                        </Form.Control.Feedback>
                      )}
                  </FloatingLabel>
                </Col>

                <Col xs={12}>
                  <FloatingLabel label={t('address')}>
                    <Form.Control
                      disabled={isView}
                      id="basic_information.address"
                      type="text"
                      name="basic_information.address"
                      placeholder={t('address')}
                      className={`form-control form-icon-input`}
                      value={values?.basic_information?.address || ''}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isInvalid={Boolean(
                        getIn(touched, 'basic_information.address') &&
                          getIn(errors, 'basic_information.address')
                      )}
                    />
                    {getIn(touched, 'basic_information.address') &&
                      getIn(errors, 'basic_information.address') && (
                        <Form.Control.Feedback type="invalid">
                          {getIn(errors, 'basic_information.address')}
                        </Form.Control.Feedback>
                      )}
                  </FloatingLabel>
                </Col>

                <Col xs={12} md={6}>
                  <FloatingLabel label={t('zip_code')}>
                    <Form.Control
                      disabled={isView}
                      id="basic_information.zip_code"
                      type="text"
                      name="basic_information.zip_code"
                      placeholder={t('zip_code')}
                      className={`form-control form-icon-input`}
                      value={values?.basic_information?.zip_code || ''}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isInvalid={Boolean(
                        getIn(touched, 'basic_information.zip_code') &&
                          getIn(errors, 'basic_information.zip_code')
                      )}
                    />
                    {getIn(touched, 'basic_information.zip_code') &&
                      getIn(errors, 'basic_information.zip_code') && (
                        <Form.Control.Feedback type="invalid">
                          {getIn(errors, 'basic_information.zip_code')}
                        </Form.Control.Feedback>
                      )}
                  </FloatingLabel>
                </Col>

                <Col xs={12} md={6}>
                  <FloatingLabel label={t('postal_code')}>
                    <Form.Control
                      disabled={isView}
                      id="basic_information.postal_code"
                      type="text"
                      name="basic_information.postal_code"
                      placeholder={t('postal_code')}
                      className={`form-control form-icon-input`}
                      value={values?.basic_information?.postal_code || ''}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isInvalid={Boolean(
                        getIn(touched, 'basic_information.postal_code') &&
                          getIn(errors, 'basic_information.postal_code')
                      )}
                    />
                    {getIn(touched, 'basic_information.postal_code') &&
                      getIn(errors, 'basic_information.postal_code') && (
                        <Form.Control.Feedback type="invalid">
                          {getIn(errors, 'basic_information.postal_code')}
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

export default EmployeeBasicInfoForm;
