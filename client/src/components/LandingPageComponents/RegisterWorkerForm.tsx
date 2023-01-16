import { FC } from 'react';
import {
  Container, Typography, Button, Alert,
} from '@mui/material';
import { useForm, SubmitHandler, FieldValue } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';
import { styles } from '../../pages/formsStyles';

import { InputFiled } from '../InputField';
import { registerFormSchema } from '../../utils/validation/registerForm';

export const RegisterWorkerForm: FC = () => {
  const { mutate } = useMutation({
    mutationFn: (inputs) => (
      axios.post('/api/v1/worker/register', inputs)
    ),
  });

  const initValues = {
    name: '',
    email: '',
    phone: '',
    location: '',
    gender: '',
    specialty: '',
    dateOfBirth: '',
    yearsOfExperience: 0,
  };

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initValues,
    resolver: yupResolver(registerFormSchema),
  });

  const onFormSubmit: SubmitHandler<FieldValue<any>> = (data: any, e) => {
    mutate(data);
    e?.target.reset();
    Swal.fire({
      position: 'bottom-end',
      icon: 'success',
      title: 'Logged in successfully!!',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <Container
      maxWidth={false}
      id="joinOurFamily"
      sx={{
        width: '100%',
        height: {
          xs: '115vh', sm: '85vh', md: '110vh', lg: '110vh', xl: '110vh',
        },
        maxWidth: {
          xs: '90%', sm: '90%', md: '80%', lg: '1400px', xl: '1500px',
        },
        transform: {
          xs: 'translateY(15rem)', sm: 'translateY(15rem)', md: 'translateY(18rem)', lg: 'translateY(20rem)', xl: 'translateY(20rem)',
        },
        p: '0 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: {
          xs: '4rem', sm: '4rem', md: '6rem', lg: '8rem', xl: '8rem',
        },
      }}
    >
      <Typography
        variant="h1"
        component="h2"
        sx={{
          color: 'primary.dark',
          fontSize: {
            xs: '1.5rem', sm: '2.5rem', md: '2.5rem', lg: '3rem', xl: '3.5rem',
          },
          position: 'relative',
          '&:before': {
            content: '" "',
            position: 'absolute',
            width: '90%',
            height: '3px',
            top: {
              xs: '3.5rem', sm: '3.5rem', md: '4rem', lg: '7rem', xl: '8rem',
            },
            left: '5%',
            borderRadius: '0.8rem',
            bgcolor: 'primary.dark',
          },
        }}
      >
        Join Our Family -Worker-
      </Typography>
      <Container
        component="form"
        maxWidth={false}
        onSubmit={handleSubmit(onFormSubmit)}
        sx={{
          width: { xs: '100%', sm: '100%', md: '60%' },
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem',
        }}
      >
        <InputFiled
          control={control}
          fieldName="name"
          type="text"
          placeholder="Please enter your name ..."
          activeStep={10}
        />
        {errors.name && <Alert variant="standard" severity="error">{errors.name.message}</Alert>}
        <InputFiled
          control={control}
          fieldName="email"
          type="email"
          placeholder="Please enter your email ..."
          activeStep={10}
        />
        {errors.email && <Alert variant="standard" severity="error">{errors.email.message}</Alert>}
        <InputFiled
          control={control}
          fieldName="phone"
          type="phone"
          placeholder="Please enter your phone ..."
          activeStep={10}
        />
        {errors.phone && <Alert variant="standard" severity="error">{errors.phone.message}</Alert>}
        <InputFiled
          control={control}
          fieldName="location"
          type="text"
          placeholder="Please enter your location ..."
          activeStep={10}
        />
        {errors.location && <Alert variant="standard" severity="error">{errors.location.message}</Alert>}
        <InputFiled
          control={control}
          fieldName="gender"
          type="text"
          placeholder="Please enter your gender ..."
          activeStep={10}
        />
        {errors.gender && <Alert variant="standard" severity="error">{errors.gender.message}</Alert>}
        <InputFiled
          control={control}
          fieldName="specialty"
          type="text"
          placeholder="Please enter your specialty ..."
          activeStep={10}
        />
        {errors.specialty && <Alert variant="standard" severity="error">{errors.specialty.message}</Alert>}
        <InputFiled
          control={control}
          fieldName="dateOfBirth"
          type="date"
          placeholder="Please enter your date of birth ..."
          activeStep={10}
        />
        {errors.dateOfBirth && <Alert variant="standard" severity="error">{errors.dateOfBirth.message}</Alert>}
        <InputFiled
          control={control}
          fieldName="yearsOfExperience"
          type="number"
          placeholder="Please enter your years of experience ..."
          activeStep={10}
        />
        {errors.yearsOfExperience && <Alert variant="standard" severity="error">{errors.yearsOfExperience.message}</Alert>}
        <Button
          type="submit"
          variant="contained"
          sx={{
            ...styles.submitButton,
            mb: '3rem',
          }}
        >
          Submit
        </Button>
      </Container>
    </Container>
  );
};
