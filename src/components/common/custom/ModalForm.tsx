import React from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, ModalProps } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel, faPlus, faSave } from '@fortawesome/free-solid-svg-icons';
import Button from '../../base/Button';

interface ModalFormProps {
  children: React.ReactNode;
  type?: string;
  disabled?: boolean;
  title?: string;
  size?: 'sm' | 'lg' | 'xl';
  onClose: () => void;
  onSubmit: () => void;
  modal: ModalProps;
}

const ModalForm = ({
  children,
  type = 'add',
  title,
  size,
  disabled,
  onClose,
  onSubmit,
  modal
}: ModalFormProps) => {
  // eslint-disable-next-line
  const { t }: { t: any } = useTranslation();

  return (
    <Modal
      size={size}
      onHide={onClose}
      {...modal}
      backdrop={'static'}
      onExited={onClose}
    >
      <Modal.Header className="border-0 ps-4 pe-4 pb-0" closeButton>
        <Modal.Title>
          {type === 'edit' && `${t('edit')} ${t(title)}`}
          {type === 'add' && `${t('add')} ${t(title)}`}
          {type === 'view' && `${t('view')} ${t(title)}`}
          {type === 'import' && `${t('import')} ${t(title)}`}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="ps-4 pe-4 pt-0">
        <hr />
        {children}
      </Modal.Body>

      {type !== 'view' && (
        <Modal.Footer className="border-0 ps-4 pe-4 pb-4">
          <div className="d-flex justify-content-right gap-3">
            <Button variant="phoenix-secondary" onClick={onClose}>
              {t('discard')}
            </Button>
            <Button
              type="button"
              onClick={e => {
                e.preventDefault();
                onSubmit();
              }}
              variant="primary"
              className="w-100"
              disabled={disabled}
            >
              {type == 'edit' && (
                <React.Fragment>
                  <FontAwesomeIcon icon={faSave} className="me-2" />
                  <span>{t('save')}</span>
                  <span className="ms-1">{t(title)}</span>
                </React.Fragment>
              )}

              {type == 'add' && (
                <React.Fragment>
                  <FontAwesomeIcon icon={faPlus} className="me-2" />
                  <span>{`${t('add')} ${t('new')}`}</span>
                  <span className="ms-1">{t(title)}</span>
                </React.Fragment>
              )}

              {type == 'import' && (
                <React.Fragment>
                  <FontAwesomeIcon icon={faFileExcel} className="me-2" />
                  <span>{`${t('import')}`}</span>
                  <span className="ms-1">{t(title)}</span>
                </React.Fragment>
              )}
            </Button>
          </div>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default ModalForm;
