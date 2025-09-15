import moment from 'moment-timezone';
const timestampFormat = 'YYYY-MM-DD hh:mm';
const timeFormat = 'hh:mm:ss a';
const dateFormat = 'YYYY-MM-DD';
const timestampFormatPeriod = 'MMMM Do, YYYY | hh:mm a';
const humanTimestampFormatPeriod = 'MMMM Do , YYYY [at] hh:mm a';

export const todayDate = () => {
  return moment().format('YYYY-MM-DD');
};

export const nextDate = () => {
  return moment().add(1, 'day').format('YYYY-MM-DD');
};

export const lastMonthDate = () => {
  return moment().subtract(1, 'month').startOf('day').format('YYYY-MM-DD');
};

export const todayTimestampInUnix = () => {
  return moment().unix();
};

export const convertTimestampToDate = timestamp => {
  return timestamp
    ? moment(timestamp, timestampFormat).format('YYYY-MM-DD')
    : '';
};

export const convertTimestampToHumanTimestamp = timestamp => {
  return timestamp
    ? moment.utc(timestamp).format(humanTimestampFormatPeriod)
    : '';
};

export const convertTimestampToHumanDate = timestamp => {
  return timestamp
    ? moment.utc(timestamp, timestampFormat).format('MMMM Do, YYYY')
    : '';
};

export const convertTimestampToHumanFromNow = timestamp => {
  return timestamp ? moment.utc(timestamp).fromNow() : '';
};

export const convertTimeToHumanTime = timestamp => {
  return timestamp ? moment(timestamp, 'HH:mm').format('hh:mm a') : '';
};

export const isValidDate = date => {
  return moment(date, dateFormat, true).isValid();
};

export const getDaysDifference = (from, to) => {
  if (!from || !to) return 0;
  const startDate = moment(from);
  const endDate = moment(to);

  return endDate.diff(startDate, 'days');
};

export const convertTimestampToCustomFormatWithDateAtTime = timestamp => {
  return timestamp
    ? moment.utc(timestamp, timestampFormat).format('DD MMM YYYY [at] h:mm A')
    : '';
};

export const convertTimestampToUnix = timestamp => {
  return timestamp ? moment(timestamp).unix() : '';
};

export const getTimestampBeforeHourUnix = (hour, timestamp) => {
  return moment.unix(timestamp).subtract(hour, 'hours').unix();
};

export const addHoursAndMinutesOnManilaDate = (date, time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return moment
    .tz(date, 'Asia/Manila')
    .set({ hour: hours, minute: minutes, second: 0, millisecond: 0 });
};

export const convertTimestampToManila = timestamp => {
  return timestamp ? moment.utc(timestamp).format(dateFormat) : '';
};

export const convertTimestampToTime = timestamp => {
  return timestamp ? moment.utc(timestamp).format(timeFormat) : '';
};

export const convertTimestamp = timestamp => {
  return timestamp ? moment.utc(timestamp).format(timestampFormatPeriod) : '';
};

export const convertTimestamp2 = timestamp => {
  return timestamp ? moment.utc(timestamp).format('YYYY-MM-DD hh:mm:ss') : '';
};

export const getHumanReadableDateDiff = date => {
  const fromDate = new Date(date);
  const toDate = new Date();

  let years = toDate.getFullYear() - fromDate.getFullYear();
  let months = toDate.getMonth() - fromDate.getMonth();
  let days = toDate.getDate() - fromDate.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(toDate.getFullYear(), toDate.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  let result = '';
  if (years > 0) result += `${years} year${years > 1 ? 's' : ''}`;
  if (months > 0) {
    if (result) result += ' ';
    result += `${months} month${months > 1 ? 's' : ''}`;
  }

  if (!result) result = 'Less than a month';

  return result;
};

export const getDaysBefore = days => {
  return moment().subtract(days, 'days').valueOf();
};

export const todayValueOf = () => {
  return moment().valueOf();
};

export const diffInImin = (first, second) => {
  const time1 = moment(first); // Convert to Moment object
  const time2 = moment(second);
  return time2.diff(time1, 'minutes');
};

export const convertSecToTime = sec => {
  return sec ? moment.utc(sec * 1000).format('HH:mm') : '00:00';
};

export const convertToDate = date => {
  return date ? moment(date, timestampFormat).format('YYYY-MM-DD') : '';
};

export const allDates = (startDate, endDate) => {
  if (!startDate || !endDate) {
    return [];
  }
  const dateList = [];

  let currentDate = moment(startDate, dateFormat, true);
  while (currentDate.isSameOrBefore(endDate)) {
    dateList.push(currentDate.format('YYYY-MM-DD'));
    currentDate.add(1, 'days');
  }
  return dateList;
};

export const holidayDayDisableDates = previousDate => {
  const start = moment(previousDate).startOf('day');
  const end = moment(previousDate).add(7, 'days').endOf('day');
  return allDates(start, end);
};

export const diffInDays = (greater, lower) => {
  const prev = moment(lower, dateFormat);
  const latest = moment(greater, dateFormat);

  return latest.diff(prev, 'days');
};

export const formatDateForInput = date => {
  if (!date) return '';
  return date ? moment(date).format('YYYY-MM-DD') : '';
};

export const formatDateForDisplay = date => {
  if (!date) return '';
  return date ? moment(date).format('DD MMM YYYY') : '';
};

export const extractYear = date => {
  if (!date) return '';
  return date ? moment(date).format('YYYY') : '';
};

export const convertToMonAbbrevDate = date => {
  if (!date) return '';
  return date ? moment(date).format('MMM D, YYYY') : '';
};

export const convertToMonthDay = date => {
  if (!date) return '';
  return moment(date).format('MMM D');
};
