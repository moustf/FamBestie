import { FC } from 'react';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import {
  Container, CssBaseline, Box, Typography, Avatar, Button,
} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useForm, SubmitHandler, FieldValue } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { InputFiled } from '../components/InputField';
import { signupSchema } from '../utils/validation/signupData';
import { SideImage } from '../components/SideImage';
import { styles } from './formsStyles';

export const Signup: FC = () => {
  useMutation({
    mutationKey: ['signup'],
    mutationFn: (inputs) => (
      axios.post('/auth/signup', inputs)
    ),
  });

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      location: '',
      phoneNumber: '',
    },
    resolver: yupResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<FieldValue<any>> = () => console.log('here');

  return (
    <Container
      component="main"
      maxWidth={false}
      sx={styles.mainContainer}
      style={{ padding: 0 }}
    >
      <CssBaseline />
      <Box
        sx={styles.box}
      >
        <Avatar sx={styles.avatar}>
          <AccountBoxIcon sx={styles.icon} />
        </Avatar>
        <Typography component="h1" variant="h2">
          Sign up
        </Typography>
        <Container
          component="form"
          maxWidth={false}
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputFiled
            control={control}
            fieldName="name"
            type="string"
            placeholder="Type your name ..."
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={styles.submitButton}
          >
            Sign Up
          </Button>
        </Container>
      </Box>
      <SideImage />
    </Container>
  );
};
