import { FC } from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

import { InputFieldInterface } from '../utils/interfaces/inputField';

const signupSteps: {
  [k: number]: string[],
} = {
  0: ['name', 'email', 'location'],
  1: ['password', 'passwordConfirmation'],
  2: ['phone'],
};

export const InputFiled: FC<InputFieldInterface> = ({
  control, fieldName, type, placeholder, activeStep,
}) => (
  <Controller
    name={fieldName}
    control={control}
    render={({ field: { onChange, onBlur, name } }) => (
      <TextField
        margin="normal"
        required
        fullWidth
        label={
          name === 'passwordConfirmation'
            ? 'Password Confirmation'
            : name === 'phone'
              ? 'Phone Number'
              : name === 'dateOfBirth'
                ? 'Date Of Birth'
                : name === 'yearsOfExperience'
                  ? 'Years Of Experience'
                  : `${name.charAt(0).toUpperCase()}${name.substring(1)}`
        }
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        sx={{
          display: activeStep === 10 || signupSteps[activeStep].includes(fieldName) ? 'block' : 'none',
        }}
      />
    )}
  />
);
