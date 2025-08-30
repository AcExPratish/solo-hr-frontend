import { TEmployee } from '@/types/modules/employee-management/employee';

export const employeeMockData: TEmployee = {
  id: 'u001',
  first_name: 'John',
  middle_name: 'Michael',
  last_name: 'Doe',
  password: 'hashedPassword123!',
  email: 'jdoe@example.com',
  phone: '+9779812345678',
  email_verified_at: '2023-01-05T08:00:00Z',
  avatar: '/avatars/jdoe.png',
  created_at: '2023-01-10T10:00:00Z',
  updated_at: '2023-12-01T12:30:00Z',
  created_by_id: 'admin001',
  updated_by_id: 'admin002',
  deleted_at: undefined,
  roles: ['employee'],

  // Extended from TEmployee
  basic_information: {
    date_of_birth: '1990-05-15',
    gender: '1',
    nationality: 'Nepali',
    religion: 'Hindu',
    marital_status: '1',
    employment_of_spouse: 'Yes',
    no_of_children: '2',
    blood_group: 'O+',
    joining_date: '2020-02-01',
    department_id: 'dep101',
    designation_id: 'des205',
    province: 'Bagmati',
    district: 'Kathmandu',
    city: 'KTM-01',
    address: 'Baneshwor, Kathmandu',
    zip_code: '44600',
    postal_code: '44601',
    about:
      'Experienced software engineer with a strong background in full-stack development, project management, and cross-team collaboration.'
  },

  emergency_contact: [
    {
      id: 'ec001',
      name: 'Jane Doe',
      relationship: 'Wife',
      phone_1: '+9779811111111',
      phone_2: '+9779822222222'
    },
    {
      id: 'ec002',
      name: 'Mark Doe',
      relationship: 'Brother',
      phone_1: '+9779833333333',
      phone_2: undefined
    }
  ],

  bank_information: {
    id: 'bi001',
    bank_name: 'Nepal Investment Bank',
    branch_address: 'New Road, Kathmandu',
    account_holder_name: 'John Doe',
    account_number: '12345678901234',
    account_type: 'Savings',
    swift_code: 'NIBLNPKT'
  },

  statutory_information: {
    citizen_investment_trust: {
      id: 'si001',
      id_number: 'CIT12345',
      issue_date: '2019-01-01',
      expiry_date: '2029-01-01',
      issuing_authority: 'CIT Office',
      image: '/docs/cit_certificate.pdf',
      verification_status: 'rejected'
    },
    social_security_fund: {
      id: 'si001',
      id_number: 'SSF98765',
      issue_date: '2018-06-01',
      expiry_date: '2028-06-01',
      issuing_authority: 'SSF Office',
      image: '/docs/ssf_card.pdf',
      verification_status: 'pending'
    },
    provident_fund: {
      id: 'si001',
      id_number: 'PF456789',
      issue_date: '2020-05-01',
      expiry_date: '2030-05-01',
      issuing_authority: 'EPF Nepal',
      image: '/docs/pf.pdf',
      verification_status: 'pending'
    },
    police_clearance: {
      id: 'si001',
      id_number: 'PC112233',
      issue_date: '2022-02-01',
      expiry_date: '2025-02-01',
      issuing_authority: 'Kathmandu Police',
      image: '/docs/police_clearance.pdf',
      verification_status: 'verified'
    },
    health_insurance: {
      id: 'si001',
      id_number: 'HI223344',
      issue_date: '2021-03-15',
      expiry_date: '2026-03-15',
      issuing_authority: 'Nepal Health Board',
      image: '/docs/health_insurance.pdf',
      verification_status: 'verified'
    },
    tax_clearance: {
      id: 'si001',
      id_number: 'TAX556677',
      issue_date: '2023-04-01',
      expiry_date: '2024-04-01',
      issuing_authority: 'IRD Nepal',
      image: '/docs/tax_clearance.pdf',
      verification_status: 'verified'
    }
  },

  supporting_documents: {
    pan: {
      id: 'sd001',
      id_number: 'PAN123456',
      issue_date: '2017-05-01',
      expiry_date: '2027-05-01',
      issuing_authority: 'IRD Nepal',
      image: '/docs/pan.pdf',
      verification_status: 'verified'
    },
    national_id: {
      id: 'sd002',
      id_number: 'NID998877',
      issue_date: '2019-07-01',
      expiry_date: '2029-07-01',
      issuing_authority: 'Home Ministry',
      image: '/docs/nid.pdf',
      verification_status: 'verified'
    },
    citizenship: {
      id: 'sd003',
      id_number: 'CTZ445566',
      issue_date: '2008-01-01',
      expiry_date: undefined,
      issuing_authority: 'Kathmandu District Office',
      image: '/docs/citizenship.pdf',
      verification_status: 'verified'
    },
    passport: {
      id: 'sd004',
      id_number: 'PP778899',
      issue_date: '2021-10-01',
      expiry_date: '2031-10-01',
      issuing_authority: 'Passport Department',
      image: '/docs/passport.pdf',
      verification_status: 'verified'
    },
    driving_license: {
      id: 'sd005',
      id_number: 'DL334455',
      issue_date: '2015-08-01',
      expiry_date: '2025-08-01',
      issuing_authority: 'DoTM Nepal',
      image: '/docs/driving_license.pdf',
      verification_status: 'verified'
    }
  },

  family_information: [
    {
      id: 'fi001',
      name: 'Jane Doe',
      relationship: 'Wife',
      phone_1: '+9779811111111',
      phone_2: '+9779822222222'
    },
    {
      id: 'fi002',
      name: 'Sophia Doe',
      relationship: 'Daughter',
      phone_1: undefined,
      phone_2: undefined
    }
  ],

  education: [
    {
      id: 'ed001',
      institution_name: 'Tribhuvan University',
      course: 'BSc Computer Science',
      start_date: '2008-01-01',
      end_date: '2012-01-01',
      is_current: false,
      percentage_or_gpa: '3.6 GPA'
    },
    {
      id: 'ed002',
      institution_name: 'Kathmandu University',
      course: 'MSc Information Technology',
      start_date: '2013-01-01',
      end_date: '2015-02-14',
      is_current: false,
      percentage_or_gpa: '3.8 GPA'
    }
  ],

  experience: [
    {
      id: 'exp001',
      company_name: 'ABC Tech Pvt. Ltd.',
      designation: 'Junior Developer',
      start_date: '2012-02-01',
      end_date: '2014-05-01',
      is_current: false
    },
    {
      id: 'exp002',
      company_name: 'XYZ Solutions',
      designation: 'Software Engineer',
      start_date: '2014-06-01',
      end_date: '2019-12-01',
      is_current: false
    },
    {
      id: 'exp003',
      company_name: 'InnovateNepal',
      designation: 'Senior Software Engineer',
      start_date: '2020-01-01',
      end_date: null,
      is_current: true
    }
  ]
};

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
