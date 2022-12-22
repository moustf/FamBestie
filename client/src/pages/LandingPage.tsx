import { FC, useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import { Header } from '../components/Header/Header';

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setUserData, selectUserData } from '../features/auth/authSlice';
import { UserData } from '../utils/interfaces/redux';
import { LandingSection } from '../components/LandingPageComponents/LandingSection';
import { ForClientsSection } from '../components/LandingPageComponents/ForClientsSection';
import { ForWorkersSection } from '../components/LandingPageComponents/ForWorkersSection';
import { RegisterWorkerForm } from '../components/LandingPageComponents/RegisterWorkerForm';

export const LandingPage: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setUserData());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userData: UserData = useAppSelector(selectUserData);

  return (
    <main>
      <CssBaseline />
      <Header isLoggedIn={Boolean(userData.id)} />
      <LandingSection />
      <ForClientsSection />
      <ForWorkersSection />
      <RegisterWorkerForm />
    </main>
  );
};
