import React from 'react';
import { Accordion } from 'react-bootstrap';
import { TEmployee } from '@/types/modules/employee-management/employee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

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
          <p className="text-muted small mb-0">{employee?.about ?? ''}</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default EmployeeDetailExperience;
