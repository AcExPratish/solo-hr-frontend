import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import EmployeeDetailHeader from '@/components/modules/employee-management/EmployeeDetailHeader';
import { getUserFirstAndLastName } from '@/helpers/utils';
import EmployeeBasicInfoForm from '@/components/modules/employee-management/form/EmployeeBasicInfoForm';
import {
  TEmployee,
  TEmployeeFormType
} from '@/types/modules/employee-management/employee';
import { TLoader, TModalProps } from '@/types/modules';
import { toast } from 'react-toastify';
import useEmployeeHook from '@/hooks/modules/employee-management/useEmployeeHook';
import EmployeeDetailProfile from '@/components/modules/employee-management/EmployeeDetailProfile';
import EmployeeDetailAboutEmployee from '@/components/modules/employee-management/EmployeeDetailAboutEmployee';
import EmployeeDetailBankInformation from '@/components/modules/employee-management/EmployeeDetailBankInformation';
import EmployeeDetailFamilyInformation from '@/components/modules/employee-management/EmployeeDetailFamilyInformation';
import EmployeeDetailStatutoryInformation from '@/components/modules/employee-management/EmployeeDetailStatutoryInformation';
import EmployeeDetailSupportingDocuments from '@/components/modules/employee-management/EmployeeDetailSupportingDocuments';
import EmployeeDetailEducation from '@/components/modules/employee-management/EmployeeDetailEducation';
import EmployeeDetailExperience from '@/components/modules/employee-management/EmployeeDetailExperience';
import { useParams } from 'react-router-dom';
import PhoenixLoader from '@/components/common/PhoenixLoader';
import EmployeePersonalInfoForm from '@/components/modules/employee-management/form/EmployeePersonalInfoForm';
import EmployeeAboutEmployeeForm from '@/components/modules/employee-management/form/EmployeeAboutEmployeeForm';
import EmployeeBankInformationForm from '@/components/modules/employee-management/form/EmployeeBankInformationForm';
import EmployeeEmergencyContactForm from '@/components/modules/employee-management/form/EmployeeEmergencyContactForm';
import EmployeeDetailEmergencyContact from '@/components/modules/employee-management/EmployeeDetailEmergencyContact';
import EmployeeFamilyInformationForm from '@/components/modules/employee-management/form/EmployeeFamilyInformationForm';
import EmployeeEducationForm from '@/components/modules/employee-management/form/EmployeeEducationForm';
import EmployeeExperienceForm from '@/components/modules/employee-management/form/EmployeeExperienceForm';
import EmployeeStatutoryInformationForm from '@/components/modules/employee-management/form/EmployeeStatutoryInformationForm';
import EmployeeSupportingDocumentsForm from '@/components/modules/employee-management/form/EmployeeSupportingDocumentsForm';

// Initial Values
const initialValues: TEmployee = {
  id: undefined,
  first_name: '',
  middle_name: '',
  last_name: '',
  email: '',
  phone: '',
  avatar: '',
  basic_information: {
    date_of_birth: '',
    gender: '',
    nationality: '',
    religion: '',
    marital_status: '',
    employment_of_spouse: '',
    no_of_children: '',
    blood_group: '',
    joining_date: '',
    department_id: '',
    designation_id: '',
    province: '',
    district: '',
    city: '',
    address: '',
    zip_code: '',
    postal_code: '',
    about: ''
  },
  emergency_contact: [],
  bank_information: {
    id: '',
    bank_name: '',
    branch_address: '',
    account_holder_name: '',
    account_number: '',
    account_type: '',
    swift_code: ''
  },
  statutory_information: {
    citizen_investment_trust: {
      id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      image: '',
      verification_status: 'pending'
    },
    social_security_fund: {
      id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      image: '',
      verification_status: 'pending'
    },
    provident_fund: {
      id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      image: '',
      verification_status: 'pending'
    },
    police_clearance: {
      id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      image: '',
      verification_status: 'pending'
    },
    health_insurance: {
      id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      image: '',
      verification_status: 'pending'
    },
    tax_clearance: {
      id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      image: '',
      verification_status: 'pending'
    }
  },
  supporting_documents: {
    pan: {
      id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      image: '',
      verification_status: 'pending'
    },
    national_id: {
      id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      image: '',
      verification_status: 'pending'
    },
    citizenship: {
      id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      image: '',
      verification_status: 'pending'
    },
    passport: {
      id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      image: '',
      verification_status: 'pending'
    },
    driving_license: {
      id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      image: '',
      verification_status: 'pending'
    }
  },
  family_information: [],
  education: [],
  experience: []
};

const initialLoader: TLoader = { list: false };

// Default Modal State
const modalConfigs: Array<{
  type: TEmployeeFormType;
  Component: React.ComponentType<{
    formData: TEmployee;
    modal: TModalProps;
    onSubmit: (values: TEmployee) => void;
    onClose: () => void;
    loading?: boolean;
  }>;
}> = [
  { type: 'basic_info', Component: EmployeeBasicInfoForm },
  { type: 'personal_info', Component: EmployeePersonalInfoForm },
  { type: 'emergency_contact', Component: EmployeeEmergencyContactForm },
  { type: 'about_employee', Component: EmployeeAboutEmployeeForm },
  { type: 'bank_information', Component: EmployeeBankInformationForm },
  { type: 'family_information', Component: EmployeeFamilyInformationForm },
  { type: 'education', Component: EmployeeEducationForm },
  { type: 'experience', Component: EmployeeExperienceForm },
  {
    type: 'statutory_information',
    Component: EmployeeStatutoryInformationForm
  },
  { type: 'supporting_documents', Component: EmployeeSupportingDocumentsForm }
];

// Modal State
type ModalState = Record<TEmployeeFormType, TModalProps>;

// Modal Configs
const defaultModalState: ModalState = {
  basic_info: { show: false, placement: 'end' },
  personal_info: { show: false, placement: 'end' },
  emergency_contact: { show: false, placement: 'end' },
  about_employee: { show: false, placement: 'end' },
  bank_information: { show: false, placement: 'end' },
  family_information: { show: false, placement: 'end' },
  statutory_information: { show: false, placement: 'end' },
  supporting_documents: { show: false, placement: 'end' },
  education: { show: false, placement: 'end' },
  experience: { show: false, placement: 'end' }
};

const EmployeeDetailsPage = () => {
  // React Hooks
  const { t } = useTranslation();
  const { employeeId } = useParams();

  // Custom Hooks
  const { fetchOneEmployee, updateEmployee } = useEmployeeHook();

  // Use States
  const [loader, setLoader] = React.useState<TLoader>(initialLoader);
  const [modals, setModals] = React.useState<ModalState>(defaultModalState);
  const [employee, setEmployee] = React.useState<TEmployee>(initialValues);

  // Handlers
  const handleOnEdit = (type: TEmployeeFormType) => () => openModal(type);

  // Modal Helpers
  const openModal = (type: TEmployeeFormType, extra?: Partial<TModalProps>) =>
    setModals(s => ({
      ...s,
      [type]: { ...s[type], show: true, type: 'edit', ...extra }
    }));

  const closeModal = (type: TEmployeeFormType) =>
    setModals(s => ({ ...s, [type]: { ...s[type], show: false, type: '' } }));

  // On Submit
  const handleOnSubmit = (formData: TEmployee) => {
    const formType = (formData?.form_type || 'basic_info') as TEmployeeFormType;
    setLoader({ list: true });
    openModal(formType);

    updateEmployee(formData?.id as string, formData)
      .then(() => {
        toast.success(
          t('message_success_update', {
            page: t('profile'),
            name: getUserFirstAndLastName(formData)
          })
        );
        closeModal(formType);
      })
      .catch(() => {
        toast.error(t('message_failed'));
      })
      .finally(() => setLoader({ list: false }));
  };

  // API Handlers
  const fetchOneItem = (id: string) => {
    setLoader({ list: true });
    fetchOneEmployee(id)
      .then((res: TEmployee) => setEmployee(res))
      .catch(() => toast.error(t('message_failed')))
      .finally(() => setLoader({ list: false }));
  };

  // Use Effects
  React.useEffect(() => {
    if (employeeId) fetchOneItem(employeeId);
    else setEmployee(initialValues);
  }, [employeeId]);

  return (
    <>
      {loader.list ? (
        <PhoenixLoader />
      ) : (
        <>
          <Container fluid className="min-vh-100 p-0">
            <EmployeeDetailHeader />

            <Row>
              {/* left */}
              <Col xs={12} lg={4} className="mb-4">
                <EmployeeDetailProfile
                  employee={employee}
                  onBasicInfoEdit={handleOnEdit('basic_info')}
                  onPersonalInfoEdit={handleOnEdit('personal_info')}
                />

                <EmployeeDetailEmergencyContact
                  employee={employee}
                  onEmergencyContactEdit={handleOnEdit('emergency_contact')}
                />
              </Col>

              {/* right */}
              <Col xs={12} lg={8} className="d-flex flex-column g-0">
                <EmployeeDetailAboutEmployee
                  employee={employee}
                  onAboutEmployeeEdit={handleOnEdit('about_employee')}
                />

                <EmployeeDetailBankInformation
                  employee={employee}
                  onBankInformationEdit={handleOnEdit('bank_information')}
                />

                <EmployeeDetailFamilyInformation
                  employee={employee}
                  onFamilyInformationEdit={handleOnEdit('family_information')}
                />

                <EmployeeDetailStatutoryInformation
                  employee={employee}
                  onStatutoryInformationEdit={handleOnEdit(
                    'statutory_information'
                  )}
                />

                <EmployeeDetailSupportingDocuments
                  employee={employee}
                  onSupportingDocumentsEdit={handleOnEdit(
                    'supporting_documents'
                  )}
                />

                <Row className="gap-0 g-3">
                  <Col xs={12} md={6}>
                    <EmployeeDetailEducation
                      employee={employee}
                      onEducationEdit={handleOnEdit('education')}
                    />
                  </Col>

                  <Col xs={12} md={6}>
                    <EmployeeDetailExperience
                      employee={employee}
                      onExperienceEdit={handleOnEdit('experience')}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>

          {/* Modals Rendered from Config */}
          {modalConfigs?.map(({ type, Component }) => (
            <Component
              key={type}
              formData={employee}
              modal={modals[type]}
              onSubmit={handleOnSubmit}
              onClose={() => closeModal(type)}
              loading={loader.list}
            />
          ))}
        </>
      )}
    </>
  );
};

export default EmployeeDetailsPage;
