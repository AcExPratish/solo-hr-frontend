export const IMAGE_MAX_SIZE = 5.1 * 1024 * 1024; // 5.1MB
export const IMAGE_ACCEPTED_TYPES = [
  'image/jpeg',
  'image/png',
  'image/jpg'
] as const;

export const profileDropdownNavItems = [
  {
    label: 'Profile',
    icon: 'user',
    link: '/profile'
  },
  {
    label: 'Dashboard',
    icon: 'pie-chart',
    link: '/dashboard'
  },
  {
    label: 'Settings',
    icon: 'settings',
    link: '/settings'
  },
  {
    label: 'Help Center',
    icon: 'help-circle',
    link: '/help-center'
  },
  {
    label: 'Language',
    icon: 'globe',
    link: '/language'
  }
];

export const genderOptions = [
  {
    label: 'Male',
    value: '1'
  },
  {
    label: 'Female',
    value: '0'
  },
  {
    label: 'Others',
    value: '2'
  }
];

export const maritalStatusOptions = [
  {
    label: 'Single',
    value: '0'
  },
  {
    label: 'Married',
    value: '1'
  }
];

export const bloodGroupOptions = [
  {
    label: 'A+',
    value: 'A+'
  },
  {
    label: 'A-',
    value: 'A-'
  },
  {
    label: 'B+',
    value: 'B+'
  },
  {
    label: 'B-',
    value: 'B-'
  },
  {
    label: 'AB+',
    value: 'AB+'
  },
  {
    label: 'AB-',
    value: 'AB-'
  },
  {
    label: 'O+',
    value: 'O+'
  },
  {
    label: 'O-',
    value: 'O-'
  }
];

export const statutoryInformationOptions = [
  {
    labelKey: 'citizen_investment_trust',
    value: 'citizen_investment_trust'
  },
  {
    labelKey: 'social_security_fund',
    value: 'social_security_fund'
  },
  {
    labelKey: 'provident_fund',
    value: 'provident_fund'
  },
  {
    labelKey: 'police_clearance',
    value: 'police_clearance'
  },
  {
    labelKey: 'health_insurance',
    value: 'health_insurance'
  },
  {
    labelKey: 'tax_clearance',
    value: 'tax_clearance'
  }
];

export const supportingDocumentsOptions = [
  {
    labelKey: 'pan',
    value: 'pan'
  },
  {
    labelKey: 'national_id',
    value: 'national_id'
  },
  {
    labelKey: 'citizenship',
    value: 'citizenship'
  },
  {
    labelKey: 'passport',
    value: 'passport'
  },
  {
    labelKey: 'driving_license',
    value: 'driving_license'
  }
];

export const verificationStatusOptions = [
  {
    label: 'Verified',
    value: 'verified',
    color: 'text-success'
  },
  {
    label: 'Rejected',
    value: 'rejected',
    color: 'text-danger'
  },
  {
    label: 'Pending',
    value: 'pending',
    color: 'text-muted'
  }
];

export const statusOptions = [
  {
    label: 'Active',
    value: true
  },
  {
    label: 'Inactive',
    value: false
  }
];
