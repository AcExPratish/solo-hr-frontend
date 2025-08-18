import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { genderOptions } from '@/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { TEmployee } from '@/types/modules/employee';
import { getUserFirstAndLastName } from '@/helpers/utils';
import { convertToDate } from '@/helpers/date';

interface OnboardingStepInfoProps {
  gender?: string;
  employeeDetail: TEmployee;
  stage: string;
}

const OnboardingStepInfo = ({
  employeeDetail,
  stage
}: OnboardingStepInfoProps) => {
  // eslint-disable-next-line
  const { t }: { t: any } = useTranslation();

  return (
    <Card className="border-0 shadow rounded-3 overflow-hidden">
      <Card.Body className="bg-gradient--blue">
        <div className="d-flex align-items-center gap-3">
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="text-success fw-bold mb-1 fs-10 text-uppercase">
                {t(stage)}
              </p>
            </div>

            <div className="d-flex align-items-center gap-2 mb-2">
              <h3 className="fw-bolder mb-0 text-uppercase fs-8">
                {getUserFirstAndLastName(employeeDetail)}
              </h3>
            </div>

            <Row className="g-1">
              <Col md={12}>
                <div>
                  <FontAwesomeIcon
                    icon={faUser}
                    fontSize={16}
                    className="me-2 text-body-quaternary"
                  />
                  <span className="fs-9">
                    {genderOptions?.find(
                      gender => gender?.value === employeeDetail?.gender
                    )?.label ?? ''}
                  </span>
                </div>
              </Col>
              <Col md={12}>
                <div>
                  <FontAwesomeIcon
                    icon={faCalendar}
                    fontSize={16}
                    className="me-2 text-body-quaternary"
                  />

                  <span className="fs-9">
                    {convertToDate(employeeDetail?.date_of_birth) ?? ''}
                  </span>
                </div>
              </Col>
              <Col md={12}>
                <div>
                  <FontAwesomeIcon
                    icon={faPhone}
                    fontSize={16}
                    className="me-2 text-body-quaternary"
                  />
                  <span className="fs-9">{employeeDetail?.phone ?? ''}</span>
                </div>
              </Col>
              <Col md={12}>
                <div>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    fontSize={16}
                    className="me-2 text-body-quaternary"
                  />
                  <span className="fs-9">{employeeDetail?.email ?? ''}</span>
                </div>
              </Col>
              <Col md={12}>
                <div>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    fontSize={16}
                    className="me-2 text-body-quaternary"
                  />
                  <span className="fs-9">{employeeDetail?.address ?? ''}</span>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
export default OnboardingStepInfo;
