import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft
  // , faEllipsisV
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const EmployeeDetailHeader = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Row className="mb-4">
      <Col>
        <Button
          variant="link"
          className="p-0 text-dark hover-text-success text-decoration-none"
          onClick={() => navigate(-1)}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
          {t('employee_details')}
        </Button>
      </Col>
      {/* <Col xs="auto">
        <Button variant="success" size="sm">
          <FontAwesomeIcon icon={faEllipsisV} className="me-2" />
          {t('bank_and_statutory')}
        </Button>
      </Col> */}
    </Row>
  );
};

export default EmployeeDetailHeader;
