import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { TMeta } from '@/types/modules';

interface TCustomPaginationProps {
  meta: TMeta;
  onPageChange: (page: number) => void;
}

const CustomPagination = ({ meta, onPageChange }: TCustomPaginationProps) => {
  const { total_rows, limit } = meta;
  const totalPages = Math.ceil(Math.max(0, total_rows) / Math.max(1, limit));
  const [active, setActive] = React.useState(1);

  const handlePageChange = (pageNumber: number) => {
    setActive(pageNumber);
    onPageChange(pageNumber);
  };

  if (totalPages <= 1) {
    return;
  }

  return (
    <div className="d-flex justify-content-center mt-3">
      <Pagination className="custom-pagination">
        <Pagination.Prev
          onClick={() => handlePageChange(Math.max(active - 1, 1))}
          disabled={active === 1}
        />

        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          return (
            <Pagination.Item
              key={pageNumber}
              active={pageNumber === active}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </Pagination.Item>
          );
        })}

        <Pagination.Next
          onClick={() => handlePageChange(Math.min(active + 1, totalPages))}
          disabled={active === totalPages}
        />
      </Pagination>
    </div>
  );
};

export default CustomPagination;
