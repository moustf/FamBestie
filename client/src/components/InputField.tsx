import { FC } from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

// import { InputFieldInterface } from '../utils/interfaces/inputField';

export const InputFiled: FC<any> = ({
  control, fieldName, type, placeholder,
}) => (
  <Controller
    name={fieldName}
    control={control}
    render={({ field: { onChange, onBlur, name } }) => (
      <TextField
        margin="normal"
        required
        fullWidth
        label={name}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    )}
  />
);
