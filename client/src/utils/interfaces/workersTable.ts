import { ReactElement } from 'react';

export interface Column {
  id: (
    'name'
    | 'email'
    | 'gender'
    | 'location'
    | 'phone'
    | 'dateOfBirth'
    | 'state'
    | 'specialty'
    | 'yearsOfExperience'
    | 'hiringDate'
    | 'joiningDate'
    | 'drawer'
  );
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
  gender: string;
  location: string;
  phone: string;
  state: string;
  specialty: string;
  'date_of_birth': Date;
  'years_of_experience': Date;
  'hiring_date': Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface DataOut {
  name: string;
  email: string;
  gender: string;
  location: string;
  phone: string;
  state: string;
  specialty: string;
  dateOfBirth: Date;
  yearsOfExperience: Date;
  hiringDate: Date;
  joiningDate: Date;
  drawer: ReactElement<any, any>,
}
