import React from 'react';
import { TEmployee } from '@/types/modules/employee-management/employee';
import { getIn, useFormikContext } from 'formik';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import CustomImageHandler from '@/components/common/custom/CustomImageHandler';
import { isImageFile } from '@/helpers/utils';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import TooltipIconButton from '@/components/common/TooltipIconButton';
import { verificationStatusOptions } from '@/data';
import useFileHook from '@/hooks/modules/useFileHook';
import { toast } from 'react-toastify';

export interface EmployeeImageInformationProps {
  title: string;
  name: string;
  isView: boolean;
}

const EmployeeImageInformation = ({
  title,
  name,
  isView
}: EmployeeImageInformationProps) => {
  const { t } = useTranslation();
  const { uploadFile } = useFileHook();

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    setFieldTouched,
    setFieldValue,
    validateField,
    setFieldError
  } = useFormikContext<TEmployee>();

  const handleImageChange = async (file: File) => {
    await setFieldValue(`${name}.image`, file, false);
    await validateField(`${name}.image`);
    await uploadFile(file, 'employees.documents')
      .then(res => {
        setFieldValue(`${name}.image`, res);
      })
      .catch(e => {
        setFieldValue(`${name}.image`, null);
        toast.error(e?.data?.message || t('message_failed'));
        console.error(e);
      });
  };

  const handleImageDelete = async () => {
    await setFieldValue(`${name}.image`, null, false);
    setFieldTouched(`${name}.image`, false);
    setFieldError(`${name}.image`, undefined);
  };

  return (
    <Row className="g-2">
      <Col
        xs={12}
        className="d-flex align-items-center justify-content-between"
      >
        <h5>{t(title)}</h5>
        <div className="d-flex align-items-center gap-1">
          <TooltipIconButton
            title={
              verificationStatusOptions?.find(
                item =>
                  item?.value === getIn(values, `${name}.verification_status`)
              )?.label ?? ''
            }
            icon={faCheckCircle}
            iconClass={`${verificationStatusOptions?.find(
              item =>
                item?.value === getIn(values, `${name}.verification_status`)
            )?.color} fs-8`}
          />
        </div>
      </Col>

      {/* ID Number */}
      <Col xs={12}>
        <FloatingLabel label={t('id_number')}>
          <Form.Control
            disabled={isView}
            id={`${name}.id_number`}
            type="text"
            name={`${name}.id_number`}
            placeholder={t('id_number')}
            className={`form-control form-icon-input`}
            value={getIn(values, `${name}.id_number`) || ''}
            onBlur={handleBlur}
            onChange={handleChange}
            isInvalid={Boolean(
              getIn(touched, `${name}.id_number`) &&
                getIn(errors, `${name}.id_number`)
            )}
          />
          {getIn(touched, `${name}.id_number`) &&
            getIn(errors, `${name}.id_number`) && (
              <Form.Control.Feedback type="invalid">
                {getIn(errors, `${name}.id_number`)}
              </Form.Control.Feedback>
            )}
        </FloatingLabel>
      </Col>

      {/* Issue Date */}
      <Col xs={12} md={6}>
        <FloatingLabel label={t('issue_date')}>
          <Form.Control
            disabled={isView}
            id={`${name}.issue_date`}
            type="date"
            name={`${name}.issue_date`}
            placeholder={t('issue_date')}
            className={`form-control form-icon-input`}
            value={getIn(values, `${name}.issue_date`) || ''}
            onBlur={handleBlur}
            onChange={handleChange}
            isInvalid={Boolean(
              getIn(touched, `${name}.issue_date`) &&
                getIn(errors, `${name}.issue_date`)
            )}
          />
          {getIn(touched, `${name}.issue_date`) &&
            getIn(errors, `${name}.issue_date`) && (
              <Form.Control.Feedback type="invalid">
                {getIn(errors, `${name}.issue_date`)}
              </Form.Control.Feedback>
            )}
        </FloatingLabel>
      </Col>

      {/* Expiry Date */}
      <Col xs={12} md={6}>
        <FloatingLabel label={t('expiry_date')}>
          <Form.Control
            disabled={isView}
            id={`${name}.expiry_date`}
            type="date"
            name={`${name}.expiry_date`}
            placeholder={t('expiry_date')}
            className={`form-control form-icon-input`}
            value={getIn(values, `${name}.expiry_date`) || ''}
            onBlur={handleBlur}
            onChange={handleChange}
            isInvalid={Boolean(
              getIn(touched, `${name}.expiry_date`) &&
                getIn(errors, `${name}.expiry_date`)
            )}
          />
          {getIn(touched, `${name}.expiry_date`) &&
            getIn(errors, `${name}.expiry_date`) && (
              <Form.Control.Feedback type="invalid">
                {getIn(errors, `${name}.expiry_date`)}
              </Form.Control.Feedback>
            )}
        </FloatingLabel>
      </Col>

      {/* Issuing Authority */}
      <Col xs={12}>
        <FloatingLabel label={t('issuing_authority')}>
          <Form.Control
            disabled={isView}
            id={`${name}.issuing_authority`}
            type="text"
            name={`${name}.issuing_authority`}
            placeholder={t('issuing_authority')}
            className={`form-control form-icon-input`}
            value={getIn(values, `${name}.issuing_authority`) || ''}
            onBlur={handleBlur}
            onChange={handleChange}
            isInvalid={Boolean(
              getIn(touched, `${name}.issuing_authority`) &&
                getIn(errors, `${name}.issuing_authority`)
            )}
          />
          {getIn(touched, `${name}.issuing_authority`) &&
            getIn(errors, `${name}.issuing_authority`) && (
              <Form.Control.Feedback type="invalid">
                {getIn(errors, `${name}.issuing_authority`)}
              </Form.Control.Feedback>
            )}
        </FloatingLabel>
      </Col>

      {/* Image */}
      <Col xs={12}>
        <CustomImageHandler
          label={t('upload_image')}
          currentImage={getIn(values, `${name}.image`) ?? null}
          onImageChange={handleImageChange}
          onImageDelete={handleImageDelete}
          isImageFile={isImageFile}
          showDeleteButton={true}
          fieldName={`${name}.image`}
          errors={errors}
          touched={touched}
          onBlur={() => setFieldTouched(`${name}.image`, true)}
          avatarSize="4xl"
        />
      </Col>
    </Row>
  );
};

export default EmployeeImageInformation;
