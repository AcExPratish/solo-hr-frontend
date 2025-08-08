import Badge from 'components/base/Badge';
import React from 'react';
import { useTranslation } from 'react-i18next';

type StatusKey = 'active' | 'in_active' | 'success' | 'failed';

interface StatusInfo {
  color: 'success' | 'secondary' | 'warning' | 'primary' | 'danger';
  text: string;
}

type StatusBadgeProps = {
  status: string;
};

const StatusBadge: React.FC<StatusBadgeProps> = props => {
  const { status } = props;
  // eslint-disable-next-line
  const { t }: { t: any } = useTranslation();

  const statusInfo: Record<StatusKey, StatusInfo> = {
    active: {
      color: 'success',
      text: t('active')
    },
    in_active: {
      color: 'danger',
      text: t('inactive')
    },
    success: {
      color: 'success',
      text: t('success')
    },
    failed: {
      color: 'danger',
      text: t('failed')
    }
  };

  const normalizedStatus = status?.toLowerCase().replace(/\s+/g, '-');
  const badgeInfo =
    statusInfo[normalizedStatus as keyof Record<StatusKey, StatusInfo>];

  if (!badgeInfo) {
    return null;
  }

  return (
    <Badge variant="phoenix" bg={badgeInfo.color} className=" p-1">
      {badgeInfo.text}
    </Badge>
  );
};

export default StatusBadge;
