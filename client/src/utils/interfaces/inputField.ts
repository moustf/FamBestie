import { Control } from 'react-hook-form';

export interface InputFieldInterface {
  control: Control<any>,
  fieldName: 'email' | 'password' | 'name',
  type: string,
  placeholder: string,
}

// {
//   email: string; password: string;
// }| {
//   name: string;
//   email: string;
//   password: string,
//   passwordConfirmation: string;
//   location: string;
//   phoneNumber: string;
// },
