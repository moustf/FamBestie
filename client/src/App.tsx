import { FC, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import { useAppDispatch, useAppSelector } from './hooks/redux';
import { setUserData, selectUserData } from './features/auth/authSlice';
import { UserData } from './utils/interfaces/redux';
import { LandingPage } from './pages/LandingPage';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { DashboardStatsSection } from './components/Dashboard/DashboardStatsSection';
import { DashboardWorkersSection } from './components/Dashboard/DashboardWorkersSection';
import { DashboardClientsSection } from './components/Dashboard/DashboardClientsSection';
import { DashboardJobsSection } from './components/Dashboard/DashboardJobsSection';
import { Client } from './pages/Client';
import { Worker } from './pages/Worker';

const theme = createTheme({
  palette: {
    primary: {
      light: '#9BC5E5',
      main: '#5496C9',
      dark: '#006DBF',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#FFE574',
      main: '#EAC72F',
      dark: '#F6C800',
      contrastText: '#000000',
    },
  },
});

const App: FC = () => {
  const queryClient = new QueryClient();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setUserData());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userData: UserData = useAppSelector(selectUserData);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage id={userData.id} />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
      children: [
        {
          index: true,
          element: <DashboardStatsSection />,
        },
        {
          path: 'statistics',
          element: <DashboardStatsSection />,
        },
        {
          path: 'workers',
          element: <DashboardWorkersSection />,
        },
        {
          path: 'clients',
          element: <DashboardClientsSection />,
        },
        {
          path: 'jobs',
          element: <DashboardJobsSection />,
        },
      ],
    },
    {
      path: '/client/:clientId',
      element: <Client />,
    },
    {
      path: '/worker',
      element: <Worker id={userData.id} />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
