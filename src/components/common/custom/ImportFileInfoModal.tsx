import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faListOl,
  faCheckCircle,
  faClone,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
import { TImportFileInfoResponse, TModalProps } from '@/types/modules';
import i18next from 'i18next';
const t = i18next.t;

interface ImportFileInfoModalProps {
  title?: string;
  formData: TImportFileInfoResponse;
  modal: TModalProps;
  onClose: () => void;
}

const ImportFileInfoModal: React.FC<ImportFileInfoModalProps> = ({
  title = t('import_summary'),
  formData,
  modal,
  onClose
}) => {
  // Use States
  const total = formData?.total_rows ?? 0;
  const total_success = formData?.total_success ?? 0;
  const total_duplicates = formData?.total_duplicates ?? 0;
  const total_failed = Math.max(total - total_success - total_duplicates, 0);

  const calculatePercentage = (n: number) =>
    total > 0 ? Math.round((n / total) * 100) : 0;

  return (
    <Modal onHide={onClose} {...modal} centered backdrop="static" size="lg">
      <Modal.Header className="border-0 ps-4 pe-4 pb-0" closeButton>
        <Modal.Title className="fw-normal">{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="ps-4 pe-4 pt-0">
        <hr />

        <Row className="g-3">
          <Col xs={12} className="mt-2">
            <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <div className="d-flex align-items-center gap-2">
                <FontAwesomeIcon icon={faListOl} />
                <span>{t('total_rows')}</span>
              </div>
              <span>{total}</span>
            </div>

            <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <div className="d-flex align-items-center gap-2">
                <FontAwesomeIcon
                  className="text-success"
                  icon={faCheckCircle}
                />
                <span>{t('total_success')}</span>
              </div>
              <span>
                {total_success} ({calculatePercentage(total_success)}%)
              </span>
            </div>

            <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <div className="d-flex align-items-center gap-2">
                <FontAwesomeIcon className="text-warning" icon={faClone} />
                <span>{t('total_duplicates')}</span>
              </div>
              <span>
                {total_duplicates} ({calculatePercentage(total_duplicates)}%)
              </span>
            </div>

            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="d-flex align-items-center gap-2">
                <FontAwesomeIcon className="text-danger" icon={faTimesCircle} />
                <span>{t('total_errors')}</span>
              </div>
              <span>
                {total_failed} ({calculatePercentage(total_failed)}%)
              </span>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ImportFileInfoModal;
