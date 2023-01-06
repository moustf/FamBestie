import axios from 'axios';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';
import {
  Container,
  CssBaseline,
  Box,
  Typography,
  Avatar,
  Button,
  Link,
  Alert,
} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {
  useForm, SubmitHandler, FieldValue,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Swal from 'sweetalert2';

import { CustomStepper } from '../components/Stepper';
import { InputFiled } from '../components/InputField';
import { signupSchema } from '../utils/validation/signupData';
import { SideImage } from '../components/SideImage';
import { styles } from './formsStyles';

export const Signup: FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (inputs) => (
      axios.post('/auth/signup', inputs)
    ),
    onSuccess: (data): void => {
      if (data.status === 201) {
        navigate('/login');
        Swal.fire({
          position: 'bottom-end',
          icon: 'success',
          title: 'Account have been created in successfully!!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
  });

  const { control, handleSubmit, formState: { errors, dirtyFields } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      location: '',
      phone: '',
    },
    resolver: yupResolver(signupSchema),
  });

  const isValid = Boolean(
    dirtyFields.name
      && dirtyFields.email
      && dirtyFields.location
      && dirtyFields.password
      && dirtyFields.passwordConfirmation
      && dirtyFields.phone,
  );

  const onSignupSubmit: SubmitHandler<FieldValue<any>> = (data: any) => mutate(data);

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
          onSubmit={handleSubmit(onSignupSubmit)}
          sx={styles.formContainer}
        >
          <InputFiled
            control={control}
            fieldName="name"
            type="text"
            placeholder="Please enter your name ..."
            activeStep={activeStep}
          />
          <InputFiled
            control={control}
            fieldName="email"
            type="email"
            placeholder="Please enter your email ..."
            activeStep={activeStep}
          />
          <InputFiled
            control={control}
            fieldName="location"
            type="text"
            placeholder="Please enter your location ..."
            activeStep={activeStep}
          />
          <InputFiled
            control={control}
            fieldName="password"
            type="password"
            placeholder="Please enter your password ..."
            activeStep={activeStep}
          />
          <InputFiled
            control={control}
            fieldName="passwordConfirmation"
            type="password"
            placeholder="Please confirm your password ..."
            activeStep={activeStep}
          />
          <InputFiled
            control={control}
            fieldName="phone"
            type="number"
            placeholder="Please enter your phone number ..."
            activeStep={activeStep}
          />
          {
            errors.name && activeStep === 0
              && <Alert variant="standard" severity="error">{errors.name.message}</Alert>
          }
          {
            errors.email && activeStep === 0
              && <Alert variant="standard" severity="error">{errors.email.message}</Alert>
          }
          {
            errors.location && activeStep === 0
              && <Alert variant="standard" severity="error">{errors.location.message}</Alert>
          }
          {
            errors.password && activeStep === 1
              && <Alert variant="standard" severity="error">{errors.password.message}</Alert>
          }
          {
            errors.passwordConfirmation && activeStep === 1
              && <Alert variant="standard" severity="error">{errors.passwordConfirmation.message}</Alert>
          }
          {
            errors.phone && activeStep === 2
              && <Alert variant="standard" severity="error">{errors.phone.message}</Alert>
          }
          {activeStep === 2 && (
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={styles.submitButton}
              disabled={!isValid}
            >
              Sign Up
            </Button>
          )}
        </Container>
        <CustomStepper
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          sx={styles.signupFirstTypography}
        >
          You already have an account?
          {' '}
          <Button variant="text">
            <Link color="inherit" href="/login">Sign In</Link>
          </Button>
          Now.
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={styles.signupSecondTypography}
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
