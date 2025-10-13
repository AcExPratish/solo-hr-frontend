import React from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import {
  TEmployee,
  TEmployeeBankInformation
} from '@/types/modules/employee-management/employee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { bankInformationOptions } from '@/data/employee';
import { TReactOption } from '@/types/modules';

interface EmployeeDetailBankInformationProps {
  employee: TEmployee;
  onBankInformationEdit: () => void;
}

const EmployeeDetailBankInformation = ({
  employee,
  onBankInformationEdit
}: EmployeeDetailBankInformationProps) => {
  const { t } = useTranslation();

  return (
    <Accordion className="mb-4 bg-white text-black border rounded-1 py-2 border-1 border-gray-200">
      <Accordion.Item eventKey="bank_information" className="border-0">
        <Accordion.Header className="px-3">
          <div className="d-flex align-items-center justify-content-between w-100">
            <span>{t('bank_information')}</span>
            <div className="d-flex align-items-center gap-2">
              <FontAwesomeIcon
                icon={faEdit}
                size="xs"
                className="text-muted hover-text-success"
                onClick={(e: React.MouseEvent<SVGSVGElement>) => {
                  e.stopPropagation();
                  onBankInformationEdit();
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
          <Row className="d-flex flex-wrap gap-3 gap-md-0">
            {bankInformationOptions?.map(
              (option: TReactOption, index: number) => (
                <Col key={index} xs={12} md={2} className="d-flex flex-column">
                  <span className="text-muted fw-semibold small">
                    {t(option?.value as string)}
                  </span>
                  <h6 className="small">
                    {employee?.bank_information?.[
                      option?.value as keyof TEmployeeBankInformation
                    ] ?? ''}
                  </h6>
                </Col>
              )
            )}
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default EmployeeDetailBankInformation;
