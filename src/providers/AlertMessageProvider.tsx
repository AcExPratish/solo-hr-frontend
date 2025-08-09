import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faClose,
  faInfo,
  faTriangleExclamation,
  faWarning
} from '@fortawesome/free-solid-svg-icons';
import { Alert } from 'react-bootstrap';
import Button from '../components/base/Button';

type AlertType = 'success' | 'error' | 'warning' | 'info';

interface AlertContextProps {
  showAlert: (
    message: string,
    type?: AlertType,
    body?: string,
    link?: React.ReactNode,
    close?: boolean
  ) => void;
  clearAlert: () => void;
}

export const AlertContext = createContext({} as AlertContextProps);

export const useAlertMessage = () => useContext(AlertContext);
export const AlertMessageProvider = ({ children }: PropsWithChildren) => {
  const [alert, setAlert] = useState<{
    message: string;
    type: AlertType;
    body?: string;
    link?: React.ReactNode;
  } | null>(null);

  const showAlert = (
    message: string,
    type: AlertType = 'info',
    body?: string,
    link?: React.ReactNode
  ) => {
    if (!message) {
      setAlert(null);
    } else {
      setAlert({ message, type, body, link });
    }

    // setTimeout(() => setAlert(null), duration);
  };
  const onClose = () => {
    setAlert(null);
  };
  const alertStyles = {
    success: 'success',
    error: 'danger',
    warning: 'warning',
    info: 'info'
  };
  const alertIcon = {
    success: faCheckCircle,
    error: faTriangleExclamation,
    warning: faWarning,
    info: faInfo
  };

  return (
    <AlertContext.Provider value={{ showAlert, clearAlert: onClose }}>
      {alert && (
        <Alert
          variant={`subtle-${alertStyles[alert.type]}`}
          className="alert-style py-3"
        >
          <span
            className={`d-flex justify-content-start align-items-center gap-2 font-medium text-${
              alertStyles[alert.type]
            }`}
          >
            <FontAwesomeIcon
              className={`me-2 text-${alertStyles[alert.type]}`}
              icon={alertIcon[alert.type]}
            />
            <span>
              {alert?.message}
              {alert?.body && (
                <p
                  className="text-black p-0 m-0"
                  dangerouslySetInnerHTML={{ __html: alert?.body as string }}
                ></p>
              )}
              {alert?.link || ''}
            </span>
          </span>
          {onClose && (
            <Button className="p-0 fs-8" onClick={onClose}>
              <FontAwesomeIcon icon={faClose} className="me-2" />
              Close
            </Button>
          )}
        </Alert>
      )}
      {children}
    </AlertContext.Provider>
  );
};
