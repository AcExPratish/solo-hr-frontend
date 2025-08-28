import React from 'react';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { TModalProps } from '@/types/modules';
import ModalForm from '@/components/common/custom/ModalForm';
import { TEmployee } from '@/types/modules/employee-management/employee';
import { EmployeeBankInformationSchema } from '@/validation/employee-management/EmployeeSchema';
import EmployeeImageInformation from '../common/EmployeeImageInformation';
import { supportingDocumentsOptions } from '@/data';

export interface EmployeeSupportingDocumentsFormProps {
  formData: TEmployee;
  onSubmit: (data: TEmployee) => void;
  onClose: () => void;
  modal: TModalProps;
  loading?: boolean;
}

const EmployeeSupportingDocumentsForm = ({
  formData: initialValues,
  modal,
  onSubmit,
  onClose,
  loading
}: EmployeeSupportingDocumentsFormProps) => {
  // React Hooks
  const { t } = useTranslation();

  // Use States
  const isView = modal.type === 'view';

  // On Submit
  const handleOnSubmit = async (values: TEmployee) => {
    const { id, supporting_documents } = values;
    onSubmit({
      id,
      supporting_documents,
      form_type: 'supporting_documents'
    });
  };

  return (
    <Formik
      key={modal.show ? 'open' : 'closed'}
      initialValues={initialValues}
      enableReinitialize
      validationSchema={EmployeeBankInformationSchema}
      onSubmit={handleOnSubmit}
    >
      {({ handleSubmit, resetForm }) => (
        <ModalForm
          modal={modal}
          onClose={() => {
            resetForm();
            onClose();
          }}
          onSubmit={handleSubmit}
          type={modal.type}
          title={t('supporting_documents')}
          disabled={isView || loading}
          size="lg"
        >
          <Form noValidate className="d-flex flex-column gap-4">
            {supportingDocumentsOptions?.map((item, index: number) => (
              <EmployeeImageInformation
                key={index}
                title={item?.labelKey}
                name={`supporting_documents.${item?.value}`}
                isView={isView}
              />
            ))}
          </Form>
        </ModalForm>
      )}
    </Formik>
  );
};

export default EmployeeSupportingDocumentsForm;
