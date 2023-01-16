import axios from 'axios';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, FieldValue } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Container,
  Box,
  CssBaseline,
  Avatar,
  Button,
  Typography,
  Link,
  Alert,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import Swal from 'sweetalert2';

import { SideImage } from '../components/SideImage';
import { loginSchema } from '../utils/validation/loginData';
import { InputFiled } from '../components/InputField';
import { styles } from './formsStyles';

export const Login: FC = () => {
  const navigate = useNavigate();
  // ? This is the mutation function which makes the backend fetch and saves the data in its cache.
  const {
    mutate,
  } = useMutation({
    mutationFn: (inputs) => (
      axios.post('/api/v1/auth/login', inputs)
    ),
    onSuccess: (data): void => {
      if (data.status === 200) {
        navigate('/');
        Swal.fire({
          position: 'bottom-end',
          icon: 'success',
          title: 'Logged in successfully!!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
  });
  // ? This is react form hook which handles the form data and hand it to react query.
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
  });

  // ? The callback I pass to handle submit react form method to make the axios request.
  const onSubmit: SubmitHandler<FieldValue<any>> = (data: any) => mutate(data);

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
          <LoginIcon sx={styles.icon} />
        </Avatar>
        <Typography component="h1" variant="h2">
          Sign in
        </Typography>
        <Container
          maxWidth={false}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={styles.formContainer}
        >
          <InputFiled
            fieldName="email"
            control={control}
            type="email"
            placeholder="Enter your email address..."
            activeStep={10}
          />
          {errors.email && <Alert variant="standard" severity="error">Invalid email address!</Alert>}
          <InputFiled
            fieldName="password"
            control={control}
            type="password"
            placeholder="Enter your password..."
            activeStep={10}
          />
          {errors.password && (
            <Alert variant="standard" severity="error">
              The password should contain at least eight characters including one capital letter,
              one small letter, on number, and on symbol!
            </Alert>
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={styles.submitButton}
          >
            Log In
          </Button>
        </Container>
        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          sx={styles.firstTypography}
        >
          You don&#39;t have an account?
          {' '}
          <Button variant="text">
            <Link color="inherit" href="/signup">Sign Up</Link>
          </Button>
          Now.
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={styles.secondTypography}
        >
          All Rights Reserver Copyright ©
          {' '}
          <Link
            color="inherit"
            href="https://github.com/moustf"
            target="_blank"
          >
            Mustafa Salem
          </Link>
          {' '}
          {new Date().getFullYear()}
          {' '}
          .
        </Typography>
      </Box>
      <SideImage />
    </Container>
  );
};
