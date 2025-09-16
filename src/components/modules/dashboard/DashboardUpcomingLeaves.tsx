import React from 'react';
import { Nav, Stack } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import PhoenixLoader from 'components/common/PhoenixLoader';
import { useTranslation } from 'react-i18next';
import { TEmployeeDashboardLeave } from '@/types/modules/dashboard';
import { convertToMonthDay } from '@/helpers/date';
import SafeImage from '@/components/common/SafeImage';
import { storageEndpoint } from '@/helpers/common';
import avatar from 'assets/img/team/40x40/avatar.webp';
import { getUserFirstAndLastName } from '@/helpers/utils';

interface DashboardUpcomingLeavesProps {
  upcomingLeaves: TEmployeeDashboardLeave[];
  loading?: boolean;
}

const upcomingLeavesNavItems = ['today', 'this_week', 'this_month'];

const DashboardUpcomingLeaves = ({
  loading,
  upcomingLeaves
}: DashboardUpcomingLeavesProps) => {
  const { t } = useTranslation();
  const [activeUpcomingLeaveTab, setActiveUpcomingLeaveTab] =
    React.useState<string>(upcomingLeavesNavItems[0]);

  const upcomingLeaveItems = React.useMemo(() => {
    if (activeUpcomingLeaveTab === 'today') {
      return upcomingLeaves?.filter(leave => leave?.type === 'today') || [];
    } else if (activeUpcomingLeaveTab === 'this_week') {
      return upcomingLeaves?.filter(leave => leave?.type === 'this_week') || [];
    } else if (activeUpcomingLeaveTab === 'this_month') {
      return (
        upcomingLeaves?.filter(leave => leave?.type === 'this_month') || []
      );
    } else {
      return [];
    }
  }, [upcomingLeaves, activeUpcomingLeaveTab]);

  return (
    <div className="bg-white rounded-3 shadow-sm shadow-sm mb-0 pb-0">
      <div className="p-3">
        <h6 className="fw-semibold text-dark fs-9">
          <h6>{t('upcoming_leaves')}</h6>
        </h6>
      </div>

      <hr className="text-gray-200 p-0 m-0 mb-2" />

      {/* Upcoming Leaves Tab Container */}
      <Tab.Container
        id="basic-tabs-example"
        defaultActiveKey={activeUpcomingLeaveTab}
      >
        {/* Upcoming Leaves Nav */}
        <Nav
          variant="underline"
          className="mb-3 border-bottom border-gray-200 gap-0 ps-4"
        >
          {upcomingLeavesNavItems?.map((data: string, index: number) => (
            <Nav.Item
              key={index}
              onClick={() => {
                setActiveUpcomingLeaveTab(data);
              }}
            >
              <Nav.Link eventKey={data} className="fs-10 px-3">
                {t(data)}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        {/* Upcoming Leaves Content */}
        <Tab.Content>
          <Tab.Pane eventKey={activeUpcomingLeaveTab}>
            {loading ? (
              <PhoenixLoader />
            ) : (
              <Stack
                className="mb-3 h-100"
                gap={3}
                style={{
                  minHeight: '251.6px',
                  height: '251.6px',
                  overflowY: 'scroll'
                }}
              >
                {Array.isArray(upcomingLeaveItems) &&
                  upcomingLeaveItems?.map(
                    (data: TEmployeeDashboardLeave, i: number) => (
                      <div
                        key={`upcomingLeaves-${i}`}
                        className="d-flex align-items-center justify-content-between w-100 border-bottom border-gray-50 pb-3 px-4"
                      >
                        {/* Upcoming Leave Avatar, Title and Description */}
                        <div className="d-flex">
                          <SafeImage
                            size="xl"
                            src={
                              data?.user?.avatar
                                ? `${storageEndpoint}/${data?.user?.avatar}`
                                : ''
                            }
                            errorImage={avatar}
                          />

                          <div className="d-flex flex-column align-items-start justify-content-center ms-2">
                            <span className="mb-0 fs-9 fw-bold">
                              {getUserFirstAndLastName(data?.user ?? null)}
                            </span>
                            <span
                              title={data?.description ?? ''}
                              className="mb-0 fs-10 fw-normal text-gray-700 text-truncate d-inline-block cursor-pointer"
                              style={{ maxWidth: '100px' }}
                            >
                              {data?.description ?? ''}
                            </span>
                          </div>
                        </div>

                        {/* Upcoming Leave Date */}
                        <span className="text-success fw-bold fs-9">
                          {convertToMonthDay(data?.date)}
                        </span>
                      </div>
                    )
                  )}
              </Stack>
            )}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default DashboardUpcomingLeaves;
