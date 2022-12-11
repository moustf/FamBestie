import axios from 'axios';
import { FC } from 'react';
import { useForm, SubmitHandler, FieldValue } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';

import { SideImage } from '../components/SideImage';
import { loginSchema } from '../utils/validation/loginData';
import { InputFiled } from '../components/InputField';

export const Login: FC = () => {
  const {
    mutate,
  } = useMutation({
    mutationFn: (inputs) => (
      axios.post('/auth/login', inputs)
    ),
  });
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<FieldValue<any>> = (data: any) => {
    mutate(data);
  };

  return (
    <section style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
    >
      <Box>
        <LoginIcon />
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputFiled
            fieldName="email"
            control={control}
            type="email"
            placeholder="Enter your email address..."
          />
          <InputFiled
            fieldName="password"
            control={control}
            type="password"
            placeholder="Enter your password..."
          />
        </form>
      </Box>
      <SideImage />
    </section>
  );
};
