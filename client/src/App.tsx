import { FC } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import { LandingPage } from './pages/LandingPage';
import { Login } from './pages/Login';

const theme = createTheme({
  palette: {
    primary: {
      light: '#9BC5E5',
      main: '#5496C9',
      dark: '#006DBF',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#6052E1',
      main: '#3B319A',
      dark: '#1200B8',
      contrastText: '#000000',
    },
  },
});

const App: FC = () => {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
