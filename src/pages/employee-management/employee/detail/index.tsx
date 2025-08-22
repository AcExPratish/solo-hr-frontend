import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Accordion,
  Nav
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faEdit,
  faEnvelope,
  faPhone,
  faCalendar,
  faMapMarker,
  faUser,
  faIdCard,
  faPassport,
  faGlobe,
  faChurch,
  faHeart,
  faBriefcase,
  faChild,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useTranslation } from 'react-i18next';

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
}

interface Project {
  name: string;
  tasks: number;
  completed: number;
  deadline: string;
  projectLead: string;
  leadAvatar: string;
  icon: string;
}

const EmployeeDetailsPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<string>('projects');

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
      'As an award winning designer, I deliver exceptional quality work and bring value to your brand! With 10 years of experience and 350+ projects completed worldwide with satisfied customers, I developed the 360° brand approach, which helped me to create numerous brands that are relevant, meaningful and loved.'
  };

  const projects: Project[] = [
    {
      name: 'World Health',
      tasks: 8,
      completed: 15,
      deadline: '31 July 2025',
      projectLead: 'Leona',
      leadAvatar: 'L',
      icon: 'W'
    },
    {
      name: 'Hospital Administration',
      tasks: 8,
      completed: 15,
      deadline: '31 July 2025',
      projectLead: 'Leona',
      leadAvatar: 'L',
      icon: 'H'
    }
  ];

  const InfoRow: React.FC<{
    icon: IconProp;
    label: string;
    value: string;
    isLink?: boolean;
  }> = ({ icon, label, value, isLink = false }) => (
    <Row className="mb-2 align-items-center">
      <Col xs={1}>
        <FontAwesomeIcon icon={icon} className="text-muted" size="sm" />
      </Col>
      <Col xs={4} className="text-muted small">
        {label}
      </Col>
      <Col xs={7} className={`small ${isLink ? 'text-primary' : ''}`}>
        {value}
      </Col>
    </Row>
  );

  return (
    <Container fluid className="min-vh-100">
      {/* Header */}
      <Row className="mb-4">
        <Col>
          <Button
            variant="link"
            className="p-0 text-dark"
            onClick={() => navigate(-1)}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
            {t('employee_details')}
          </Button>
        </Col>
        <Col xs="auto">
          <Button variant="success" size="sm">
            <FontAwesomeIcon icon={faEllipsisV} className="me-2" />
            {t('bank_and_statutory')}
          </Button>
        </Col>
      </Row>

      <Row>
        {/* Left Column */}
        <Col lg={4} className="mb-4">
          {/* Profile Card */}
          <Card className="mb-4">
            <div
              className="bg-success"
              style={{ height: '120px', position: 'relative' }}
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
              <h5 className="mb-1">{employee.name}</h5>
              <Badge bg="success" className="me-2">
                <FontAwesomeIcon icon={faUser} className="me-1" />
                {employee.position}
              </Badge>
              <Badge bg="light" text="dark">
                {employee.experience}
              </Badge>
            </Card.Body>
          </Card>

          {/* Basic Info */}
          <Card className="mb-4">
            <Card.Body>
              <InfoRow
                icon={faIdCard}
                label="Client ID"
                value={employee.clientId}
              />
              <InfoRow icon={faUser} label="Team" value={employee.team} />
              <InfoRow
                icon={faCalendar}
                label="Date Of Join"
                value={employee.dateOfJoin}
              />
              <InfoRow
                icon={faBriefcase}
                label="Report Office"
                value={employee.reportOffice}
              />
            </Card.Body>
          </Card>

          {/* Action Buttons */}
          <Row className="mb-4">
            <Col>
              <Button variant="dark" className="w-100">
                <FontAwesomeIcon icon={faEdit} className="me-2" />
                Edit Info
              </Button>
            </Col>
            <Col>
              <Button variant="success" className="w-100">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                Message
              </Button>
            </Col>
          </Row>

          {/* Basic Information */}
          <Card className="mb-4">
            <Card.Header className="bg-white border-bottom">
              <h6 className="mb-0">Basic Information</h6>
            </Card.Header>
            <Card.Body>
              <InfoRow icon={faPhone} label="Phone" value={employee.phone} />
              <InfoRow
                icon={faEnvelope}
                label="Email"
                value={employee.email}
                isLink
              />
              <InfoRow icon={faUser} label="Gender" value={employee.gender} />
              <InfoRow
                icon={faCalendar}
                label="Birthday"
                value={employee.birthday}
              />
              <InfoRow
                icon={faMapMarker}
                label="Address"
                value={employee.address}
              />
            </Card.Body>
          </Card>

          {/* Personal Information */}
          <Card>
            <Card.Header className="bg-white border-bottom">
              <h6 className="mb-0">Personal Information</h6>
            </Card.Header>
            <Card.Body>
              <InfoRow
                icon={faPassport}
                label="Passport No"
                value={employee.passportNo}
              />
              <InfoRow
                icon={faCalendar}
                label="Passport Exp Date"
                value={employee.passportExpDate}
              />
              <InfoRow
                icon={faGlobe}
                label="Nationality"
                value={employee.nationality}
              />
              <InfoRow
                icon={faChurch}
                label="Religion"
                value={employee.religion}
              />
              <InfoRow
                icon={faHeart}
                label="Marital status"
                value={employee.maritalStatus}
              />
              <InfoRow
                icon={faBriefcase}
                label="Employment of spouse"
                value={employee.employmentOfSpouse}
              />
              <InfoRow
                icon={faChild}
                label="No. of children"
                value={employee.noOfChildren.toString()}
              />
            </Card.Body>
          </Card>
        </Col>

        {/* Right Column */}
        <Col lg={8}>
          {/* About Employee */}
          <Accordion className="mb-4" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>About Employee</Accordion.Header>
              <Accordion.Body>
                <p className="text-muted mb-0">{employee.about}</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {/* Bank Information */}
          <Accordion className="mb-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Bank Information</Accordion.Header>
              <Accordion.Body>
                <p className="text-muted">
                  Bank information details would go here...
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {/* Family Information */}
          <Accordion className="mb-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Family Information</Accordion.Header>
              <Accordion.Body>
                <p className="text-muted">
                  Family information details would go here...
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {/* Education and Experience */}
          <Row className="mb-4">
            <Col md={6}>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Education Details</Accordion.Header>
                  <Accordion.Body>
                    <p className="text-muted">
                      Education details would go here...
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col md={6}>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Experience</Accordion.Header>
                  <Accordion.Body>
                    <p className="text-muted">
                      Experience details would go here...
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>

          {/* Projects and Assets */}
          <Card>
            <Card.Header className="bg-white border-bottom">
              <Nav variant="tabs" defaultActiveKey="projects">
                <Nav.Item>
                  <Nav.Link
                    eventKey="projects"
                    className={
                      activeTab === 'projects'
                        ? 'text-success border-success'
                        : ''
                    }
                    onClick={() => setActiveTab('projects')}
                  >
                    Projects
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="assets"
                    className={
                      activeTab === 'assets'
                        ? 'text-success border-success'
                        : ''
                    }
                    onClick={() => setActiveTab('assets')}
                  >
                    Assets
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              {activeTab === 'projects' && (
                <Row>
                  {projects.map((project, index) => (
                    <Col md={6} key={index} className="mb-3">
                      <Card className="h-100">
                        <Card.Body>
                          <div className="d-flex align-items-center mb-3">
                            <div
                              className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                              style={{ width: '40px', height: '40px' }}
                            >
                              {project.icon}
                            </div>
                            <div>
                              <h6 className="mb-1">{project.name}</h6>
                              <small className="text-muted">
                                {project.tasks} tasks • {project.completed}{' '}
                                Completed
                              </small>
                            </div>
                          </div>

                          <Row className="align-items-center">
                            <Col xs={4} className="small text-muted">
                              Deadline
                            </Col>
                            <Col xs={8} className="small">
                              {project.deadline}
                            </Col>
                          </Row>

                          <Row className="align-items-center mt-2">
                            <Col xs={4} className="small text-muted">
                              Project Lead
                            </Col>
                            <Col xs={8} className="d-flex align-items-center">
                              <div
                                className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center me-2"
                                style={{
                                  width: '24px',
                                  height: '24px',
                                  fontSize: '12px'
                                }}
                              >
                                {project.leadAvatar}
                              </div>
                              <small>{project.projectLead}</small>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              )}

              {activeTab === 'assets' && (
                <p className="text-muted text-center py-4">
                  Assets information would be displayed here...
                </p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeDetailsPage;
