/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons';

interface ActionTableItemsProps {
  data: any;
  onView?: (data: any) => void;
  onEdit?: (data: any) => void;
  onDelete?: (data: any) => void;
}

const ActionTableItems = ({
  data,
  onView,
  onEdit,
  onDelete
}: ActionTableItemsProps) => {
  return (
    <span className="d-flex justify-content-end text-nowrap">
      {onView && (
        <Button
          title="View"
          variant="phoenix-info"
          onClick={() => {
            onView?.(data || null);
          }}
          className="btn-sm ml-2"
        >
          <FontAwesomeIcon icon={faEye} />
        </Button>
      )}

      {onEdit && (
        <Button
          title="Edit"
          variant="phoenix-secondary"
          className="btn-sm ml-2"
          onClick={() => {
            onEdit?.(data || null);
          }}
          style={{ marginLeft: '4px' }}
        >
          <FontAwesomeIcon icon={faEdit} />
        </Button>
      )}

      {onDelete && (
        <Button
          variant="phoenix-danger"
          title="Delete"
          className=" btn-sm "
          style={{ marginLeft: '4px' }}
          onClick={() => {
            onDelete?.(data || null);
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </Button>
      )}
    </span>
  );
};

export default ActionTableItems;
