import axios from 'axios';
import { FC } from 'react';
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
  useMediaQuery,
  Alert,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { SideImage } from '../components/SideImage';
import { loginSchema } from '../utils/validation/loginData';
import { InputFiled } from '../components/InputField';

const theme = createTheme();

export const Login: FC = () => {
  // ? This is the breakpoint I use to custom the theme for mobile design.
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));
  // ? This is the mutation function which makes the backend fetch and saves the data in its cache.
  const {
    mutate,
  } = useMutation({
    mutationFn: (inputs) => (
      axios.post('/auth/login', inputs)
    ),
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
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth={false}
        sx={{
          p: '0 !important',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: matchesMD ? 'space-between' : 'center',
          alignItems: 'center',
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            width: '60%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.2rem',
            pt: '10rem',
          }}
        >
          <Avatar sx={{
            width: 80, height: 80, m: 1, bgcolor: 'primary.main',
          }}
          >
            <LoginIcon sx={{ fontSize: 'xx-large' }} />
          </Avatar>
          <Typography component="h1" variant="h2">
            Sign in
          </Typography>
          <Container
            maxWidth={false}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              width: matchesMD ? '60%' : '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem',
            }}
          >
            <InputFiled
              fieldName="email"
              control={control}
              type="email"
              placeholder="Enter your email address..."
            />
            {errors.email && <Alert variant="standard" severity="error">Invalid email address!</Alert>}
            <InputFiled
              fieldName="password"
              control={control}
              type="password"
              placeholder="Enter your password..."
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
              sx={{ mt: 2, height: '3rem' }}
            >
              Log In
            </Button>
            <Typography variant="body1" color="text.secondary" align="center" sx={{ mt: matchesMD ? 3 : 5 }}>
              You don&#39;t have an account?
              {' '}
              <Button variant="text">
                <Link color="inherit" href="/signup" target="_blank">Sign Up</Link>
              </Button>
              Now.
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: matchesMD ? '11%' : 6 }}>
              All Rights Reserver Copyright ©
              {' '}
              <Link color="inherit" href="https://github.com/moustf" target="_blank">Mustafa Salem</Link>
              {' '}
              {new Date().getFullYear()}
              {' '}
              .
            </Typography>
          </Container>
        </Box>
        {matchesMD && <SideImage />}
      </Container>
    </ThemeProvider>
  );
};
