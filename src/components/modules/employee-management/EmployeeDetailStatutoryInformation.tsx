import React from 'react';
import { Accordion } from 'react-bootstrap';
import {
  TEmployee,
  TEmployeeDocumentList,
  TEmployeeDocumentName
} from '@/types/modules/employee-management/employee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import EmployeeDetailTable, {
  employeeDocumentTableColumns
} from './table/EmployeeDetailTable';
import AdvanceTableProvider from '@/providers/AdvanceTableProvider';
import useAdvanceTable, { UseAdvanceTableProps } from '@/hooks/useAdvanceTable';

interface EmployeeDetailStatutoryInformationProps {
  employee: TEmployee;
  onStatutoryInformationEdit: () => void;
}

const EmployeeDetailStatutoryInformation = ({
  employee,
  onStatutoryInformationEdit
}: EmployeeDetailStatutoryInformationProps) => {
  // React Hooks
  const { t } = useTranslation();

  // Use Memos
  const statutoryInformationData = React.useMemo(() => {
    return Object.entries(employee?.statutory_information ?? {})?.map(
      ([key, data]) => ({
        ...data,
        document_name: key as TEmployeeDocumentName
      })
    );
  }, [employee]);

  // Table
  const mappedTable = () => {
    const tempTable: UseAdvanceTableProps<TEmployeeDocumentList> = {
      data: statutoryInformationData || [],
      columns: employeeDocumentTableColumns(),
      sortable: true
    };
    return tempTable;
  };
  const table = useAdvanceTable(mappedTable());

  return (
    <Accordion className="mb-4 bg-white text-black border rounded-1 py-2 border-1 border-gray-200">
      <Accordion.Item eventKey="statutory_information" className="border-0">
        <Accordion.Header className="px-3">
          <div className="d-flex align-items-center justify-content-between w-100">
            <span>{t('statutory_information')}</span>
            <div className="d-flex align-items-center gap-2">
              <FontAwesomeIcon
                icon={faEdit}
                size="xs"
                className="text-muted hover-text-success"
                onClick={(e: React.MouseEvent<SVGSVGElement>) => {
                  e.stopPropagation();
                  onStatutoryInformationEdit();
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
          <AdvanceTableProvider {...table}>
            <div>
              <EmployeeDetailTable loader={false} />
            </div>
          </AdvanceTableProvider>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default EmployeeDetailStatutoryInformation;
