import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap';

export interface InfoRowProps {
  icon: IconProp;
  label: string;
  value: string;
  isLink?: boolean;
}

export const InfoRow = ({
  icon,
  label,
  value,
  isLink = false
}: InfoRowProps) => (
  <Row className="d-flex align-items-center justify-content-between">
    <Col
      xs={6}
      className="d-flex align-items-center justify-content-start gap-2"
    >
      <span>
        <FontAwesomeIcon icon={icon} className="text-muted me-0" size="sm" />
      </span>
      <span className="text-muted small text-start">{label}</span>
    </Col>
    <Col
      xs={6}
      className={`small ${
        isLink ? 'text-primary' : ''
      } d-flex align-items-center justify-content-end text-end`}
    >
      {value}
    </Col>
  </Row>
);
