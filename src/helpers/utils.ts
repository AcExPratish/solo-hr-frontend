import { TEmployeeExperience } from '@/types/modules/employee-management/employee';
import { TUser } from '@/types/modules/user-management/user';
import { IMAGE_ACCEPTED_TYPES } from '@/data';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faFileCircleExclamation,
  faFileCode,
  faFileLines,
  faFilePdf,
  faFileZipper,
  faImage,
  faMusic
} from '@fortawesome/free-solid-svg-icons';
import ts, { transpile } from 'typescript';

export const getSystemTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const getItemFromStore = (
  key: string,
  defaultValue?: string | boolean,
  store = localStorage
) => {
  try {
    return store.getItem(key) === null
      ? defaultValue
      : JSON.parse(store.getItem(key) as string);
  } catch {
    return store.getItem(key) || defaultValue;
  }
};

export const cleanText = (string: string) =>
  (string.charAt(0).toUpperCase() + string.slice(1))
    .replace(/-/g, ' ')
    .replace('_and_', '&');

export const setItemToStore = (
  key: string,
  payload: string,
  store = localStorage
) => store.setItem(key, payload);

export const capitalize = (string: string) =>
  (string.charAt(0).toUpperCase() + string.slice(1))
    .replace(/-/g, ' ')
    .replace('_and_', '&');

export const snakeCase = (string: string) => {
  return string
    .replace(/\W+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map(word => word.toLowerCase())
    .join('_');
};

export const camelCase = (string: string) => {
  return string
    .replace(/\W+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join('');
};

export const getColor = (name: string) => {
  const dom = document.documentElement;
  return getComputedStyle(dom).getPropertyValue(`--phoenix-${name}`).trim();
};

/* get Dates between */
export const getDates = (
  startDate: Date,
  endDate: Date,
  interval: number = 1000 * 60 * 60 * 24
): Date[] => {
  const duration = +endDate - +startDate;
  const steps = duration / interval;
  return Array.from(
    { length: steps + 1 },
    (v, i) => new Date(startDate.valueOf() + interval * i)
  );
};

export const getPastDates = (
  duration: 'week' | 'month' | 'year' | number
): Date[] => {
  let days;

  switch (duration) {
    case 'week':
      days = 7;
      break;
    case 'month':
      days = 30;
      break;
    case 'year':
      days = 365;
      break;

    default:
      days = duration;
  }

  const date = new Date();
  const endDate = date;
  const startDate = new Date(new Date().setDate(date.getDate() - (days - 1)));
  return getDates(startDate, endDate);
};

export const currencyFormat = (
  amount: number,
  options: Intl.NumberFormatOptions = {}
) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'usd',
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
    ...options
  }).format(amount);
};

export const getNumbersInRange = (startAt: number, endAt: number) => {
  return [...Array(endAt + 1 - startAt).keys()].map(i => i + startAt);
};

export const numberFormat = (
  number: number,
  notation: 'standard' | 'compact' = 'standard',
  options: Intl.NumberFormatOptions = {}
) =>
  new Intl.NumberFormat('en-US', {
    notation,
    ...options
  }).format(number);

/* Get Random Number */
export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getFileIcon = (fileFormat: string): IconProp => {
  switch (fileFormat) {
    case 'zip':
    case 'rar':
      return faFileZipper;
    case 'bat':
      return faFileCode;
    case 'txt':
      return faFileLines;
    case 'mad':
      return faFileCircleExclamation;
    case 'wav':
      return faMusic;
    case 'pdf':
      return faFilePdf;
    case 'jpg':
    case 'png':
    case 'jpeg':
      return faImage;
    default:
      return faFileLines;
  }
};

export const getIntegerArrayBetween = (start = 0, end: number): number[] =>
  new Array(end + 1 - start).fill(1).map((_, i) => i + start);

export const parseData = (data: string) => {
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
};

export const hexToRgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
};

export const rgbaColor = (color = '#fff', alpha = 0.5) =>
  `rgba(${hexToRgb(color)}, ${alpha})`;

export const transformTSCode = (
  snippet: string,
  target: ts.ScriptTarget = ts.ScriptTarget.ES2015
) =>
  transpile(snippet, {
    jsx: ts.JsxEmit.React,
    target
  });

export const getFileExtension = (fileName: string, separator = '.') =>
  fileName.split(separator).pop() || 'unknown';

export const isImageFile = (file: File) => {
  return IMAGE_ACCEPTED_TYPES.includes(
    file.type as (typeof IMAGE_ACCEPTED_TYPES)[number]
  );
};

export const convertFileToAttachment = (file: File) => ({
  name: file.name,
  size: `${(file.size / 1024).toFixed(2)} KB`,
  format: getFileExtension(file.name),
  preview: isImageFile(file) ? URL.createObjectURL(file) : undefined
});

export const getProgressColorVariant = (value: number) => {
  if (value < 21) {
    return 'warning';
  } else if (value < 41) {
    return 'info';
  } else if (value < 81) {
    return 'primary';
  } else {
    return 'success';
  }
};

export const getPriorityColor = (priority: string) => {
  switch (priority.toLowerCase()) {
    case 'urgent':
      return 'danger';
    case 'high':
      return 'warning';
    case 'medium':
      return 'success';
    case 'low':
      return 'info';
    default:
      return 'primary';
  }
};

export const invertHex = (hex: string) =>
  `#${(Number(`0x1${hex.slice(1)}`) ^ 0xffffff)
    .toString(16)
    .substring(1)
    .toUpperCase()}`;

export const getColorByBgColor = (bgColor: string) => {
  const rgba = hexToRgb(bgColor);
  if (rgba[0] * 0.299 + rgba[1] * 0.587 + rgba[2] * 0.114 > 186) {
    return 'black';
  } else {
    return 'white';
  }
};

export const urlToFile = async (url: string) => {
  const filename = url.substring(url.lastIndexOf('/') + 1);

  // Extract the file extension and determine the MIME type
  const extension = filename.split('.').pop();
  const mimeType =
    extension === 'png'
      ? 'image/png'
      : extension === 'jpg' || extension === 'jpeg'
      ? 'image/jpeg'
      : extension === 'gif'
      ? 'image/gif'
      : 'application/octet-stream'; // Fallback for unknown types

  const response = await fetch(url);
  const blob = await response.blob();
  return new File([blob], filename, { type: mimeType });
};

export const formatDateToTime = (date: Date) => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
  return formatter.format(date);
};

export const getUserFirstAndLastName = (user: TUser | null): string => {
  if (!user) return '';

  return [user?.first_name, user?.last_name].filter(Boolean).join(' ');
};

export const getUserFullName = (user: TUser): string => {
  if (!user) return '';

  return [user?.first_name, user?.middle_name, user?.last_name]
    .filter(Boolean)
    .join(' ');
};

export const pageCount = (total: number, size: number) => {
  if (total === 0 || size === 0) {
    return 1;
  }

  const count = Math.ceil(total / size);
  return count;
};

// eslint-disable-next-line
export const removeEmptyValues = (obj: Record<string, any>) => {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([, value]) =>
        value !== '' &&
        value !== null &&
        value !== undefined &&
        (typeof value !== 'object' ||
          (Array.isArray(value) ? value.length : Object.keys(value).length))
    )
  );
};

// eslint-disable-next-line
export const serializedObject = (obj: any) => {
  return new URLSearchParams(obj).toString();
};

export const calculateTotalExperience = (
  experiences: TEmployeeExperience[]
) => {
  if (!experiences) return { years: 0, months: 0 };

  let totalMonths = 0;
  const today = new Date();

  experiences?.forEach(exp => {
    const start = new Date(exp?.start_date ?? '');
    const end = exp?.end_date ? new Date(exp?.end_date ?? '') : today;

    const years = end?.getFullYear() - start?.getFullYear();
    const months = end?.getMonth() - start?.getMonth();

    totalMonths += years * 12 + months;
  });

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return { years, months };
};
