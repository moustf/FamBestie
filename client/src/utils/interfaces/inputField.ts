import { Control } from 'react-hook-form';

export interface InputFieldInterface {
  control: Control<{ email: string; password: string; }, any>,
  fieldName: 'email' | 'password',
  type: string,
  placeholder: string,
}
