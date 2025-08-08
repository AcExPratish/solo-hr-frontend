import React from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, ModalProps } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSave } from '@fortawesome/free-solid-svg-icons';
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
    <Modal size={size} onHide={onClose} {...modal} backdrop={'static'}>
      <Modal.Header className="border-0 ps-4 pe-4 pb-0" closeButton>
        <Modal.Title>
          {type == 'edit' ? `${t('edit')}` : `${t('add')}`} {`${t(title)}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="ps-4 pe-4 pt-0">
        <hr />
        {children}
      </Modal.Body>
      <Modal.Footer className="border-0 ps-4 pe-4 pb-4">
        <div className="d-flex justify-content-right gap-3">
          <Button variant="phoenix-secondary" onClick={onClose}>
            Discard
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
            {type == 'edit' ? (
              <>
                <FontAwesomeIcon icon={faSave} className="me-2" />
                <span>{t('save')}</span>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faPlus} className="me-2" />
                <span>{`${t('add')} ${t('new')}`}</span>
              </>
            )}
            <span className="ms-1">{t(title)}</span>
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;
