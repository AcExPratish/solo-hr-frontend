import React from 'react';
import { Container, Row, Col, Card, Badge, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faEnvelope,
  faPhone,
  faCalendar,
  faMapMarker,
  faUser,
  faIdCard,
  faGlobe,
  faChurch,
  faHeart,
  faBriefcase,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import EmployeeDetailHeader from '@/components/modules/employee-management/EmployeeDetailHeader';
import { InfoRow } from '@/components/common/InfoRow';
import Button from '@/components/base/Button';
import { TEmployeeEmergencyContact } from '@/types/modules/employee-management/employee';

interface Employee {
  id: string;
  name: string;
  position: string;
  experience: string;
  clientId: string;
  team: string;
  dateOfJoin: string;
  reportOffice: string;
  phone: string;
  email: string;
  gender: string;
  birthday: string;
  address: string;
  passportNo: string;
  passportExpDate: string;
  nationality: string;
  religion: string;
  maritalStatus: string;
  employmentOfSpouse: string;
  noOfChildren: number;
  about: string;
  emergency_contact: TEmployeeEmergencyContact[];
}

const employee: Employee = {
  id: 'CLT-0024',
  name: 'Stephan Peralt',
  position: 'Software Developer',
  experience: '10+ years of Experience',
  clientId: 'CLT-0024',
  team: 'UI/UX Design',
  dateOfJoin: '1st Jan 2023',
  reportOffice: 'Doglas Martini',
  phone: '(163) 2459 315',
  email: 'peralt12@example.com',
  gender: 'Male',
  birthday: '24th July 2000',
  address: '1861 Bayonne Ave, Manchester, NJ, 08759',
  passportNo: 'QRET4566F-GRT',
  passportExpDate: '15 May 2029',
  nationality: 'Indian',
  religion: 'Christianity',
  maritalStatus: 'Yes',
  employmentOfSpouse: 'No',
  noOfChildren: 2,
  about:
    'As an award winning designer, I deliver exceptional quality work and bring value to your brand! With 10 years of experience and 350+ projects completed worldwide with satisfied customers, I developed the 360° brand approach, which helped me to create numerous brands that are relevant, meaningful and loved.',
  emergency_contact: [
    {
      name: 'John Doe',
      relationship: 'Father',
      phone_1: '9882827282',
      phone_2: '9882827282'
    },
    {
      name: 'Jane Doe',
      relationship: 'Mother',
      phone_1: '9882827281',
      phone_2: '9882827281'
    }
  ]
};

const EmployeeDetailsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container fluid className="min-vh-100">
      <EmployeeDetailHeader />
      <Row>
        {/* Left Column */}
        <Col xs={12} lg={5} className="mb-4">
          <Card className="mb-4">
            <div
              className="bg-success position-relative rounded-3"
              style={{ height: '120px' }}
            >
              <div
                className="position-absolute bg-white rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '80px',
                  height: '80px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  bottom: '-40px',
                  border: '4px solid white'
                }}
              >
                <FontAwesomeIcon
                  icon={faUser}
                  size="2x"
                  className="text-success"
                />
              </div>
            </div>

            <Card.Body className="text-center pt-5">
              {/* Name and Position */}
              <Row className="d-flex align-items-center justify-content-center gap-2 mt-3">
                <Col xs={12}>
                  <h5 className="mb-1">{employee?.name ?? ''}</h5>
                </Col>

                <Col xs={12}>
                  <Badge bg="success" className="me-2">
                    <FontAwesomeIcon icon={faUser} className="me-1" />
                    {employee?.position ?? ''}
                  </Badge>
                  <Badge bg="light" text="dark">
                    {employee?.experience ?? ''}
                  </Badge>
                </Col>
              </Row>

              {/* Info Rows */}
              <Row className="mt-4">
                <Col xs={12}>
                  <InfoRow
                    icon={faIdCard}
                    label={t('emp_id')}
                    value={employee?.id ?? ''}
                  />
                  <InfoRow
                    icon={faUser}
                    label={t('department')}
                    value={employee?.team ?? ''}
                  />
                  <InfoRow
                    icon={faCalendar}
                    label={t('date_of_join')}
                    value={employee?.dateOfJoin ?? ''}
                  />
                  <InfoRow
                    icon={faBriefcase}
                    label={t('report_office')}
                    value={employee?.reportOffice ?? ''}
                  />
                </Col>
              </Row>

              {/* Buttons */}
              <Row className="mt-2">
                <Col xs={12} md={6} className="px-1">
                  <Button variant="subtle-secondary" className="w-100">
                    <FontAwesomeIcon icon={faEdit} />
                    <span className="ms-2">{t('edit_info')}</span>
                  </Button>
                </Col>

                <Col xs={12} md={6} className="px-1">
                  <Button variant="success" className="w-100">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className="ms-2">{t('message')}</span>
                  </Button>
                </Col>
              </Row>

              <hr className="my-4 w-100" />

              {/* Basic Information */}
              <Row className="gap-2">
                <Col
                  xs={12}
                  className="d-flex align-items-center justify-content-between"
                >
                  <h6 className="mb-0">{t('basic_information')}</h6>
                  <FontAwesomeIcon
                    icon={faEdit}
                    size="xs"
                    className="cursor-pointer"
                  />
                </Col>

                <Col xs={12}>
                  <InfoRow
                    icon={faPhone}
                    label={t('phone')}
                    value={employee.phone}
                  />
                  <InfoRow
                    icon={faEnvelope}
                    label={t('email')}
                    value={employee.email}
                    isLink
                  />
                  <InfoRow
                    icon={faUser}
                    label={t('gender')}
                    value={employee.gender}
                  />
                  <InfoRow
                    icon={faCalendar}
                    label={t('birthday')}
                    value={employee.birthday}
                  />
                  <InfoRow
                    icon={faMapMarker}
                    label={t('address')}
                    value={employee.address}
                  />
                </Col>
              </Row>

              <hr className="my-4 w-100" />

              {/* Personal Information */}
              <Row className="gap-2">
                <Col
                  xs={12}
                  className="d-flex align-items-center justify-content-between"
                >
                  <h6 className="mb-0">{t('personal_information')}</h6>
                  <FontAwesomeIcon
                    icon={faEdit}
                    size="xs"
                    className="cursor-pointer"
                  />
                </Col>

                <Col xs={12}>
                  <InfoRow
                    icon={faGlobe}
                    label={t('nationality')}
                    value={employee?.nationality ?? ''}
                  />
                  <InfoRow
                    icon={faChurch}
                    label={t('religion')}
                    value={employee?.religion ?? ''}
                  />
                  <InfoRow
                    icon={faHeart}
                    label={t('marital_status')}
                    value={employee?.maritalStatus ?? ''}
                  />
                  <InfoRow
                    icon={faBriefcase}
                    label={t('employment_of_spouse')}
                    value={employee?.employmentOfSpouse ?? ''}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Row className="mb-2 px-2">
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-between"
            >
              <h6 className="mb-0">{t('emergency_contact_number')}</h6>
              <FontAwesomeIcon
                icon={faEdit}
                size="xs"
                className="cursor-pointer"
              />
            </Col>
          </Row>

          <Card className="mb-4">
            <Card.Body className="text-center pt-5">
              {/* Basic Information */}
              <Row className="gap-4">
                {employee?.emergency_contact?.map((data, index: number) => (
                  <Col
                    key={index}
                    xs={12}
                    className={`d-flex align-items-center justify-content-between ${
                      index !== (employee?.emergency_contact?.length ?? 0) - 1
                        ? 'border-bottom pb-4'
                        : ''
                    }`}
                  >
                    <div className="d-flex flex-column align-items-start gap-2">
                      <h6 className="text-muted">{data?.name ?? ''}</h6>
                      <div className="text-muted small">
                        {data?.relationship ?? ''}
                      </div>
                    </div>

                    <div className="d-flex flex-column align-items-end gap-2">
                      <div className="text-muted small">
                        {data?.phone_1 ?? ''}
                      </div>
                      <div className="text-muted small">
                        {data?.phone_2 ?? ''}
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Column */}
        <Col xs={12} lg={7}>
          {/* About Employee */}
          <Accordion
            className="mb-4 bg-white text-black border rounded-1 py-2 border-1 border-gray-200"
            defaultActiveKey="about"
          >
            <Accordion.Item eventKey="about" className="border-0">
              <Accordion.Header className="px-3">
                <div className="d-flex align-items-center justify-content-between w-100">
                  <span>{t('about_employee')}</span>
                  <div className="d-flex align-items-center gap-2">
                    <FontAwesomeIcon
                      icon={faEdit}
                      size="xs"
                      className="text-muted"
                    />

                    <FontAwesomeIcon
                      icon={faChevronDown}
                      size="sm"
                      className="text-muted acc-chevron"
                    />
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body className="px-3">
                <p className="text-muted small mb-0">{employee?.about ?? ''}</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {/* Bank Information */}
          <Accordion className="mb-4 bg-white text-black border rounded-1 py-2 border-1 border-gray-200">
            <Accordion.Item eventKey="bank_information" className="border-0">
              <Accordion.Header className="px-3">
                <div className="d-flex align-items-center justify-content-between w-100">
                  <span>{t('bank_information')}</span>
                  <div className="d-flex align-items-center gap-2">
                    <FontAwesomeIcon
                      icon={faEdit}
                      size="xs"
                      className="text-muted"
                    />

                    <FontAwesomeIcon
                      icon={faChevronDown}
                      size="sm"
                      className="text-muted acc-chevron"
                    />
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body className="px-3">
                <p className="text-muted small mb-0">{employee?.about ?? ''}</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {/* Family Information */}
          <Accordion className="mb-4 bg-white text-black border rounded-1 py-2 border-1 border-gray-200">
            <Accordion.Item eventKey="family_information" className="border-0">
              <Accordion.Header className="px-3">
                <div className="d-flex align-items-center justify-content-between w-100">
                  <span>{t('family_information')}</span>
                  <div className="d-flex align-items-center gap-2">
                    <FontAwesomeIcon
                      icon={faEdit}
                      size="xs"
                      className="text-muted"
                    />

                    <FontAwesomeIcon
                      icon={faChevronDown}
                      size="sm"
                      className="text-muted acc-chevron"
                    />
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body className="px-3">
                <p className="text-muted small mb-0">{employee?.about ?? ''}</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {/* Statutory Information */}
          <Accordion className="mb-4 bg-white text-black border rounded-1 py-2 border-1 border-gray-200">
            <Accordion.Item
              eventKey="statutory_information"
              className="border-0"
            >
              <Accordion.Header className="px-3">
                <div className="d-flex align-items-center justify-content-between w-100">
                  <span>{t('statutory_information')}</span>
                  <div className="d-flex align-items-center gap-2">
                    <FontAwesomeIcon
                      icon={faEdit}
                      size="xs"
                      className="text-muted"
                    />

                    <FontAwesomeIcon
                      icon={faChevronDown}
                      size="sm"
                      className="text-muted acc-chevron"
                    />
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body className="px-3">
                <p className="text-muted small mb-0">{employee?.about ?? ''}</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {/* Supporting Documents */}
          <Accordion className="mb-4 bg-white text-black border rounded-1 py-2 border-1 border-gray-200">
            <Accordion.Item
              eventKey="supporting_documents"
              className="border-0"
            >
              <Accordion.Header className="px-3">
                <div className="d-flex align-items-center justify-content-between w-100">
                  <span>{t('supporting_documents')}</span>
                  <div className="d-flex align-items-center gap-2">
                    <FontAwesomeIcon
                      icon={faEdit}
                      size="xs"
                      className="text-muted"
                    />

                    <FontAwesomeIcon
                      icon={faChevronDown}
                      size="sm"
                      className="text-muted acc-chevron"
                    />
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body className="px-3">
                <p className="text-muted small mb-0">{employee?.about ?? ''}</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Row>
            {/* Education */}
            <Col xs={12} md={6}>
              <Accordion className="mb-4 bg-white text-black border rounded-1 py-2 border-1 border-gray-200">
                <Accordion.Item eventKey="education" className="border-0">
                  <Accordion.Header className="px-3">
                    <div className="d-flex align-items-center justify-content-between w-100">
                      <span>{t('education')}</span>
                      <div className="d-flex align-items-center gap-2">
                        <FontAwesomeIcon
                          icon={faEdit}
                          size="xs"
                          className="text-muted"
                        />

                        <FontAwesomeIcon
                          icon={faChevronDown}
                          size="sm"
                          className="text-muted acc-chevron"
                        />
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-3">
                    <p className="text-muted small mb-0">
                      {employee?.about ?? ''}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            {/* Experience */}
            <Col xs={12} md={6}>
              <Accordion className="mb-4 bg-white text-black border rounded-1 py-2 border-1 border-gray-200">
                <Accordion.Item eventKey="experience" className="border-0">
                  <Accordion.Header className="px-3">
                    <div className="d-flex align-items-center justify-content-between w-100">
                      <span>{t('experience')}</span>
                      <div className="d-flex align-items-center gap-2">
                        <FontAwesomeIcon
                          icon={faEdit}
                          size="xs"
                          className="text-muted"
                        />

                        <FontAwesomeIcon
                          icon={faChevronDown}
                          size="sm"
                          className="text-muted acc-chevron"
                        />
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-3">
                    <p className="text-muted small mb-0">
                      {employee?.about ?? ''}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeDetailsPage;
