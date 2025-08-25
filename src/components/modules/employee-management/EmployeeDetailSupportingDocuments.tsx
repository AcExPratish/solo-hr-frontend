import React from 'react';
import { Accordion } from 'react-bootstrap';
import { TEmployee } from '@/types/modules/employee-management/employee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

interface EmployeeDetailSupportingDocumentsProps {
  employee: TEmployee;
  onSupportingDocumentsEdit: () => void;
}

const EmployeeDetailSupportingDocuments = ({
  employee,
  onSupportingDocumentsEdit
}: EmployeeDetailSupportingDocumentsProps) => {
  const { t } = useTranslation();

  return (
    <Accordion className="mb-4 bg-white text-black border rounded-1 py-2 border-1 border-gray-200">
      <Accordion.Item eventKey="supporting_documents" className="border-0">
        <Accordion.Header className="px-3">
          <div className="d-flex align-items-center justify-content-between w-100">
            <span>{t('supporting_documents')}</span>
            <div className="d-flex align-items-center gap-2">
              <FontAwesomeIcon
                icon={faEdit}
                size="xs"
                className="text-muted hover-text-success"
                onClick={(e: React.MouseEvent<SVGSVGElement>) => {
                  e.stopPropagation();
                  onSupportingDocumentsEdit();
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
          <p className="text-muted small mb-0">
            {employee?.basic_information?.about ?? ''}
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default EmployeeDetailSupportingDocuments;
