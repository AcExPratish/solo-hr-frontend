import React from 'react';
import { Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faClose,
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';
import Button from '../base/Button';
import { TAlert } from '@/types/modules';

interface AlertMessageProps extends TAlert {
  onClose?: () => void;
}

const AlertMessage = ({ type, message, onClose }: AlertMessageProps) => {
  if (type == 'SUCCESS') {
    return (
      <Alert variant="subtle-success" className=" py-3">
        <span className="text-success ">
          <FontAwesomeIcon icon={faCheckCircle} className="me-2 text-success" />
          {message}
        </span>
        {onClose && (
          <Button className="p-0 fs-8 text-success" onClick={onClose}>
            <FontAwesomeIcon icon={faClose} className="me-2" />
            Close
          </Button>
        )}
      </Alert>
    );
  }

  if (type == 'ERROR') {
    return (
      <Alert variant="subtle-danger" className=" py-3">
        <span className="text-danger   ">
          <FontAwesomeIcon
            className="me-2 text-danger"
            icon={faTriangleExclamation}
          />
          {message}
        </span>
      </Alert>
    );
  }
  if (type == 'WARNING') {
    return (
      <Alert variant="subtle-warning" className=" py-3">
        <span className="text-warning  ">
          <FontAwesomeIcon
            className="me-2 text-danger"
            icon={faTriangleExclamation}
          />
          {message}
        </span>
      </Alert>
    );
  }
};

export default AlertMessage;
