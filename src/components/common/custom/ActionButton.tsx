import Button from '../../base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSave } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface ActionButtonProps {
  type?: string;
  disabled?: boolean;
  title?: string;
}

const ActionButton = ({ type = 'add', title, disabled }: ActionButtonProps) => {
  // eslint-disable-next-line
  const { t }: { t: any } = useTranslation();
  return (
    <Button
      type="submit"
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
  );
};

export default ActionButton;
