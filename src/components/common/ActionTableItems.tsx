/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faEdit,
  faEye,
  faTrashCan
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

interface ActionTableItemsProps {
  data: any;
  onView?: (data: any) => void;
  onDetailedView?: (data: any) => void;
  onEdit?: (data: any) => void;
  onDelete?: (data: any) => void;
}

const ActionTableItems = ({
  data,
  onView,
  onDetailedView,
  onEdit,
  onDelete
}: ActionTableItemsProps) => {
  const { t } = useTranslation();

  return (
    <span className="d-flex justify-content-end text-nowrap">
      {onView && (
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="view-tooltip">{t('view')}</Tooltip>}
        >
          <span>
            <Button
              variant="phoenix-info"
              onClick={() => {
                onView?.(data || null);
              }}
              className="btn-sm ml-2"
            >
              <FontAwesomeIcon icon={faEye} />
            </Button>
          </span>
        </OverlayTrigger>
      )}

      {onDetailedView && (
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="view-tooltip">{t('detailed_view')}</Tooltip>}
        >
          <span>
            <Button
              variant="phoenix-info"
              onClick={() => {
                onDetailedView?.(data);
              }}
              style={{ marginLeft: '4px' }}
              className="btn-sm ml-2"
            >
              <FontAwesomeIcon icon={faBook} />
            </Button>
          </span>
        </OverlayTrigger>
      )}

      {onEdit && (
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="edit-tooltip">{t('edit')}</Tooltip>}
        >
          <span>
            <Button
              variant="phoenix-secondary"
              className="btn-sm ml-2"
              onClick={() => {
                onEdit?.(data || null);
              }}
              style={{ marginLeft: '4px' }}
            >
              <FontAwesomeIcon icon={faEdit} />
            </Button>
          </span>
        </OverlayTrigger>
      )}

      {onDelete && (
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="delete-tooltip">{t('delete')}</Tooltip>}
        >
          <span>
            <Button
              variant="phoenix-danger"
              className="btn-sm"
              style={{ marginLeft: '4px' }}
              onClick={() => {
                onDelete?.(data || null);
              }}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </Button>
          </span>
        </OverlayTrigger>
      )}
    </span>
  );
};

export default ActionTableItems;
