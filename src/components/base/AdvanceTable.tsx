import classNames from 'classnames';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { Table, TableProps } from 'react-bootstrap';
import { flexRender } from '@tanstack/react-table';
import PhoenixLoader from '../common/PhoenixLoader';
import { useTranslation } from 'react-i18next';

interface AdvanceTableProps {
  headerClassName?: string;
  bodyClassName?: string;
  rowClassName?: string;
  tableProps?: TableProps;
  hasFooter?: boolean;
  loader?: boolean;
}

const AdvanceTable = ({
  headerClassName,
  bodyClassName,
  rowClassName,
  tableProps,
  loader,
  hasFooter
}: AdvanceTableProps) => {
  // eslint-disable-next-line
  const { t }: { t: any } = useTranslation();
  const table = useAdvanceTableContext();
  const { getRowModel, getFlatHeaders, getFooterGroups } = table;
  const scrollBar = getRowModel().rows.length > 1 ? 'scrollbar' : 'scrollbar';

  return (
    <div className={`${scrollBar} ms-n1 ps-1`}>
      <Table {...tableProps}>
        <thead className={headerClassName}>
          <tr>
            {getFlatHeaders().map(header => {
              return (
                <th
                  key={header.id}
                  {...header.column.columnDef.meta?.headerProps}
                  className={classNames(
                    header.column.columnDef.meta?.headerProps?.className,
                    {
                      sort: header.column.getCanSort(),
                      desc: header.column.getIsSorted() === 'desc',
                      asc: header.column.getIsSorted() === 'asc'
                    }
                  )}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              );
            })}
          </tr>
        </thead>
        {loader ? (
          <tbody style={{ display: 'table-caption', paddingTop: '2rem' }}>
            <PhoenixLoader />
          </tbody>
        ) : (
          <tbody className={bodyClassName}>
            {getRowModel().rows.length > 0 ? (
              getRowModel().rows.map(row => (
                <tr key={row.id} className={rowClassName}>
                  {row.getVisibleCells().map(cell => (
                    <td
                      key={cell.id}
                      {...cell.column.columnDef.meta?.cellProps}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <td
                style={{
                  textAlign: 'center',
                  padding: '1rem',
                  borderBottom: '1px solid #eee'
                }}
                colSpan={50}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 66 66"
                  >
                    <path
                      fill="#ffd683"
                      d="M58.05 40.12H31.43l-7.22-8.6h26.62zM2 40.12h14.99l7.22-8.6H9.22z"
                      data-original="#ffd683"
                    />
                    <path
                      fill="#ffc040"
                      d="m31.43 40.12-7.22-8.6v29.33h26.62V40.12z"
                      data-original="#ffc040"
                    />
                    <path
                      fill="#e5ac39"
                      d="M16.99 40.12H9.22v20.73h14.99V31.52z"
                      data-original="#e5ac39"
                    />
                    <path
                      fill="#1a5464"
                      d="M35.58 55.16h-7.84c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.84c.41 0 .75.34.75.75s-.34.75-.75.75zm0 2.91h-7.84c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.84c.41 0 .75.34.75.75s-.34.75-.75.75z"
                      data-original="#1a5464"
                    />
                    <path
                      d="M50.83 31.52H28.01c2.87 2.39 6.45 3.69 10.23 3.69 3.03 0 5.93-.85 8.45-2.42l.15.15c.01 1.32.54 2.59 1.49 3.54l3.63 3.63h6.09z"
                      fill="#00000008"
                      data-original="#00000008"
                    />
                    <path
                      fill="#ff7146"
                      d="m51.25 29.85-1.99-1.99c-.34.43-.7.85-1.1 1.25s-.82.76-1.25 1.1l1.99 1.99c-.23 1 .05 2.1.83 2.88l8.96 8.96c1.21 1.21 3.18 1.21 4.39 0s1.21-3.18 0-4.39l-8.96-8.96c-.77-.79-1.86-1.06-2.87-.84z"
                      data-original="#ff7146"
                    />
                    <circle
                      cx="38.24"
                      cy="19.18"
                      r="14.03"
                      fill="#1c8fc7"
                      data-original="#1c8fc7"
                    />
                    <path
                      fill="#f6f0f5"
                      d="M38.24 29.22a9.93 9.93 0 0 1-7.09-2.94c-3.91-3.91-3.91-10.28 0-14.19 1.9-1.9 4.41-2.94 7.09-2.94s5.2 1.04 7.09 2.94c3.91 3.91 3.91 10.28 0 14.19a9.97 9.97 0 0 1-7.09 2.94z"
                      data-original="#f6f0f5"
                    />
                    <path
                      fill="#0e4b5c"
                      d="m39.3 19.18 2.47-2.47c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0l-2.47 2.47-2.47-2.47c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06l2.47 2.47-2.47 2.47c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l2.47-2.47 2.47 2.47c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06z"
                      data-original="#0e4b5c"
                    />
                  </svg>
                  <p
                    className="text-gray-500"
                    style={{ paddingTop: '4px', margin: 0 }}
                  >
                    {t('not_found_results')}
                  </p>
                </div>
              </td>
            )}
          </tbody>
        )}

        {hasFooter && (
          <tfoot>
            {getFooterGroups().map(footerGroup => (
              <tr key={footerGroup.id} className="border-0 border-translucent">
                {footerGroup.headers.map(header => {
                  return (
                    <th
                      key={header.id}
                      {...header.column.columnDef.meta?.footerProps}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </tfoot>
        )}
      </Table>
    </div>
  );
};

export default AdvanceTable;
