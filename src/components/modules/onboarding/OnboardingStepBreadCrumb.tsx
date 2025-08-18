import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { onboardingStages } from '@/data/onboarding';
import { TEmployee } from '@/types/modules/employee';

interface OnboardingStepBreadCrumbProps {
  activeStage: string;
  employeeDetail: TEmployee;
}

const OnboardingStepBreadCrumb = ({
  employeeDetail,
  activeStage
}: OnboardingStepBreadCrumbProps) => {
  const { t } = useTranslation();
  const updateStages = React.useMemo(() => {
    return onboardingStages?.filter(data => data.value);
  }, [onboardingStages]);

  const completedStages = React.useMemo(() => {
    return employeeDetail?.completed_stages?.map(data => data?.stage) || [];
  }, [employeeDetail?.completed_stages]);

  return (
    <ol className="d-flex flex-wrap w-100 f-breadcrumb triangle mb-3">
      {updateStages?.map(data => {
        const completed = completedStages?.includes(data?.value as string);
        const current = data?.value == activeStage;
        const upNext = data?.value == employeeDetail?.up_next;

        return (
          <li
            key={`onboardingStepItems-${data.value}`}
            className={`${current ? 'current' : completed ? 'completed' : ''}`}
          >
            {completed || upNext ? (
              <Link
                to={`/employee-management/onboarding/${data.value}/${employeeDetail?.id}`}
              >
                {t(`${data.value}`)}
              </Link>
            ) : (
              <span>{t(`${data.value}`)}</span>
            )}
          </li>
        );
      })}
    </ol>
  );
};

export default OnboardingStepBreadCrumb;
