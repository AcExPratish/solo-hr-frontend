import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { createRoot } from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

interface ConfirmExpiredTokenAlertProps {
  onConfirm: () => void;
}

const ConfirmExpiredTokenAlert: React.FC<ConfirmExpiredTokenAlertProps> = ({
  onConfirm
}) => {
  const { t } = useTranslation();

  return (
    <Modal show={true} backdrop="static" keyboard={false} centered>
      <Modal.Header>
        <Modal.Title>{t('dialog_expired_token_title')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center me-4">
            <FontAwesomeIcon icon={faWarning} className="text-warning fs-7" />
          </div>
          <span className="fw-semibold fs-8">
            {t('dialog_expired_token_body')}
          </span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="subtle-secondary" onClick={onConfirm}>
          {t(`sign_in`)}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export const confirmExpiredTokenAlert = (): Promise<boolean> => {
  return new Promise(resolve => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const root = createRoot(div);

    const handleConfirm = () => {
      cleanup();
      resolve(true);
    };

    const cleanup = () => {
      root.unmount();
      document.body.removeChild(div);
    };

    root.render(<ConfirmExpiredTokenAlert onConfirm={handleConfirm} />);
  });
};
