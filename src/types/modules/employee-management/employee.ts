import { TFilter } from '..';
import { TUser } from '../user-management/user';

export interface TEmployeeBasicInformation {
  date_of_birth?: string;
  gender?: string;
  nationality?: string;
  religion?: string;
  marital_status?: string;
  employment_spouse?: string;
  no_of_children?: string;
  blood_group?: string;

  // Employment
  joining_date?: string;
  department_id?: string;
  designation_id?: string;

  // Address
  province_id?: string;
  district_id?: string;
  city_id?: string;
  address?: string;
  zip_code?: string;
  postal_code?: string;
}

export interface TEmployeeEmergencyContact {
  name?: string;
  relationship?: string;
  phone_1?: string;
  phone_2?: string;
}

export interface TEmployeeBankInformation {
  bank_name?: string;
  branch_address?: string;
  account_holder_name?: string;
  account_number?: string;
  account_type?: string;
  swift_code?: string;
}

export interface TEmployeeDocument {
  id_number?: string;
  issue_date?: string;
  expiry_date?: string; // If applicable
  issuing_authority?: string; //e.g: Police Station, Passport Office, etc.
  file_url?: string; // Scanned / Digital Copy
  verification_status?: string; // Pending, Verified, Rejected
}

export interface TEmployeeStatutoryInformation {
  pan?: TEmployeeDocument; // PAN Number
  cit?: TEmployeeDocument; // Citizen Investment Trust Number
  ssf?: TEmployeeDocument; // Social Security Number
  epf?: TEmployeeDocument; // Employee Provident Fund Number
  nid?: TEmployeeDocument; // National ID Number
  citizenship?: TEmployeeDocument; // Citizenship Number
}

export interface TEmployeeSupportingDocuments {
  passport?: TEmployeeDocument; // Passport Number
  police_clearance?: TEmployeeDocument; // Police Clearance Report
  driving_license?: TEmployeeDocument; // Driving License Number
  health_insurance?: TEmployeeDocument; // Health Insurance Number
  tax_clearance?: TEmployeeDocument; // Tax Clearance Certificate
}

export interface TFamilyInformation {
  name?: string;
  relationship?: string;
  phone_1?: string;
  phone_2?: string;
  email?: string;
}

export interface TEmployeeEducation {
  institution_name?: string;
  course?: string;
  start_date?: string;
  end_date?: string | null;
  is_current?: boolean; // true if the education is currently ongoing
  percentage_or_gpa?: string;
}

export interface TEmployeeExperience {
  company_name?: string;
  designation?: string;
  start_date?: string;
  end_date?: string | null;
  is_current?: boolean; // true if the experience is currently ongoing
}

export interface TEmployee extends TUser {
  joining_date?: string; // might needs to remove this
  date_of_birth?: string; // might needs to remove this
  basic_information?: TEmployeeBasicInformation;
  emergency_contact?: TEmployeeEmergencyContact[];
  about?: string;
  bank_information?: TEmployeeBankInformation;
  statutory_information?: TEmployeeStatutoryInformation;
  supporting_documents?: TEmployeeSupportingDocuments;
  family_information?: TFamilyInformation[];
  education?: TEmployeeEducation[];
  experience?: TEmployeeExperience[];
}

export interface TEmployeeFilter extends TFilter {}
