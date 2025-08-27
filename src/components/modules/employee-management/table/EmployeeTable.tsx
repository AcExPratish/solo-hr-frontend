import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import { useTranslation } from 'react-i18next';
import ActionTableItems from '@/components/common/ActionTableItems';
import { checkScope } from '@/helpers/auth';
import { getUserFirstAndLastName } from '@/helpers/utils';
import SafeImage from '@/components/common/SafeImage';
import { storageEndpoint } from '@/helpers/common';
import { TEmployee } from '@/types/modules/employee-management/employee';
import { convertTimestampToHumanDate } from '@/helpers/date';
import Badge from '@/components/base/Badge';
import avatar from 'assets/img/team/40x40/avatar.webp';

interface employeeTableColumnsProps {
  onView?: (data: TEmployee, show: boolean) => void;
  onEdit?: (data: TEmployee) => void;
  onDelete?: (data: TEmployee) => void;
}

export const employeeTableColumns = ({
  onView,
  onEdit,
  onDelete
}: employeeTableColumnsProps) => {
  // eslint-disable-next-line
  const { t }: { t: any } = useTranslation();
  const columns: ColumnDef<TEmployee>[] = [
    {
      header: `${t('emp_id')}`,
      accessorKey: 'id',
      cell: original => {
        const { row } = original;
        return <span>{row?.original?.id}</span>;
      },
      meta: {
        cellProps: { className: 'text-body' },
        headerProps: { style: { width: '5%' }, className: '' }
      }
    },
    {
      header: `${t('name')}`,
      accessorKey: 'name',
      cell: original => {
        const { row } = original;
        return (
          <div
            title={getUserFirstAndLastName(row?.original) || ''}
            className="d-flex align-items-center justify-content-start text-truncate w-100"
          >
            <SafeImage
              src={
                row?.original?.avatar
                  ? `${storageEndpoint}/${row?.original?.avatar}`
                  : ''
              }
              className="me-2"
              size={'l'}
              errorImage={avatar}
            />
            <span className="fs-9 fw-semibold">
              {getUserFirstAndLastName(row?.original) || ''}
            </span>
          </div>
        );
      },
      meta: {
        cellProps: {
          className: 'text-body',
          style: {
            maxWidth: '200px'
          }
        },
        headerProps: { style: { width: '15%' }, className: '' }
      }
    },
    {
      header: `${t('email')}`,
      accessorKey: 'email',
      meta: {
        cellProps: { className: 'text-body' },
        headerProps: { style: { width: '15%' }, className: '' }
      }
    },
    {
      header: `${t('phone')}`,
      accessorKey: 'phone',
      meta: {
        cellProps: { className: 'text-body' },
        headerProps: { style: { width: '15%' }, className: '' }
      }
    },
    {
      header: `${t('joining_date')}`,
      accessorKey: 'joining_date',
      cell: original => {
        const { row } = original;
        return (
          <span className="text-body">
            {convertTimestampToHumanDate(
              row?.original?.basic_information?.joining_date
            )}
          </span>
        );
      },
      meta: {
        cellProps: { className: 'text-body' },
        headerProps: { style: { width: '10%' }, className: '' }
      }
    },
    {
      header: `${t('status')}`,
      accessorKey: 'status',
      cell: original => {
        const { row } = original;
        return (
          <span className="text-body">
            <Badge
              variant="default"
              bg={row?.original?.deleted_at ? 'danger' : 'success'}
            >
              {row?.original?.deleted_at ? t('inactive') : t('active')}
            </Badge>
          </span>
        );
      },
      meta: {
        cellProps: { className: 'text-body' },
        headerProps: { style: { width: '5%' }, className: '' }
      }
    },
    {
      header: `Action`,
      id: 'action',
      cell: ({ row: { original } }) => {
        const row = original;

        // TODO: Add permission check for employee management
        return (
          <ActionTableItems
            data={row}
            onView={
              checkScope('users.view') ? () => onView?.(row, true) : undefined
            }
            onEdit={
              checkScope('users.update') ? () => onEdit?.(row) : undefined
            }
            onDelete={
              checkScope('users.delete') ? () => onDelete?.(row) : undefined
            }
          />
        );
      },
      meta: {
        headerProps: { style: { width: '10%' }, className: 'text-end' },
        cellProps: { className: 'text-end' }
      }
    }
  ];
  return columns;
};

interface EmployeeTableProps {
  loader?: boolean;
}

const EmployeeTable = ({ loader }: EmployeeTableProps) => {
  return (
    <div className="border-translucent">
      <AdvanceTable
        tableProps={{
          className: 'phoenix-table border-translucent fs-9'
        }}
        loader={loader}
      />
      <AdvanceTableFooter pagination />
    </div>
  );
};

export default EmployeeTable;
