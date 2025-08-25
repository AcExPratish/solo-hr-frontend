import React from 'react';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { TEmployee } from '@/types/modules/employee-management/employee';

interface TEmployeeDetailEmergencyContactProps {
  employee: TEmployee;
  onEmergencyContactEdit: () => void;
}

const EmployeeDetailEmergencyContact = ({
  employee,
  onEmergencyContactEdit
}: TEmployeeDetailEmergencyContactProps) => {
  // React Hooks
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Row className="mb-2 px-2">
        <Col
          xs={12}
          className="d-flex align-items-center justify-content-between"
        >
          <h6 className="mb-0">{t('emergency_contact_number')}</h6>
          <FontAwesomeIcon
            icon={faEdit}
            size="xs"
            className="cursor-pointer hover-text-success"
            onClick={(e: React.MouseEvent<SVGSVGElement>) => {
              e.stopPropagation();
              onEmergencyContactEdit();
            }}
          />
        </Col>
      </Row>

      <Card className="mb-4">
        <Card.Body className="text-center pt-5">
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
                  <div className="text-muted small">{data?.phone_1 ?? ''}</div>
                  <div className="text-muted small">{data?.phone_2 ?? ''}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default EmployeeDetailEmergencyContact;
