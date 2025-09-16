import React from 'react';
import {
  faBriefcase,
  faCalendar,
  faChurch,
  faEdit,
  faEnvelope,
  faGlobe,
  faHeart,
  faIdCard,
  faLocationDot,
  faPhone,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import { TEmployee } from '@/types/modules/employee-management/employee';
import { useTranslation } from 'react-i18next';
import { getUserFirstAndLastName } from '@/helpers/utils';
import {
  designationMockData as designations,
  departmentMockData as departments
} from '@/data/mock-data';
import { calculateTotalExperience } from '@/helpers/utils';
import { InfoRow } from '@/components/common/InfoRow';
import { formatDateForDisplay } from '@/helpers/date';
import SafeImage from '@/components/common/SafeImage';
import { storageEndpoint } from '@/helpers/common';
import { genderOptions, maritalStatusOptions } from '@/data';
import Button from '@/components/base/Button';
import avatar from 'assets/img/team/40x40/avatar.webp';

interface TEmployeeDetailProfileProps {
  employee: TEmployee;
  onBasicInfoEdit: () => void;
  onPersonalInfoEdit: () => void;
}

const EmployeeDetailProfile = ({
  employee,
  onBasicInfoEdit,
  onPersonalInfoEdit
}: TEmployeeDetailProfileProps) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
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
            <SafeImage
              size="xl"
              className="text-success"
              src={
                employee?.avatar ? `${storageEndpoint}/${employee?.avatar}` : ''
              }
              errorImage={avatar}
            />
          </div>
        </div>

        <Card.Body className="text-center pt-5">
          {/* Name and Position */}
          <Row className="d-flex align-items-center justify-content-center gap-2 mt-3">
            <Col xs={12}>
              <h5 className="mb-1">
                {getUserFirstAndLastName(employee ?? '')}
              </h5>
            </Col>

            <Col
              xs={12}
              className="d-flex flex-column flex-sm-row flex-wrap align-items-center justify-content-center gap-2"
            >
              <Badge bg="success">
                <FontAwesomeIcon icon={faUser} className="me-1" />
                {designations?.find(
                  designation =>
                    designation?.id ===
                    employee?.basic_information?.designation_id
                )?.name ?? ''}
              </Badge>

              <Badge bg="light" text="dark">
                {calculateTotalExperience(employee?.experience ?? []).years}
                <span className="ms-1">{t('years_of_experience')}</span>
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
                value={
                  departments?.find(
                    department =>
                      department?.id ===
                      employee?.basic_information?.department_id
                  )?.name ?? ''
                }
              />
              <InfoRow
                icon={faCalendar}
                label={t('date_of_join')}
                value={formatDateForDisplay(
                  employee?.basic_information?.joining_date ?? ''
                )}
              />
              {/* <InfoRow
                    icon={faBriefcase}
                    label={t('report_office')}
                    value={employee?.reportOffice ?? ''}
                  /> */}
            </Col>
          </Row>

          {/* Buttons */}
          <Row className="mt-2">
            <Col xs={12} md={12} className="px-1">
              <Button
                variant="subtle-secondary"
                className="w-100"
                onClick={onBasicInfoEdit}
              >
                <FontAwesomeIcon icon={faEdit} />
                <span className="ms-2">{t('edit_info')}</span>
              </Button>
            </Col>

            {/* <Col xs={12} md={6} className="px-1">
              <Button variant="success" className="w-100">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="ms-2">{t('message')}</span>
              </Button>
            </Col> */}
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
                className="cursor-pointer hover-text-success"
                onClick={onBasicInfoEdit}
              />
            </Col>

            <Col xs={12}>
              <InfoRow
                icon={faPhone}
                label={t('phone')}
                value={employee?.phone ?? ''}
              />
              <InfoRow
                icon={faEnvelope}
                label={t('email')}
                value={employee?.email ?? ''}
                isLink
              />
              <InfoRow
                icon={faUser}
                label={t('gender')}
                value={
                  genderOptions?.find(
                    gender =>
                      gender?.value === employee?.basic_information?.gender
                  )?.label ?? ''
                }
              />
              <InfoRow
                icon={faCalendar}
                label={t('birthday')}
                value={formatDateForDisplay(
                  employee?.basic_information?.date_of_birth ?? ''
                )}
              />
              <InfoRow
                icon={faLocationDot}
                label={t('address')}
                value={employee?.basic_information?.address ?? ''}
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
                className="cursor-pointer hover-text-success"
                onClick={onPersonalInfoEdit}
              />
            </Col>

            <Col xs={12}>
              <InfoRow
                icon={faGlobe}
                label={t('nationality')}
                value={employee?.basic_information?.nationality ?? ''}
              />
              <InfoRow
                icon={faChurch}
                label={t('religion')}
                value={employee?.basic_information?.religion ?? ''}
              />
              <InfoRow
                icon={faHeart}
                label={t('marital_status')}
                value={
                  maritalStatusOptions?.find(
                    maritalStatus =>
                      maritalStatus?.value ===
                      employee?.basic_information?.marital_status
                  )?.label ?? ''
                }
              />
              <InfoRow
                icon={faBriefcase}
                label={t('employment_of_spouse')}
                value={employee?.basic_information?.employment_of_spouse ?? ''}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default EmployeeDetailProfile;
