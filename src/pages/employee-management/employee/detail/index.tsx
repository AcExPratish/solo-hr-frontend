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
import {
  //  useNavigate,
  useParams
} from 'react-router-dom';
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
// import { checkScope } from '@/helpers/auth';

// Initial values
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

const intialLoader: TLoader = {
  list: false
};

const EmployeeDetailsPage = () => {
  // React Hooks
  const { t } = useTranslation();
  const { employeeId } = useParams();
  // const navigate = useNavigate();

  // Custom Hooks
  const { fetchOneEmployee, updateEmployee } = useEmployeeHook();

  // Use States
  const [loader, setLoader] = React.useState<TLoader>(intialLoader);
  const [basicInfoModal, setBasicInfoModal] = React.useState<TModalProps>({
    show: false,
    placement: 'end'
  });
  const [personalInfoModal, setPersonalInfoModal] = React.useState<TModalProps>(
    {
      show: false,
      placement: 'end'
    }
  );
  const [emergencyContactModal, setEmergencyContactModal] =
    React.useState<TModalProps>({
      show: false,
      placement: 'end'
    });
  const [aboutEmployeeModal, setAboutEmployeeModal] =
    React.useState<TModalProps>({
      show: false,
      placement: 'end'
    });
  const [bankInformationModal, setBankInformationModal] =
    React.useState<TModalProps>({
      show: false,
      placement: 'end'
    });
  const [familyInformationModal, setFamilyInformationModal] =
    React.useState<TModalProps>({
      show: false,
      placement: 'end'
    });
  const [statutoryInformationModal, setStatutoryInformationModal] =
    React.useState<TModalProps>({
      show: false,
      placement: 'end'
    });
  const [supportingDocumentsModal, setSupportingDocumentsModal] =
    React.useState<TModalProps>({
      show: false,
      placement: 'end'
    });
  const [educationModal, setEducationModal] = React.useState<TModalProps>({
    show: false,
    placement: 'end'
  });
  const [experienceModal, setExperienceModal] = React.useState<TModalProps>({
    show: false,
    placement: 'end'
  });
  const [employee, setEmployee] = React.useState<TEmployee>(initialValues);

  // Handlers
  const handleOnEditBasicInfo = () => {
    setBasicInfoModal({ ...basicInfoModal, ...{ show: true, type: 'edit' } });
  };

  const handleOnEditPersonalInfo = () => {
    setPersonalInfoModal({
      ...personalInfoModal,
      ...{ show: true, type: 'edit' }
    });
  };

  const handleOnEditEmergencyContact = () => {
    setEmergencyContactModal({
      ...emergencyContactModal,
      ...{ show: true, type: 'edit' }
    });
  };

  const handleOnEditAboutEmployee = () => {
    setAboutEmployeeModal({
      ...aboutEmployeeModal,
      ...{ show: true, type: 'edit' }
    });
  };

  const handleOnEditBankInformation = () => {
    setBankInformationModal({
      ...bankInformationModal,
      ...{ show: true, type: 'edit' }
    });
  };

  const handleOnEditFamilyInformation = () => {
    setFamilyInformationModal({
      ...familyInformationModal,
      ...{ show: true, type: 'edit' }
    });
  };

  const handleOnEditStatutoryInformation = () => {
    setStatutoryInformationModal({
      ...statutoryInformationModal,
      ...{ show: true, type: 'edit' }
    });
  };

  const handleOnEditEducation = () => {
    setEducationModal({
      ...educationModal,
      ...{ show: true, type: 'edit' }
    });
  };

  const handleOnEditExperience = () => {
    setExperienceModal({
      ...experienceModal,
      ...{ show: true, type: 'edit' }
    });
  };

  const handleOnEditSupportingDocuments = () => {
    setSupportingDocumentsModal({
      ...supportingDocumentsModal,
      ...{ show: true, type: 'edit' }
    });
  };

  const handleFormTypeModal = (formType: TEmployeeFormType, show: boolean) => {
    if (formType === 'basic_info') {
      setBasicInfoModal({ ...basicInfoModal, ...{ show } });
    } else if (formType === 'personal_info') {
      setPersonalInfoModal({ ...personalInfoModal, ...{ show } });
    } else if (formType === 'emergency_contact') {
      setEmergencyContactModal({ ...emergencyContactModal, ...{ show } });
    } else if (formType === 'about_employee') {
      setAboutEmployeeModal({ ...aboutEmployeeModal, ...{ show } });
    } else if (formType === 'bank_information') {
      setBankInformationModal({
        ...bankInformationModal,
        ...{ show }
      });
    } else if (formType === 'family_information') {
      setFamilyInformationModal({
        ...familyInformationModal,
        ...{ show }
      });
    } else if (formType === 'education') {
      setEducationModal({ ...educationModal, ...{ show } });
    } else if (formType === 'experience') {
      setExperienceModal({ ...experienceModal, ...{ show } });
    } else if (formType === 'statutory_information') {
      setStatutoryInformationModal({
        ...statutoryInformationModal,
        ...{ show }
      });
    } else if (formType === 'supporting_documents') {
      setSupportingDocumentsModal({
        ...supportingDocumentsModal,
        ...{ show }
      });
    }
  };

  const handleOnSubmit = (formData: TEmployee) => {
    setLoader({ list: true });
    handleFormTypeModal(formData?.form_type as TEmployeeFormType, true);

    updateEmployee(formData?.id as string, formData)
      .then(() => {
        toast.success(
          t('message_success_update', {
            page: t('profile'),
            name: getUserFirstAndLastName(formData)
          })
        );
        handleFormTypeModal(formData?.form_type || 'basic_info', false);
        setLoader({ list: false });
      })
      .catch(() => {
        toast.error(t('message_failed'));
        setLoader({ list: false });
      });
  };

  // API Handlers
  const fetchOneItem = (id: string) => {
    setLoader({ list: true });
    fetchOneEmployee(id)
      .then((res: TEmployee) => {
        setEmployee(res);
      })
      .catch(() => {
        toast.error(t('message_failed'));
      })
      .finally(() => {
        setLoader({ list: false });
      });
  };

  React.useEffect(() => {
    //TODO: Add permission check
    // if (!checkScope('employee_management.employee.view')) {
    //   navigate('/errors/403');
    // }

    if (employeeId) {
      fetchOneItem(employeeId);
    } else {
      setEmployee(initialValues);
    }
  }, [employeeId]);

  return (
    <React.Fragment>
      {loader?.list ? (
        <PhoenixLoader />
      ) : (
        <React.Fragment>
          <Container fluid className="min-vh-100 p-0">
            {/* Employee Detail Header */}
            <EmployeeDetailHeader />

            {/* Employee Detail Content */}
            <Row>
              {/* Left Column */}
              <Col xs={12} lg={4} className="mb-4">
                {/* Employee Detail Profile */}
                <EmployeeDetailProfile
                  employee={employee}
                  onBasicInfoEdit={handleOnEditBasicInfo}
                  onPersonalInfoEdit={handleOnEditPersonalInfo}
                />

                {/* Emergency Contact Information */}
                <EmployeeDetailEmergencyContact
                  employee={employee}
                  onEmergencyContactEdit={handleOnEditEmergencyContact}
                />
              </Col>

              {/* Right Column */}
              <Col xs={12} lg={8} className="d-flex flex-column g-0">
                {/* About Employee */}
                <EmployeeDetailAboutEmployee
                  employee={employee}
                  onAboutEmployeeEdit={handleOnEditAboutEmployee}
                />

                {/* Bank Information */}
                <EmployeeDetailBankInformation
                  employee={employee}
                  onBankInformationEdit={handleOnEditBankInformation}
                />

                {/* Family Information */}
                <EmployeeDetailFamilyInformation
                  employee={employee}
                  onFamilyInformationEdit={handleOnEditFamilyInformation}
                />

                {/* Statutory Information */}
                <EmployeeDetailStatutoryInformation
                  employee={employee}
                  onStatutoryInformationEdit={handleOnEditStatutoryInformation}
                />

                {/* Supporting Documents */}
                <EmployeeDetailSupportingDocuments
                  employee={employee}
                  onSupportingDocumentsEdit={handleOnEditSupportingDocuments}
                />

                <Row className="gap-0 g-3">
                  {/* Education */}
                  <Col xs={12} md={6}>
                    <EmployeeDetailEducation
                      employee={employee}
                      onEducationEdit={handleOnEditEducation}
                    />
                  </Col>

                  {/* Experience */}
                  <Col xs={12} md={6}>
                    <EmployeeDetailExperience
                      employee={employee}
                      onExperienceEdit={handleOnEditExperience}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>

          {/* Modals */}
          <EmployeeBasicInfoForm
            formData={employee}
            modal={basicInfoModal}
            onSubmit={values => {
              handleOnSubmit(values);
            }}
            onClose={() =>
              setBasicInfoModal({
                ...basicInfoModal,
                ...{ show: false, type: '' }
              })
            }
            loading={loader.list}
          />

          <EmployeePersonalInfoForm
            formData={employee}
            modal={personalInfoModal}
            onSubmit={values => {
              handleOnSubmit(values);
            }}
            onClose={() =>
              setPersonalInfoModal({
                ...personalInfoModal,
                ...{ show: false, type: '' }
              })
            }
            loading={loader.list}
          />

          <EmployeeEmergencyContactForm
            formData={employee}
            modal={emergencyContactModal}
            onSubmit={values => {
              handleOnSubmit(values);
            }}
            onClose={() =>
              setEmergencyContactModal({
                ...emergencyContactModal,
                ...{ show: false, type: '' }
              })
            }
            loading={loader.list}
          />

          <EmployeeAboutEmployeeForm
            formData={employee}
            modal={aboutEmployeeModal}
            onSubmit={values => {
              handleOnSubmit(values);
            }}
            onClose={() =>
              setAboutEmployeeModal({
                ...aboutEmployeeModal,
                ...{ show: false, type: '' }
              })
            }
            loading={loader.list}
          />

          <EmployeeBankInformationForm
            formData={employee}
            modal={bankInformationModal}
            onSubmit={values => {
              handleOnSubmit(values);
            }}
            onClose={() =>
              setBankInformationModal({
                ...bankInformationModal,
                ...{ show: false, type: '' }
              })
            }
            loading={loader.list}
          />

          <EmployeeFamilyInformationForm
            formData={employee}
            modal={familyInformationModal}
            onSubmit={values => {
              handleOnSubmit(values);
            }}
            onClose={() =>
              setFamilyInformationModal({
                ...familyInformationModal,
                ...{ show: false, type: '' }
              })
            }
            loading={loader.list}
          />

          <EmployeeStatutoryInformationForm
            formData={employee}
            modal={statutoryInformationModal}
            onSubmit={values => {
              handleOnSubmit(values);
            }}
            onClose={() =>
              setStatutoryInformationModal({
                ...statutoryInformationModal,
                ...{ show: false, type: '' }
              })
            }
            loading={loader.list}
          />

          <EmployeeSupportingDocumentsForm
            formData={employee}
            modal={supportingDocumentsModal}
            onSubmit={values => {
              handleOnSubmit(values);
            }}
            onClose={() =>
              setSupportingDocumentsModal({
                ...supportingDocumentsModal,
                ...{ show: false, type: '' }
              })
            }
            loading={loader.list}
          />

          <EmployeeEducationForm
            formData={employee}
            modal={educationModal}
            onSubmit={values => {
              handleOnSubmit(values);
            }}
            onClose={() =>
              setEducationModal({
                ...educationModal,
                ...{ show: false, type: '' }
              })
            }
            loading={loader.list}
          />

          <EmployeeExperienceForm
            formData={employee}
            modal={experienceModal}
            onSubmit={values => {
              handleOnSubmit(values);
            }}
            onClose={() =>
              setExperienceModal({
                ...experienceModal,
                ...{ show: false, type: '' }
              })
            }
            loading={loader.list}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default EmployeeDetailsPage;
