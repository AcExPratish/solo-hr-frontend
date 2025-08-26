import React from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import { TEmployee } from '@/types/modules/employee-management/employee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { convertToMonAbbrevDate } from '@/helpers/date';

interface EmployeeDetailExperienceProps {
  employee: TEmployee;
  onExperienceEdit: () => void;
}

const EmployeeDetailExperience = ({
  employee,
  onExperienceEdit
}: EmployeeDetailExperienceProps) => {
  const { t } = useTranslation();

  return (
    <Accordion className="mb-4 bg-white text-black border rounded-1 py-2 border-1 border-gray-200">
      <Accordion.Item eventKey="experience" className="border-0">
        <Accordion.Header className="px-3">
          <div className="d-flex align-items-center justify-content-between w-100">
            <span>{t('experience')}</span>
            <div className="d-flex align-items-center gap-2">
              <FontAwesomeIcon
                icon={faEdit}
                size="xs"
                className="text-muted hover-text-success"
                onClick={(e: React.MouseEvent<SVGSVGElement>) => {
                  e.stopPropagation();
                  onExperienceEdit();
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
          {employee?.experience?.map((data, index: number) => (
            <Row
              key={index}
              className="d-flex align-items-center justify-content-between pb-3"
            >
              <Col
                xs={12}
                md={6}
                className="d-flex flex-row flex-md-column align-items-start justify-content-between"
              >
                <div className="d-flex flex-column gap-1">
                  <span className="text-muted fw-semibold small">
                    {data?.company_name ?? ''}
                  </span>
                  <h6 className="small">{data?.designation ?? ''}</h6>
                </div>
              </Col>

              <Col xs={12} md={6}>
                <div className="d-flex align-items-center gap-1 justify-content-end">
                  <span className="text-muted fw-semibold small">
                    {convertToMonAbbrevDate(data?.start_date)}
                  </span>

                  {data?.is_current && (
                    <span className="text-muted fw-semibold small">
                      {` - ${t('present')}`}
                    </span>
                  )}

                  {!data?.is_current && data?.end_date && (
                    <span className="text-muted fw-semibold small">
                      {` - ${convertToMonAbbrevDate(data?.end_date)}`}
                    </span>
                  )}
                </div>
              </Col>
            </Row>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default EmployeeDetailExperience;
