import { ReactElement } from 'react';

export interface DataOut {
  name: string;
  email: string;
  gender?: string;
  location: string;
  phone: string;
  state?: string;
  specialty?: string;
  dateOfBirth?: Date;
  yearsOfExperience?: Date;
  hiringDate?: Date;
  joiningDate: Date;
  visibility?: boolean;
  title?: string;
  details?: string;
  stars?: number;
  'review_text'?: string;
  'working_hours'?: string;
  bill?: number;
  drawer?: ReactElement<any, any>,
}
export interface Column {
  id: keyof DataOut;
  label: string;
  minWidth: number;
  align?: 'right' | 'center';
  // eslint-disable-next-line no-unused-vars
  format?: (value: string | Date) => string;
}

export interface DataIn {
  id: number;
  name: string;
  email: string;
  gender?: string;
  location: string;
  phone: string;
  state?: string;
  specialty?: string;
  'date_of_birth'?: Date;
  'years_of_experience'?: Date;
  'hiring_date'?: Date;
  visibility?: boolean;
  createdAt: Date;
  updatedAt?: Date;
}
