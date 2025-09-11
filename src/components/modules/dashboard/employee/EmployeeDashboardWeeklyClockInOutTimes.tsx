import PhoenixLoader from '@/components/common/PhoenixLoader';
import { TEmployeeDashboardAttendance } from '@/types/modules/dashboard';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

interface EmployeeDashboardAttendancesProps {
  attendances: TEmployeeDashboardAttendance[];
  loading?: boolean;
}

const EmployeeDashboardWeeklyClockInOutTimes = ({
  attendances,
  loading
}: EmployeeDashboardAttendancesProps) => {
  const { t } = useTranslation();

  return (
    <Row>
      <Col xs={12} className="p-1 m-0 overflow-auto">
        {/* Weekly Clock In/Out : Title */}
        <div className="bg-white rounded-3 shadow-sm shadow-sm">
          <div className="p-3">
            <h6 className="fw-semibold text-dark small">
              {t('weekly_clock_in_out_times')}
            </h6>
          </div>

          {/* Weekly Clock In/Out : Chart Container */}
          <div className="p-3">
            <div
              className="rounded"
              style={{
                height: '16rem'
              }}
            >
              <div className="d-flex align-items-end justify-content-around h-100 px-3 pb-3">
                {loading ? (
                  <PhoenixLoader />
                ) : (
                  <>
                    {attendances?.map((day, index: number) => (
                      <div
                        key={index}
                        className="d-flex flex-column align-items-center"
                      >
                        <div
                          className="d-flex flex-column justify-content-end align-items-center mb-2"
                          style={{
                            height: '180px'
                          }}
                        >
                          {/* Clock In/Out : Chart Bar */}
                          <div
                            title={day?.clock_in ?? ''}
                            className={`rounded-top cursor-pointer ${
                              day?.status === 'weekend'
                                ? 'bg-gray-500'
                                : 'bg-info'
                            }`}
                            style={{
                              width: '12px',
                              height: `${80 + Math.random() * 40}px`
                            }}
                          />

                          <div
                            title={day?.clock_out ?? ''}
                            className={`rounded-bottom cursor-pointer ${
                              day?.status === 'weekend'
                                ? 'bg-gray-500'
                                : 'bg-success'
                            }`}
                            style={{
                              width: '12px',
                              height: `${80 + Math.random() * 40}px`
                            }}
                          />
                        </div>

                        {/* Clock In/Out : Chart Day and Times */}
                        <div className="text-center">
                          <div className="fs-10 fw-medium text-dark">
                            {day?.day ?? ''}
                          </div>

                          <div className="fs-10 text-muted mt-1">
                            {day?.clock_in !== '-' ? (
                              <>
                                <div>{day?.clock_in ?? ''}</div>
                                <div>{day?.clock_out ?? ''}</div>
                              </>
                            ) : (
                              <>
                                <div>-</div>
                                <div>-</div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>

            {/* Clock In/Out Icons */}
            <div className="d-flex justify-content-center gap-4 pt-2">
              <div className="d-flex align-items-center gap-1">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-success fs-9"
                />
                <span className="small text-secondary">{t('clock_in')}</span>
              </div>

              <div className="d-flex align-items-center gap-1">
                <FontAwesomeIcon icon={faCircle} className="text-info fs-9" />
                <span className="small text-secondary">{t('clock_out')}</span>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default EmployeeDashboardWeeklyClockInOutTimes;
