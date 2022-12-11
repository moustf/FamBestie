import { FC } from 'react';
import { Controller } from 'react-hook-form';
import Input from '@mui/material/Input';

import { InputFieldInterface } from '../utils/interfaces/inputField';

export const InputFiled: FC<InputFieldInterface> = ({
  control, fieldName, type, placeholder,
}) => (
  <Controller
    name={fieldName}
    control={control}
    render={({ field: { onChange, onBlur, name } }) => (
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    )}
  />
);
