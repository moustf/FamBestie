import { Control } from 'react-hook-form';

export interface InputFieldInterface {
  control: Control<any>,
  fieldName: string,
  type: string,
  placeholder: string,
  activeStep: number,
}
