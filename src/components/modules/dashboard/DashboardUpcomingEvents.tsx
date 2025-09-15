import React from 'react';
import { Nav, Stack } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import PhoenixLoader from 'components/common/PhoenixLoader';
import { useTranslation } from 'react-i18next';
import { TEmployeeDashboardEvent } from '@/types/modules/dashboard';
import { convertToMonthDay } from '@/helpers/date';

interface DashboardUpcomingEventsProps {
  upcomingEvents: TEmployeeDashboardEvent[];
  loading?: boolean;
}

const upcomingEventsNavItems = ['holidays', 'birthdays', 'anniversaries'];

const DashboardUpcomingEvents = ({
  loading,
  upcomingEvents
}: DashboardUpcomingEventsProps) => {
  const { t } = useTranslation();
  const [activeUpcomingEventTab, setActiveUpcomingEventTab] =
    React.useState<string>(upcomingEventsNavItems[0]);

  const upcomingEventItems = React.useMemo(() => {
    if (activeUpcomingEventTab === 'holidays') {
      return upcomingEvents?.filter(event => event?.type === 'holiday') || [];
    } else if (activeUpcomingEventTab === 'birthdays') {
      return upcomingEvents?.filter(event => event?.type === 'birthday') || [];
    } else if (activeUpcomingEventTab === 'anniversaries') {
      return (
        upcomingEvents?.filter(event => event?.type === 'anniversary') || []
      );
    } else {
      return [];
    }
  }, [upcomingEvents, activeUpcomingEventTab]);

  return (
    <div className="bg-white rounded-3 shadow-sm shadow-sm mb-0 pb-0">
      <div className="p-3">
        <h6 className="fw-semibold text-dark fs-9">
          <h6>{`${t('upcoming')} ${t(activeUpcomingEventTab)}`}</h6>
        </h6>
      </div>

      <hr className="text-gray-200 p-0 m-0 mb-2" />

      {/* Upcoming Events Tab Container */}
      <Tab.Container
        id="basic-tabs-example"
        defaultActiveKey={activeUpcomingEventTab}
      >
        {/* Upcoming Events Nav */}
        <Nav
          variant="underline"
          className="mb-3 border-bottom border-gray-200 gap-0 ps-4"
        >
          {upcomingEventsNavItems?.map((data: string, index: number) => (
            <Nav.Item
              key={index}
              onClick={() => {
                setActiveUpcomingEventTab(data);
              }}
            >
              <Nav.Link eventKey={data} className="fs-10 px-3">
                {t(data)}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        {/* Upcoming Events Content */}
        <Tab.Content>
          <Tab.Pane eventKey={activeUpcomingEventTab}>
            {loading ? (
              <PhoenixLoader />
            ) : (
              <Stack
                className="mb-3 h-100"
                gap={3}
                style={{ minHeight: '251.6px', overflowY: 'scroll' }}
              >
                {Array.isArray(upcomingEventItems) &&
                  upcomingEventItems?.map(
                    (data: TEmployeeDashboardEvent, i: number) => (
                      <div
                        key={`upcomingEvents-${i}`}
                        className="d-flex align-items-center justify-content-between w-100 border-bottom border-gray-50 pb-3 px-4"
                      >
                        {/* Upcoming Event Title and Description */}
                        <div className="d-flex flex-column align-items-start justify-content-center">
                          <span className="mb-0 fs-9 fw-bold">
                            {data?.title ?? ''}
                          </span>
                          <span
                            title={data?.description ?? ''}
                            className="mb-0 fs-10 fw-normal text-gray-700 text-truncate d-inline-block cursor-pointer"
                            style={{ maxWidth: '100px' }}
                          >
                            {data?.description ?? ''}
                          </span>
                        </div>

                        {/* Upcoming Event Date */}
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

export default DashboardUpcomingEvents;
