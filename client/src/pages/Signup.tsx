import axios from 'axios';
import { FC, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import {
  Container,
  CssBaseline,
  Box,
  Typography,
  Avatar,
} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {
  useForm, SubmitHandler, FieldValue,
} from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';

import { CustomStepper } from '../components/Stepper';
import { InputFiled } from '../components/InputField';
// import { signupSchema } from '../utils/validation/signupData';
import { SideImage } from '../components/SideImage';
import { styles } from './formsStyles';

export const Signup: FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useMutation({
    mutationFn: (inputs) => (
      axios.post('/auth/signup', inputs)
    ),
  });

  const { control, handleSubmit } = useForm();

  const onSignupSubmit: SubmitHandler<FieldValue<any>> = (data: any) => console.log(data);

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
          />
          <InputFiled
            control={control}
            fieldName="email"
            type="email"
            placeholder="Please enter your email ..."
          />
          <InputFiled
            control={control}
            fieldName="location"
            type="text"
            placeholder="Please enter your location ..."
          />
          {/* <InputFiled
            control={control}
            fieldName="password confirmation"
            type="password"
            placeholder="Please confirm your password ..."
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={styles.submitButton}
          >
            Sign Up
          </Button> */}
        </Container>
        <CustomStepper
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      </Box>
      <SideImage />
    </Container>
  );
};
