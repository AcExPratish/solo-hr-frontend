import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import { convertTimestamp } from '../../../../helpers/date';
import { useTranslation } from 'react-i18next';
import ActionTableItems from '../../../common/ActionTableItems';
import { checkScope } from '../../../../helpers/auth';
import { TRole } from '@/types/modules/user-management/role';

interface roleTableColumnsProps {
  onView?: (data: TRole, show: boolean) => void;
  onEdit?: (data: TRole) => void;
  onDelete?: (data: TRole) => void;
}

export const roleTableColumns = ({
  onView,
  onEdit,
  onDelete
}: roleTableColumnsProps) => {
  // eslint-disable-next-line
  const { t }: { t: any } = useTranslation();
  const columns: ColumnDef<TRole>[] = [
    {
      header: `${t('sn')}`,
      accessorKey: 'id',
      cell: original => {
        const { row } = original;
        return <span>{row.index + 1}</span>;
      },
      meta: {
        cellProps: { className: 'text-body' },
        headerProps: { style: { width: '2%' }, className: '' }
      }
    },
    {
      accessorKey: 'name',
      header: `${t('name')}`,
      cell: original => {
        const { row } = original;
        return (
          <span
            title={row?.original?.name || ''}
            className="d-inline-block text-truncate w-100"
          >
            {row?.original?.name || ''}
          </span>
        );
      },
      meta: {
        cellProps: {
          className: 'text-body',
          style: {
            maxWidth: '100px'
          }
        },
        headerProps: { style: { width: '5%' }, className: '' }
      }
    },
    {
      accessorKey: 'updated_at',
      header: `${t('date')}`,
      cell: original => {
        const { row } = original;
        return <span>{convertTimestamp(row.original.updated_at)}</span>;
      },
      meta: {
        cellProps: { className: 'text-body' },
        headerProps: { style: { width: '12%' }, className: '' }
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
              checkScope('roles.view') ? () => onView?.(row, true) : undefined
            }
            onEdit={
              checkScope('roles.update') ? () => onEdit?.(row) : undefined
            }
            onDelete={
              checkScope('roles.delete') ? () => onDelete?.(row) : undefined
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

interface RoleTableProps {
  loader?: boolean;
}

const RoleTable = ({ loader }: RoleTableProps) => {
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

export default RoleTable;
