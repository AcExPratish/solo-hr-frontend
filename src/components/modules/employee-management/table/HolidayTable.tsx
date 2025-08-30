import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import { useTranslation } from 'react-i18next';
import ActionTableItems from '@/components/common/ActionTableItems';
import { checkScope } from '@/helpers/auth';
import { THoliday } from '@/types/modules/employee-management/holiday';
import { convertToMonAbbrevDate } from '@/helpers/date';

interface HolidayTableColumnsProps {
  onView?: (data: THoliday, show: boolean) => void;
  onEdit?: (data: THoliday) => void;
  onDelete?: (data: THoliday) => void;
}

export const holidayTableColumns = ({
  onView,
  onEdit,
  onDelete
}: HolidayTableColumnsProps) => {
  // eslint-disable-next-line
  const { t }: { t: any } = useTranslation();
  const columns: ColumnDef<THoliday>[] = [
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
      header: `${t('title')}`,
      accessorKey: 'title',
      cell: original => {
        const { row } = original;
        return (
          <div
            title={row?.original?.title || ''}
            className="d-flex align-items-center justify-content-start text-truncate w-100"
          >
            <span className="fs-9 fw-semibold">
              {row?.original?.title || ''}
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
      header: `${t('description')}`,
      accessorKey: 'description',
      cell: original => {
        const { row } = original;
        return (
          <div
            title={row?.original?.description || ''}
            className="d-flex align-items-center justify-content-start text-truncate w-100"
          >
            <span className="fs-9 fw-semibold">
              {row?.original?.description || ''}
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
      header: `${t('date')}`,
      accessorKey: 'date',
      meta: {
        cellProps: { className: 'text-body' },
        headerProps: { style: { width: '15%' }, className: '' }
      },
      cell: original => {
        const { row } = original;
        return <span>{convertToMonAbbrevDate(row?.original?.date || '')}</span>;
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
            //TODO: Add permission for holiday management
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

interface HolidayTableProps {
  loader?: boolean;
}

const HolidayTable = ({ loader }: HolidayTableProps) => {
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

export default HolidayTable;
