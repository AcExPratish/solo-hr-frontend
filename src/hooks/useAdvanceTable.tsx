/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropsWithChildren } from 'react';
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  InitialTableState,
  OnChangeFn,
  PaginationState,
  SortingState,
  useReactTable
} from '@tanstack/react-table';
import { TableOptions } from '@tanstack/table-core';

export interface UseAdvanceTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  selection?: boolean;
  sortable?: boolean;
  action?: boolean;
  pagination?: boolean;
  pageSize?: number;
  pageCount?: number;
  totalRows?: number;
  selectionColumnWidth?: number | string;
  initialState?: InitialTableState;
  manualPagination?: boolean;
  manualFiltering?: boolean;
  manualSorting?: boolean;
  onGlobalFilterChange?: (value: any) => void;
  onSortingChange?: OnChangeFn<SortingState>;
  onPaginationChange?: OnChangeFn<PaginationState>;
  onView?: (data: any) => void;
  onEdit?: (data: any) => void;
  onDelete?: (data: any) => void;
}

const useAdvanceTable = <T,>({
  columns,
  data,
  sortable,
  pagination,
  manualPagination = false,
  manualFiltering = false,
  manualSorting = false,
  onGlobalFilterChange,
  onSortingChange,
  onPaginationChange,
  pageSize,
  pageCount,
  totalRows,
  initialState
}: PropsWithChildren<UseAdvanceTableProps<T>>) => {
  const state = {
    pagination: pagination
      ? { pageSize: pagination ? pageSize : data.length }
      : undefined,
    ...initialState
  };

  const handleColumns = () => {
    return [...columns];
  };

  const reactProps: TableOptions<T> = {
    data,
    columns: handleColumns(),
    pageCount: pageCount,
    enableSorting: sortable,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: manualPagination,
    manualFiltering: manualFiltering,
    manualSorting: manualSorting,

    initialState: state
  };
  if (manualPagination) {
    reactProps.manualPagination = manualPagination;
    reactProps.onPaginationChange = onPaginationChange;
  }
  if (manualFiltering) {
    reactProps.manualFiltering = manualPagination;
    reactProps.onGlobalFilterChange = onGlobalFilterChange;
  }
  if (manualSorting) {
    reactProps.manualSorting = manualSorting;
    reactProps.onSortingChange = onSortingChange;
  }

  const table = useReactTable<T>(reactProps);

  return { ...table, totalRows };
};

export default useAdvanceTable;
