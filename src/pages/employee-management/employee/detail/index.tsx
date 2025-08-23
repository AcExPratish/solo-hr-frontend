import React from 'react';
import { Container, Row, Col, ModalProps } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import EmployeeDetailHeader from '@/components/modules/employee-management/EmployeeDetailHeader';
import { employeeMockData as initialEmployee } from '@/data/mock-data';
import { getUserFirstAndLastName } from '@/helpers/utils';
import EmployeeBasicForm from '@/components/modules/employee-management/form/EmployeeBasicForm';
import { TEmployee } from '@/types/modules/employee-management/employee';
import { TLoader } from '@/types/modules';
import { toast } from 'react-toastify';
import useEmployeeHook from '@/hooks/modules/employee-management/useEmployeeHook';
import EmployeeDetailProfile from '@/components/modules/employee-management/EmployeeDetailProfile';
import EmployeeDetailEmergencyContact from '@/components/modules/employee-management/EmployeeDetailEmergencyContact';
import EmployeeDetailAboutEmployee from '@/components/modules/employee-management/EmployeeDetailAboutEmployee';
import EmployeeDetailBankInformation from '@/components/modules/employee-management/EmployeeDetailBankInformation';
import EmployeeDetailFamilyInformation from '@/components/modules/employee-management/EmployeeDetailFamilyInformation';
import EmployeeDetailStatutoryInformation from '@/components/modules/employee-management/EmployeeDetailStatutoryInformation';
import EmployeeDetailSupportingDocuments from '@/components/modules/employee-management/EmployeeDetailSupportingDocuments';
import EmployeeDetailEducation from '@/components/modules/employee-management/EmployeeDetailEducation';
import EmployeeDetailExperience from '@/components/modules/employee-management/EmployeeDetailExperience';

const EmployeeDetailsPage = () => {
  // React Hooks
  const { t } = useTranslation();

  // Custom Hooks
  const { updateEmployee } = useEmployeeHook();

  // Use States
  const [loader, setLoader] = React.useState<TLoader>({ form: false });
  const [basicInfoModal, setBasicInfoModal] = React.useState<ModalProps>({
    show: false,
    placement: 'end'
  });
  const [employee, setEmployee] = React.useState<TEmployee>(initialEmployee);

  // Handlers
  const handleOnEditBasicInfo = () => {
    setBasicInfoModal({ ...basicInfoModal, ...{ show: true, type: 'edit' } });
  };

  const handleOnSubmit = (formData: TEmployee) => {
    setLoader({ form: true });
    updateItem(formData?.id ?? '', formData);
  };

  // API Handlers
  const fetchOneItem = (row: TEmployee) => {
    setLoader({ list: true });
    setEmployee(row);
    setLoader({ list: false });
  };

  const updateItem = (id: string, data: TEmployee) => {
    setBasicInfoModal({ ...basicInfoModal, ...{ show: true } });
    updateEmployee(id, data)
      .then(() => {
        toast.success(
          t('message_success_update', {
            page: t('profile'),
            name: getUserFirstAndLastName(data)
          })
        );
        setBasicInfoModal({ ...basicInfoModal, ...{ show: false } });
        setLoader({ form: false });
      })
      .catch(() => {
        toast.error(t('message_failed_update'));
        setLoader({ form: false });
      });
  };

  React.useEffect(() => {
    //TODO: Add permission check
    fetchOneItem(initialEmployee);
  }, [employee]);

  return (
    <React.Fragment>
      <Container fluid className="min-vh-100">
        <EmployeeDetailHeader />
        <Row>
          {/* Left Column */}
          <Col xs={12} lg={4} className="mb-4">
            {/* Employee Detail Profile */}
            <EmployeeDetailProfile
              employee={employee}
              onBasicInfoEdit={handleOnEditBasicInfo}
            />

            {/* Emergency Contact Information */}
            <EmployeeDetailEmergencyContact
              employee={employee}
              onEmergencyContactEdit={() => {}}
            />
          </Col>

          {/* Right Column */}
          <Col xs={12} lg={8} className="d-flex flex-column g-0">
            {/* About Employee */}
            <EmployeeDetailAboutEmployee
              employee={employee}
              onAboutEmployeeEdit={() => {}}
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
      <EmployeeBasicForm
        formData={employee}
        modal={basicInfoModal}
        onSubmit={values => {
          handleOnSubmit(values);
        }}
        onClose={() =>
          setBasicInfoModal({ ...basicInfoModal, ...{ show: false, type: '' } })
        }
        loading={loader.form}
      />
    </React.Fragment>
  );
};

export default EmployeeDetailsPage;
