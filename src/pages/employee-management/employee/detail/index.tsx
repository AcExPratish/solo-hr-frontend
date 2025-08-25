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
import EmployeeDetailEmergencyContactForm from '@/components/modules/employee-management/form/EmployeeDetailEmergencyContactForm';
import EmployeeDetailEmergencyContact from '@/components/modules/employee-management/EmployeeDetailEmergencyContact';
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
      file_url: '',
      verification_status: ''
    },
    social_security_fund: {
      id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      file_url: '',
      verification_status: ''
    },
    provident_fund: {
      id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      file_url: '',
      verification_status: ''
    },
    police_clearance: {
      id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      file_url: '',
      verification_status: ''
    },
    health_insurance: {
      id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      file_url: '',
      verification_status: ''
    },
    tax_clearance: {
      id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      file_url: '',
      verification_status: ''
    }
  },
  supporting_documents: {
    pan: {
      id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      file_url: '',
      verification_status: ''
    },
    national_id: {
      id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      file_url: '',
      verification_status: ''
    },
    citizenship: {
      id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      file_url: '',
      verification_status: ''
    },
    passport: {
      id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      file_url: '',
      verification_status: ''
    },
    driving_license: {
      id: '',
      id_number: '',
      issue_date: '',
      expiry_date: '',
      issuing_authority: '',
      file_url: '',
      verification_status: ''
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

  const handleFormTypeModal = (formType: TEmployeeFormType, show: boolean) => {
    if (formType === 'basic-info') {
      setBasicInfoModal({ ...basicInfoModal, ...{ show } });
    } else if (formType === 'personal-info') {
      setPersonalInfoModal({ ...personalInfoModal, ...{ show } });
    } else if (formType === 'emergency-contact') {
      setEmergencyContactModal({ ...emergencyContactModal, ...{ show } });
    } else if (formType === 'about-employee') {
      setAboutEmployeeModal({ ...aboutEmployeeModal, ...{ show } });
    }
  };

  const handleOnSubmit = (formData: TEmployee) => {
    setLoader({ list: true });

    handleFormTypeModal(formData?.form_type || 'basic-info', true);
    updateEmployee(formData?.id ?? '', formData)
      .then(() => {
        toast.success(
          t('message_success_update', {
            page: t('profile'),
            name: getUserFirstAndLastName(formData)
          })
        );
        handleFormTypeModal(formData?.form_type || 'basic-info', false);
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
                  onBankInformationEdit={() => {}}
                />

                {/* Family Information */}
                <EmployeeDetailFamilyInformation
                  employee={employee}
                  onFamilyInformationEdit={() => {}}
                />

                {/* Statutory Information */}
                <EmployeeDetailStatutoryInformation
                  employee={employee}
                  onStatutoryInformationEdit={() => {}}
                />

                {/* Supporting Documents */}
                <EmployeeDetailSupportingDocuments
                  employee={employee}
                  onSupportingDocumentsEdit={() => {}}
                />

                <Row className="gap-0 g-3">
                  {/* Education */}
                  <Col xs={12} md={6}>
                    <EmployeeDetailEducation
                      employee={employee}
                      onEducationEdit={() => {}}
                    />
                  </Col>

                  {/* Experience */}
                  <Col xs={12} md={6}>
                    <EmployeeDetailExperience
                      employee={employee}
                      onExperienceEdit={() => {}}
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

          <EmployeeDetailEmergencyContactForm
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
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default EmployeeDetailsPage;
