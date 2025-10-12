import { TFilter } from '..';
import { TUser } from '../user-management/user';

export interface TEmployeeBasicInformation {
  date_of_birth?: string;
  gender?: string;
  nationality?: string;
  religion?: string;
  marital_status?: string;
  employment_of_spouse?: string;
  no_of_children?: string;
  blood_group?: string;
  about?: string;

  // Employment
  joining_date?: string;
  department_id?: string;
  designation_id?: string;

  // Address
  province?: string;
  district?: string;
  city?: string;
  address?: string;
  zip_code?: string;
  postal_code?: string;
}

export interface TEmployeeEmergencyContact {
  _id?: string;
  name?: string;
  relationship?: string;
  phone_1?: string;
  phone_2?: string;
}

export interface TEmployeeBankInformation {
  _id?: string;
  bank_name?: string;
  branch_address?: string;
  account_holder_name?: string;
  account_number?: string;
  account_type?: string;
  swift_code?: string;
}

export type TEmployeeDocumentVerificationStatus =
  | 'verified'
  | 'pending'
  | 'rejected';

export type TEmployeeDocumentName =
  | 'citizen_investment_trust'
  | 'social_security_fund'
  | 'provident_fund'
  | 'police_clearance'
  | 'health_insurance'
  | 'tax_clearance'
  | 'pan'
  | 'national_id'
  | 'citizenship'
  | 'passport'
  | 'driving_license';

export interface TEmployeeDocument {
  _id?: string;
  id_number?: string;
  issue_date?: string;
  expiry_date?: string; // If applicable
  issuing_authority?: string; //e.g: Police Station, Passport Office, etc.
  image?: string; // Scanned / Digital Copy
  verification_status?: TEmployeeDocumentVerificationStatus;
}

// For Frontend Only
export interface TEmployeeDocumentList extends TEmployeeDocument {
  document_name?: TEmployeeDocumentName;
}

export interface TEmployeeStatutoryInformation {
  citizen_investment_trust?: TEmployeeDocument; // Citizen Investment Trust Number
  social_security_fund?: TEmployeeDocument; // Social Security Number
  provident_fund?: TEmployeeDocument; // Provident Fund Number
  police_clearance?: TEmployeeDocument; // Police Clearance Report
  health_insurance?: TEmployeeDocument; // Health Insurance Number
  tax_clearance?: TEmployeeDocument; // Tax Clearance Certificate
}

export interface TEmployeeSupportingDocuments {
  pan?: TEmployeeDocument; // PAN Number
  national_id?: TEmployeeDocument; // National ID Number
  citizenship?: TEmployeeDocument; // Citizenship Number
  passport?: TEmployeeDocument; // Passport Number
  driving_license?: TEmployeeDocument; // Driving License Number
}

export interface TEmployeeFamilyInformation {
  _id?: string;
  name?: string;
  relationship?: string;
  phone_1?: string;
  phone_2?: string;
}

export interface TEmployeeEducation {
  _id?: string;
  institution_name?: string;
  course?: string;
  start_date?: string;
  end_date?: string | null;
  is_current?: boolean; // true if the education is currently ongoing
  percentage_or_gpa?: string;
}

export interface TEmployeeExperience {
  _id?: string;
  company_name?: string;
  designation?: string;
  start_date?: string;
  end_date?: string | null;
  is_current?: boolean; // true if the experience is currently ongoing
}

export type TEmployeeFormType =
  | 'basic_info'
  | 'personal_info'
  | 'about_employee'
  | 'emergency_contact'
  | 'bank_information'
  | 'family_information'
  | 'statutory_information'
  | 'supporting_documents'
  | 'education'
  | 'experience';

export interface TEmployee extends TUser {
  _id?: string;
  user_id?: string;
  basic_information?: TEmployeeBasicInformation;
  emergency_contact?: TEmployeeEmergencyContact[];
  bank_information?: TEmployeeBankInformation;
  statutory_information?: TEmployeeStatutoryInformation;
  supporting_documents?: TEmployeeSupportingDocuments;
  family_information?: TEmployeeFamilyInformation[];
  education?: TEmployeeEducation[];
  experience?: TEmployeeExperience[];

  // Form Type -> For Frontend Only
  form_type?: TEmployeeFormType;
}

export interface TEmployeeFilter extends TFilter {}
