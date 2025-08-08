// PaginationComponent.tsx
import React from 'react';
import { Pagination } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

interface PaginationComponentProps {
  currentPage: number;
  totalRows: number;
  limit: number;
  onPageChange: (page: number) => void;
}
const PaginationComponent: React.FC<PaginationComponentProps> = ({
  currentPage,
  totalRows,
  limit,
  onPageChange
}) => {
  const totalPages = Math.ceil(totalRows / limit);
  if (!totalPages || totalPages <= 0) return '';

  const renderPageNumbers = () => {
    const items: JSX.Element[] = [];
    const totalPages = Math.ceil(totalRows / limit);

    const delta = 2; // Number of pages to show around current
    const range = (start: number, end: number) =>
      Array.from({ length: end - start + 1 }, (_, i) => start + i);

    if (totalPages <= 7) {
      range(1, totalPages).forEach(number => {
        items.push(
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => onPageChange(number)}
          >
            {number}
          </Pagination.Item>
        );
      });
    } else {
      const left = Math.max(2, currentPage - delta);
      const right = Math.min(totalPages - 1, currentPage + delta);

      items.push(
        <Pagination.Item
          key={1}
          active={currentPage === 1}
          onClick={() => onPageChange(1)}
        >
          1
        </Pagination.Item>
      );

      if (left > 2) {
        items.push(<Pagination.Ellipsis key="left-ellipsis" disabled />);
      }

      range(left, right).forEach(number => {
        items.push(
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => onPageChange(number)}
          >
            {number}
          </Pagination.Item>
        );
      });

      if (right < totalPages - 1) {
        items.push(<Pagination.Ellipsis key="right-ellipsis" disabled />);
      }

      items.push(
        <Pagination.Item
          key={totalPages}
          active={currentPage === totalPages}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </Pagination.Item>
      );
    }

    return items;
  };

  return (
    <Pagination className="mb-0 justify-content-center">
      <Pagination.Prev
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </Pagination.Prev>

      {renderPageNumbers()}

      <Pagination.Next
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </Pagination.Next>
    </Pagination>
  );
};

export default PaginationComponent;
