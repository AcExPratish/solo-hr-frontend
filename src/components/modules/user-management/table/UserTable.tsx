import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import { TUser } from '@/types/modules/user-management/user';
import { useTranslation } from 'react-i18next';
import ActionTableItems from '@/components/common/ActionTableItems';
import { checkScope } from '@/helpers/auth';
import { getUserFirstAndLastName } from '@/helpers/utils';
import SafeImage from '@/components/common/SafeImage';
import { storageEndpoint } from '@/helpers/common';
import avatar from 'assets/img/team/40x40/avatar.webp';

interface userTableColumnsProps {
  onView?: (data: TUser, show: boolean) => void;
  onEdit?: (data: TUser) => void;
  onDelete?: (data: TUser) => void;
}

export const userTableColumns = ({
  onView,
  onEdit,
  onDelete
}: userTableColumnsProps) => {
  // eslint-disable-next-line
  const { t }: { t: any } = useTranslation();
  const columns: ColumnDef<TUser>[] = [
    {
      header: `${t('sn')}`,
      accessorKey: 'id',
      cell: original => {
        const { row } = original;
        return <span>{row.index + 1}</span>;
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
      header: `Action`,
      id: 'action',
      cell: ({ row: { original } }) => {
        const row = original;

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

interface UserTableProps {
  loader?: boolean;
}

const UserTable = ({ loader }: UserTableProps) => {
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

export default UserTable;
