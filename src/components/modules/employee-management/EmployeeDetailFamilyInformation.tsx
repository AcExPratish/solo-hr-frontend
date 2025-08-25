import React from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import { TEmployee } from '@/types/modules/employee-management/employee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

interface EmployeeDetailFamilyInformationProps {
  employee: TEmployee;
  onFamilyInformationEdit: () => void;
}

const EmployeeDetailFamilyInformation = ({
  employee,
  onFamilyInformationEdit
}: EmployeeDetailFamilyInformationProps) => {
  const { t } = useTranslation();

  return (
    <Accordion className="mb-4 bg-white text-black border rounded-1 py-2 border-1 border-gray-200">
      <Accordion.Item eventKey="family_information" className="border-0">
        <Accordion.Header className="px-3">
          <div className="d-flex align-items-center justify-content-between w-100">
            <span>{t('family_information')}</span>
            <div className="d-flex align-items-center gap-2">
              <FontAwesomeIcon
                icon={faEdit}
                size="xs"
                className="text-muted hover-text-success"
                onClick={(e: React.MouseEvent<SVGSVGElement>) => {
                  e.stopPropagation();
                  onFamilyInformationEdit();
                }}
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
          <Row className="d-flex flex-column gap-2">
            {/* Table Header */}
            <Row>
              <Col xs={3} className="text-muted fw-semibold small">
                {t('name')}
              </Col>
              <Col xs={3} className="text-muted fw-semibold small">
                {t('relationship')}
              </Col>
              <Col xs={3} className="text-muted fw-semibold small">
                {t('phone')}
              </Col>
              <Col xs={3} className="text-muted fw-semibold small">
                {t('alternative_phone')}
              </Col>
            </Row>

            {/* Table Body */}
            {employee?.family_information?.map((data, index: number) => (
              <Row key={index}>
                <Col xs={3}>
                  <h6 className="small">{data?.name ?? ''}</h6>
                </Col>
                <Col xs={3}>
                  <h6 className="small">{data?.relationship ?? ''}</h6>
                </Col>
                <Col xs={3}>
                  <h6 className="small">{data?.phone_1 ?? ''}</h6>
                </Col>
                <Col xs={3}>
                  <h6 className="small">{data?.phone_2 ?? ''}</h6>
                </Col>
              </Row>
            ))}
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default EmployeeDetailFamilyInformation;
