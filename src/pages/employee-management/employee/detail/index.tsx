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
  _id: undefined,
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
    _id: '',
    bank_name: '',
    branch_address: '',
    account_holder_name: '',
    account_number: '',
    account_type: '',
    swift_code: ''
  },
  statutory_information: {
    citizen_investment_trust: {
      _id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      image: '',
      verification_status: 'pending'
    },
    social_security_fund: {
      _id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      image: '',
      verification_status: 'pending'
    },
    provident_fund: {
      _id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      image: '',
      verification_status: 'pending'
    },
    police_clearance: {
      _id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      image: '',
      verification_status: 'pending'
    },
    health_insurance: {
      _id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      image: '',
      verification_status: 'pending'
    },
    tax_clearance: {
      _id: '',
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
      _id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      image: '',
      verification_status: 'pending'
    },
    national_id: {
      _id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      image: '',
      verification_status: 'pending'
    },
    citizenship: {
      _id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      image: '',
      verification_status: 'pending'
    },
    passport: {
      _id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      image: '',
      verification_status: 'pending'
    },
    driving_license: {
      _id: '',
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

const initialModalState: TModalProps = {
  type: '',
  show: false,
  placement: 'end'
};

const EmployeeDetailsPage = () => {
  // React Hooks
  const { t } = useTranslation();
  const { employeeId } = useParams();

  // Custom Hooks
  const { fetchOneEmployee, updateEmployee } = useEmployeeHook();

  // Use States
  const [loader, setLoader] = React.useState<TLoader>(initialLoader);
  const [employee, setEmployee] = React.useState<TEmployee>(initialValues);
  const [basicInfoModal, setBasicInfoModal] = React.useState(initialModalState);
  const [personalInfoModal, setPersonalInfoModal] =
    React.useState(initialModalState);
  const [emergencyContactModal, setEmergencyContactModal] =
    React.useState(initialModalState);
  const [aboutModal, setAboutModal] = React.useState(initialModalState);
  const [bankInfoModal, setBankInfoModal] = React.useState(initialModalState);
  const [familyInfoModal, setFamilyInfoModal] =
    React.useState(initialModalState);
  const [statutoryInfoModal, setStatutoryInfoModal] =
    React.useState(initialModalState);
  const [supportingDocumentsModal, setSupportingDocumentsModal] =
    React.useState(initialModalState);
  const [educationModal, setEducationModal] = React.useState(initialModalState);
  const [experienceModal, setExperienceModal] =
    React.useState(initialModalState);

  // Handlers
  const handleBasicInfoEditModal = (show: boolean) => {
    setBasicInfoModal(prev => ({ ...prev, show, type: show ? 'edit' : '' }));
  };

  const handlePersonalInfoEditModal = (show: boolean) => {
    setPersonalInfoModal(prev => ({ ...prev, show, type: show ? 'edit' : '' }));
  };

  const handleEmergencyContactEditModal = (show: boolean) => {
    setEmergencyContactModal(prev => ({
      ...prev,
      show,
      type: show ? 'edit' : ''
    }));
  };

  const handleAboutEditModal = (show: boolean) => {
    setAboutModal(prev => ({
      ...prev,
      show,
      type: show ? 'edit' : ''
    }));
  };

  const handleBankInformationEditModal = (show: boolean) => {
    setBankInfoModal(prev => ({ ...prev, show, type: show ? 'edit' : '' }));
  };

  const handleFamilyInformationEditModal = (show: boolean) => {
    setFamilyInfoModal(prev => ({ ...prev, show, type: show ? 'edit' : '' }));
  };

  const handleStatutoryInformationEditModal = (show: boolean) => {
    setStatutoryInfoModal(prev => ({
      ...prev,
      show,
      type: show ? 'edit' : ''
    }));
  };

  const handleSupportingDocumentsEditModal = (show: boolean) => {
    setSupportingDocumentsModal(prev => ({
      ...prev,
      show,
      type: show ? 'edit' : ''
    }));
  };

  const handleEducationEditModal = (show: boolean) => {
    setEducationModal(prev => ({ ...prev, show, type: show ? 'edit' : '' }));
  };

  const handleExperienceEditModal = (show: boolean) => {
    setExperienceModal(prev => ({ ...prev, show, type: show ? 'edit' : '' }));
  };

  // On Submit
  const handleOnSubmit = (formData: TEmployee) => {
    const formType = formData?.form_type as TEmployeeFormType;
    setLoader({ list: true });

    updateEmployee(formData?._id as string, formType, formData)
      .then(resp => {
        setEmployee(resp);
        toast.success(
          t('message_success_update', {
            page: t('profile'),
            name: getUserFirstAndLastName(formData)
          })
        );
        // closeModal(formType);
      })
      .catch(() => {
        toast.error(t('message_failed'));
      })
      .finally(() => setLoader({ list: false }));
  };

  // API Handlers
  const fetchOneItem = (_id: string) => {
    setLoader({ list: true });
    fetchOneEmployee(_id)
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
                  onBasicInfoEdit={() => {
                    handleBasicInfoEditModal(true);
                  }}
                  onPersonalInfoEdit={() => {
                    handlePersonalInfoEditModal(true);
                  }}
                />

                <EmployeeDetailEmergencyContact
                  employee={employee}
                  onEmergencyContactEdit={() => {
                    handleEmergencyContactEditModal(true);
                  }}
                />
              </Col>

              {/* right */}
              <Col xs={12} lg={8} className="d-flex flex-column g-0">
                <EmployeeDetailAboutEmployee
                  employee={employee}
                  onAboutEmployeeEdit={() => {
                    handleAboutEditModal(true);
                  }}
                />

                <EmployeeDetailBankInformation
                  employee={employee}
                  onBankInformationEdit={() => {
                    handleBankInformationEditModal(true);
                  }}
                />

                <EmployeeDetailFamilyInformation
                  employee={employee}
                  onFamilyInformationEdit={() => {
                    handleFamilyInformationEditModal(true);
                  }}
                />

                <EmployeeDetailStatutoryInformation
                  employee={employee}
                  onStatutoryInformationEdit={() => {
                    handleStatutoryInformationEditModal(true);
                  }}
                />

                <EmployeeDetailSupportingDocuments
                  employee={employee}
                  onSupportingDocumentsEdit={() => {
                    handleSupportingDocumentsEditModal(true);
                  }}
                />

                <Row className="gap-0 g-3">
                  <Col xs={12} md={6}>
                    <EmployeeDetailEducation
                      employee={employee}
                      onEducationEdit={() => {
                        handleEducationEditModal(true);
                      }}
                    />
                  </Col>

                  <Col xs={12} md={6}>
                    <EmployeeDetailExperience
                      employee={employee}
                      onExperienceEdit={() => {
                        handleExperienceEditModal(true);
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </>
      )}

      {/* Modal Forms */}
      <EmployeeBasicInfoForm
        modal={basicInfoModal}
        formData={employee}
        onSubmit={handleOnSubmit}
        onClose={() => {
          handleBasicInfoEditModal(false);
        }}
        loading={loader.list}
      />

      <EmployeePersonalInfoForm
        modal={personalInfoModal}
        formData={employee}
        onSubmit={handleOnSubmit}
        onClose={() => {
          handlePersonalInfoEditModal(false);
        }}
      />

      <EmployeeEmergencyContactForm
        modal={emergencyContactModal}
        formData={employee}
        onSubmit={handleOnSubmit}
        onClose={() => {
          handleEmergencyContactEditModal(false);
        }}
      />

      <EmployeeAboutEmployeeForm
        modal={aboutModal}
        formData={employee}
        onSubmit={handleOnSubmit}
        onClose={() => {
          handleAboutEditModal(false);
        }}
      />

      <EmployeeBankInformationForm
        modal={bankInfoModal}
        formData={employee}
        onSubmit={handleOnSubmit}
        onClose={() => handleBankInformationEditModal(false)}
        loading={loader.list}
      />

      <EmployeeFamilyInformationForm
        modal={familyInfoModal}
        formData={employee}
        onSubmit={handleOnSubmit}
        onClose={() => handleFamilyInformationEditModal(false)}
        loading={loader.list}
      />

      <EmployeeStatutoryInformationForm
        modal={statutoryInfoModal}
        formData={employee}
        onSubmit={handleOnSubmit}
        onClose={() => handleStatutoryInformationEditModal(false)}
        loading={loader.list}
      />

      <EmployeeSupportingDocumentsForm
        modal={supportingDocumentsModal}
        formData={employee}
        onSubmit={handleOnSubmit}
        onClose={() => handleSupportingDocumentsEditModal(false)}
        loading={loader.list}
      />

      <EmployeeEducationForm
        modal={educationModal}
        formData={employee}
        onSubmit={handleOnSubmit}
        onClose={() => handleEducationEditModal(false)}
        loading={loader.list}
      />

      <EmployeeExperienceForm
        modal={experienceModal}
        formData={employee}
        onSubmit={handleOnSubmit}
        onClose={() => handleExperienceEditModal(false)}
        loading={loader.list}
      />
    </>
  );
};

export default EmployeeDetailsPage;
