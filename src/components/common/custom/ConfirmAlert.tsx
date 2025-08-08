import React from 'react';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, CloseButton, Modal } from 'react-bootstrap';
import { createRoot } from 'react-dom/client';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ConfirmAlertProps {
  title: string;
  icon: IconDefinition;
  iconBgClass: string;
  iconTextColor: string;
  message: string;
  confirmLabel: string;
  confirmVariant: string;
  cancelLabel: string;
  cancelVariant: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmAlert: React.FC<ConfirmAlertProps> = ({
  message,
  title,
  icon,
  iconBgClass,
  iconTextColor,
  confirmLabel,
  onConfirm,
  cancelLabel,
  confirmVariant,
  cancelVariant,
  onCancel
}) => {
  return (
    <Modal
      show={true}
      onHide={onCancel}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header>
        <Modal.Title>{title || ''}</Modal.Title>
        <CloseButton
          className="btn btn-circle btn-sm transition-base p-0"
          onClick={onCancel}
        />
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex align-items-center">
          <div>
            <div
              className={`d-flex align-items-center justify-content-center me-4 ${iconBgClass}`}
              style={{
                // backgroundColor: '#FDE6DD',
                width: '44px',
                height: '44px',
                borderRadius: '100%'
              }}
            >
              <FontAwesomeIcon
                icon={icon}
                className={`fs-7 ${iconTextColor}`}
              />
            </div>
          </div>
          <span className="fw-semibold text-wrap text-break flex-grow-1">
            {message}
          </span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={cancelVariant} onClick={onCancel}>
          {cancelLabel}
        </Button>
        <Button variant={confirmVariant} onClick={onConfirm}>
          {confirmLabel}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export const confirmAlert = ({
  title,
  icon = faTrashCan,
  iconBgClass = 'bg-danger-subtle',
  iconTextColor = 'text-danger',
  message,
  cancelLabel = 'No',
  confirmLabel = 'Yes',
  confirmVariant = 'primary',
  cancelVariant = 'subtle-secondary'
}: {
  title: string;
  icon?: IconDefinition;
  iconBgClass?: string;
  iconTextColor?: string;
  message: string;
  confirmLabel?: string;
  confirmVariant?: string;
  cancelLabel?: string;
  cancelVariant?: string;
}): Promise<boolean> => {
  return new Promise(resolve => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const root = createRoot(div);

    const handleConfirm = () => {
      cleanup();
      resolve(true);
    };

    const handleCancel = () => {
      cleanup();
      resolve(false);
    };

    const cleanup = () => {
      root.unmount();
      document.body.removeChild(div);
    };

    root.render(
      <ConfirmAlert
        icon={icon}
        iconBgClass={iconBgClass}
        iconTextColor={iconTextColor}
        title={title}
        message={message}
        confirmLabel={confirmLabel}
        cancelLabel={cancelLabel}
        confirmVariant={confirmVariant}
        cancelVariant={cancelVariant}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    );
  });
};
