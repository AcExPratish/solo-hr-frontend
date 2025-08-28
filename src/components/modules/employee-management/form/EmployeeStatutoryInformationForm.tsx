import React from 'react';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { TModalProps } from '@/types/modules';
import ModalForm from '@/components/common/custom/ModalForm';
import { TEmployee } from '@/types/modules/employee-management/employee';
import { EmployeeBankInformationSchema } from '@/validation/employee-management/EmployeeSchema';
import EmployeeImageInformation from '../common/EmployeeImageInformation';
import { statutoryInformationOptions } from '@/data';

export interface EmployeeStatutoryInformationFormProps {
  formData: TEmployee;
  onSubmit: (data: TEmployee) => void;
  onClose: () => void;
  modal: TModalProps;
  loading?: boolean;
}

const EmployeeStatutoryInformationForm = ({
  formData: initialValues,
  modal,
  onSubmit,
  onClose,
  loading
}: EmployeeStatutoryInformationFormProps) => {
  // React Hooks
  const { t } = useTranslation();

  // Use States
  const isView = modal.type === 'view';

  // On Submit
  const handleOnSubmit = async (values: TEmployee) => {
    const { id, statutory_information } = values;
    onSubmit({
      id,
      statutory_information,
      form_type: 'statutory_information'
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
          title={t('statutory_information')}
          disabled={isView || loading}
          size="lg"
        >
          <Form noValidate className="d-flex flex-column gap-4">
            {statutoryInformationOptions?.map((item, index: number) => (
              <EmployeeImageInformation
                key={index}
                title={item.labelKey}
                name={`statutory_information.${item.value}`}
                isView={isView}
              />
            ))}
          </Form>
        </ModalForm>
      )}
    </Formik>
  );
};

export default EmployeeStatutoryInformationForm;
