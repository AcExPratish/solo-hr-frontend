import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import { useTranslation } from 'react-i18next';
import ActionTableItems from '@/components/common/ActionTableItems';
import { checkScope } from '@/helpers/auth';
import { convertToMonAbbrevDate } from '@/helpers/date';
// import Badge from '@/components/base/Badge';
import { TLeave } from '@/types/modules/employee-management/leave';
import { getUserFirstAndLastName } from '@/helpers/utils';
import SafeImage from '@/components/common/SafeImage';
import { storageEndpoint } from '@/helpers/common';
import avatar from 'assets/img/team/40x40/avatar.webp';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import TooltipIconButton from '@/components/common/TooltipIconButton';
import useLeaveTypeHook from '@/hooks/modules/employee-management/useLeaveTypeHook';

interface LeaveTableColumnsProps {
  onView?: (data: TLeave, show: boolean) => void;
  onEdit?: (data: TLeave) => void;
  onDelete?: (data: TLeave) => void;
}

export const leaveAdminTableColumns = ({
  onView,
  onEdit,
  onDelete
}: LeaveTableColumnsProps) => {
  // eslint-disable-next-line
  const { t }: { t: any } = useTranslation();
  const { leaveTypes } = useLeaveTypeHook();

  // const badgeStatus = [
  //   {
  //     label: t('pending'),
  //     value: 'pending',
  //     badgeColor: 'secondary'
  //   },
  //   {
  //     label: t('approved'),
  //     value: 'approved',
  //     badgeColor: 'success'
  //   },
  //   {
  //     label: t('rejected'),
  //     value: 'rejected',
  //     badgeColor: 'danger'
  //   }
  // ];

  const columns: ColumnDef<TLeave>[] = [
    {
      header: `${t('employee')}`,
      accessorKey: 'user',
      cell: original => {
        const { row } = original;
        return (
          <div
            title={
              row?.original?.user
                ? getUserFirstAndLastName(row?.original?.user)
                : ''
            }
            className="d-flex align-items-center justify-content-start text-truncate w-100"
          >
            <SafeImage
              src={
                row?.original?.user?.avatar
                  ? `${storageEndpoint}/${row?.original?.user?.avatar}`
                  : ''
              }
              className="me-2"
              size={'l'}
              errorImage={avatar}
            />
            <span className="fs-9 fw-semibold">
              {row?.original?.user
                ? getUserFirstAndLastName(row?.original?.user)
                : ''}
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
      header: `${t('leave_type')}`,
      accessorKey: 'type',
      cell: original => {
        const { row } = original;
        return (
          <div
            title={
              leaveTypes?.find(
                data => data?.id === row?.original?.leave_type_id
              )?.name || ''
            }
            className="d-flex align-items-center justify-content-start text-truncate w-100"
          >
            <span className="fs-9 fw-semibold">
              {leaveTypes?.find(
                data => data?.id === row?.original?.leave_type_id
              )?.name || ''}
            </span>

            <TooltipIconButton
              title={
                leaveTypes?.find(
                  data => data?.id === row?.original?.leave_type_id
                )?.description || ''
              }
              icon={faInfo}
              iconClass={`ms-2 fs-10 text-info`}
            />
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
      header: `${t('from')}`,
      accessorKey: 'from',
      meta: {
        cellProps: { className: 'text-body' },
        headerProps: { style: { width: '15%' }, className: '' }
      },
      cell: original => {
        const { row } = original;
        return (
          <span>{convertToMonAbbrevDate(row?.original?.from_date || '')}</span>
        );
      }
    },
    {
      header: `${t('to')}`,
      accessorKey: 'to',
      meta: {
        cellProps: { className: 'text-body' },
        headerProps: { style: { width: '15%' }, className: '' }
      },
      cell: original => {
        const { row } = original;
        return (
          <span>{convertToMonAbbrevDate(row?.original?.to_date || '')}</span>
        );
      }
    },
    {
      header: `${t('no_of_days')}`,
      accessorKey: 'total_days',
      meta: {
        cellProps: { className: 'text-body' },
        headerProps: { style: { width: '15%' }, className: '' }
      },
      cell: original => {
        const { row } = original;
        return (
          <span>
            {row?.original?.total_days
              ? `${row?.original?.total_days} ${t('days')}`
              : ''}
          </span>
        );
      }
    },
    // {
    //   header: `${t('status')}`,
    //   accessorKey: 'status',
    //   meta: {
    //     cellProps: { className: 'text-body' },
    //     headerProps: { style: { width: '15%' }, className: '' }
    //   },
    //   cell: original => {
    //     const { row } = original;
    //     return (
    //       <Badge
    //         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //         //@ts-ignore
    //         bg={
    //           badgeStatus?.find(data => data?.value === row?.original?.status)
    //             ?.badgeColor || 'secondary'
    //         }
    //       >
    //         {badgeStatus?.find(data => data?.value === row?.original?.status)
    //           ?.label || 'pending'}
    //       </Badge>
    //     );
    //   }
    // },
    {
      header: `Action`,
      id: 'action',
      cell: ({ row: { original } }) => {
        const row = original;
        return (
          <ActionTableItems
            data={row}
            onView={
              checkScope('leaves.view') ? () => onView?.(row, true) : undefined
            }
            onEdit={
              checkScope('leaves.update') ? () => onEdit?.(row) : undefined
            }
            onDelete={
              checkScope('leaves.delete') ? () => onDelete?.(row) : undefined
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

interface LeaveTableProps {
  loader?: boolean;
}

const LeaveTable = ({ loader }: LeaveTableProps) => {
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

export default LeaveTable;
