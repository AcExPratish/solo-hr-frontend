import { RowData } from '@tanstack/react-table';
import { TdHTMLAttributes, ThHTMLAttributes } from 'react';

declare module '@tanstack/react-table' {
  // eslint-disable-next-line
  export interface ColumnMeta<TData extends RowData, TValue> {
    cellProps?: TdHTMLAttributes<HTMLTableDataCellElement>;
    headerProps?: ThHTMLAttributes<HTMLTableHeaderCellElement>;
    footerProps?: ThHTMLAttributes<HTMLTableHeaderCellElement>;
  }
}
