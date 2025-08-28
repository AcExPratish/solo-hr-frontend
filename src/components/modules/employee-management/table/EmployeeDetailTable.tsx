import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import {
  TEmployeeDocumentList,
  TEmployeeFamilyInformation
} from '@/types/modules/employee-management/employee';
import TooltipIconButton from '@/components/common/TooltipIconButton';
import { verificationStatusOptions } from '@/data';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import i18next from 'i18next';
const t = i18next.t;

export const employeeFamilyInformationTableColumns = () => {
  const columns: ColumnDef<TEmployeeFamilyInformation>[] = [
    {
      header: `${t('name')}`,
      accessorKey: 'name',
      meta: {
        cellProps: { className: 'text-body' },
        headerProps: { style: { width: '15%' }, className: '' }
      },
      cell: original => {
        const { row } = original;
        return <span>{row?.original?.name ?? ''}</span>;
      }
    },
    {
      header: `${t('relationship')}`,
      accessorKey: 'relationship',
      cell: original => {
        const { row } = original;
        return <span>{row?.original?.relationship ?? ''}</span>;
      },
      meta: {
        cellProps: { className: 'text-body' },
        headerProps: { style: { width: '5%' }, className: '' }
      }
    },
    {
      header: `${t('phone')}`,
      accessorKey: 'phone_1',
      meta: {
        cellProps: { className: 'text-body' },
        headerProps: { style: { width: '15%' }, className: '' }
      },
      cell: original => {
        const { row } = original;
        return <span>{row?.original?.phone_1 ?? ''}</span>;
      }
    },
    {
      header: `${t('alternative_phone')}`,
      accessorKey: 'phone_2',
      meta: {
        cellProps: { className: 'text-body' },
        headerProps: { style: { width: '15%' }, className: '' }
      },
      cell: original => {
        const { row } = original;
        return <span>{row?.original?.phone_2 ?? ''}</span>;
      }
    }
  ];
  return columns;
};

export const employeeDocumentTableColumns = () => {
  const columns: ColumnDef<TEmployeeDocumentList>[] = [
    {
      header: `${t('document_name')}`,
      accessorKey: 'document_name',
      meta: {
        cellProps: { className: 'text-body' },
        headerProps: { style: { width: '15%' }, className: '' }
      },
      cell: original => {
        const { row } = original;
        return <span>{t(row?.original?.document_name ?? '')}</span>;
      }
    },
    {
      header: `${t('id_number')}`,
      accessorKey: 'id_number',
      cell: original => {
        const { row } = original;
        return <span>{row?.original?.id_number ?? ''}</span>;
      },
      meta: {
        cellProps: { className: 'text-body' },
        headerProps: { style: { width: '5%' }, className: '' }
      }
    },
    {
      header: `${t('issue_date')}`,
      accessorKey: 'issue_date',
      meta: {
        cellProps: { className: 'text-body' },
        headerProps: { style: { width: '15%' }, className: '' }
      },
      cell: original => {
        const { row } = original;
        return <span>{row?.original?.issue_date ?? ''}</span>;
      }
    },
    {
      header: `${t('expiry_date')}`,
      accessorKey: 'expiry_date',
      meta: {
        cellProps: { className: 'text-body' },
        headerProps: { style: { width: '15%' }, className: '' }
      },
      cell: original => {
        const { row } = original;
        return <span>{row?.original?.expiry_date ?? ''}</span>;
      }
    },
    {
      header: `${t('status')}`,
      accessorKey: 'status',
      cell: original => {
        const { row } = original;
        return (
          <TooltipIconButton
            title={
              verificationStatusOptions?.find(
                item => item?.value === row?.original?.verification_status
              )?.label ?? ''
            }
            icon={faCheckCircle}
            iconClass={`${verificationStatusOptions?.find(
              item => item?.value === row?.original?.verification_status
            )?.color} fs-8`}
          />
        );
      },
      meta: {
        cellProps: { className: 'text-body' },
        headerProps: { style: { width: '5%' }, className: '' }
      }
    }
  ];
  return columns;
};

interface EmployeeDetailTableProps {
  loader?: boolean;
}

const EmployeeDetailTable = ({ loader }: EmployeeDetailTableProps) => {
  return (
    <div className="border-translucent">
      <AdvanceTable
        tableProps={{
          className: 'phoenix-table border-translucent fs-9'
        }}
        loader={loader}
      />
    </div>
  );
};

export default EmployeeDetailTable;
