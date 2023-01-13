import { FC, useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import { Header } from '../components/Header/Header';

import { LandingSection } from '../components/LandingPageComponents/LandingSection';
import { ForClientsSection } from '../components/LandingPageComponents/ForClientsSection';
import { ForWorkersSection } from '../components/LandingPageComponents/ForWorkersSection';
import { RegisterWorkerForm } from '../components/LandingPageComponents/RegisterWorkerForm';
import { Footer } from '../components/Footer/Footer';
import { useAppDispatch } from '../hooks/redux';
import { setUserData } from '../features/auth/authSlice';

export const LandingPage: FC<{ id: number }> = ({ id }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getData = async (): Promise<any> => {
      const data = await dispatch(setUserData());
      return data;
    };
    console.log(getData());
  }, []);

  return (
    <main>
      <CssBaseline />
      <Header isLoggedIn={Boolean(id)} home />
      <LandingSection />
      <ForClientsSection />
      <ForWorkersSection />
      <RegisterWorkerForm />
      <Footer />
    </main>
  );
};
