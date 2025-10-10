import { TEmployeeDashboard } from '@/types/modules/dashboard';
import {
  faCalendarAlt,
  faClockFour,
  faFileAlt
} from '@fortawesome/free-regular-svg-icons';

export const departmentMockData = [
  {
    id: 'dep101',
    name: 'IT',
    description: 'IT Department'
  },
  {
    id: 'dep102',
    name: 'HR',
    description: 'HR Department'
  }
];

export const designationMockData = [
  {
    id: 'des205',
    name: 'Software Engineer',
    description: 'Software Engineer'
  },
  {
    id: 'des206',
    name: 'Senior Software Engineer',
    description: 'Senior Software Engineer'
  }
];

export const teamMockData = [
  {
    id: '1',
    name: 'IT',
    description: 'IT Department'
  },
  {
    id: '2',
    name: 'HR',
    description: 'HR Department'
  }
];

export const holidayMockData = [
  {
    id: 'hol001',
    title: 'New Year',
    date: '2023-01-01',
    description: 'New Year',
    status: true,
    created_at: '2023-01-01',
    updated_at: '2023-01-01',
    created_by_id: 'admin001',
    updated_by_id: 'admin001'
  }
];

export const employeeDashboardData: TEmployeeDashboard = {
  kpis: [
    {
      title: 'On-Time Streak',
      value: '14 days',
      change: 2,
      icon: faClockFour
    },
    {
      title: 'Hours This Week',
      value: '42.5h',
      change: 2,
      icon: faClockFour
    },
    {
      title: 'Leave Balance',
      value: '18 days',
      change: -2,
      icon: faCalendarAlt
    },
    {
      title: 'Document Status',
      value: '85%',
      change: 15,
      icon: faFileAlt
    }
  ],
  attendances: [
    { day: 'Mon', clock_in: '09:00', clock_out: '18:00', status: 'present' },
    { day: 'Tue', clock_in: '09:15', clock_out: '18:30', status: 'late' },
    { day: 'Wed', clock_in: '08:45', clock_out: '17:45', status: 'present' },
    { day: 'Thu', clock_in: '09:00', clock_out: '18:00', status: 'present' },
    { day: 'Fri', clock_in: '09:05', clock_out: '18:15', status: 'present' },
    { day: 'Sat', clock_in: '-', clock_out: '-', status: 'weekend' },
    { day: 'Sun', clock_in: '-', clock_out: '-', status: 'weekend' }
  ],
  monthlyAttendanceSummary: { month: 'May', present: 24, late: 2, absent: 4 },
  upcomingEvents: [
    {
      id: '1',
      title: 'Holiday',
      date: '2023-01-01',
      description: 'Holiday',
      type: 'holiday'
    },
    {
      id: '2',
      title: 'Birthday',
      date: '2023-01-02',
      description: 'Birthday',
      type: 'birthday'
    },
    {
      id: '3',
      title: 'Anniversary',
      date: '2023-01-03',
      description: 'Anniversary',
      type: 'anniversary'
    }
  ],
  upcomingLeaves: [
    {
      id: '1',
      title: 'Sick Leave',
      date: '2023-01-01',
      description: 'Leave',
      type: 'today',
      user: {
        id: '1',
        first_name: 'John',
        middle_name: 'Michael',
        last_name: 'Doe',
        avatar: '/avatars/jdoe.png'
      }
    },
    {
      id: '2',
      title: 'Annual Leave',
      date: '2023-01-02',
      description: 'Leave',
      type: 'this_week',
      user: {
        id: '1',
        first_name: 'John',
        middle_name: 'Michael',
        last_name: 'Doe',
        avatar: '/avatars/jdoe.png'
      }
    },
    {
      id: '3',
      title: 'Casual Leave',
      date: '2023-01-03',
      description: 'Leave',
      type: 'this_month',
      user: {
        id: '1',
        first_name: 'John',
        middle_name: 'Michael',
        last_name: 'Doe',
        avatar: '/avatars/jdoe.png'
      }
    }
  ]
};
