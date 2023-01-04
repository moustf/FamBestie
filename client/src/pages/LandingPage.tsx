import { FC } from 'react';
import { CssBaseline } from '@mui/material';
import { Header } from '../components/Header/Header';

import { LandingSection } from '../components/LandingPageComponents/LandingSection';
import { ForClientsSection } from '../components/LandingPageComponents/ForClientsSection';
import { ForWorkersSection } from '../components/LandingPageComponents/ForWorkersSection';
import { RegisterWorkerForm } from '../components/LandingPageComponents/RegisterWorkerForm';
import { Footer } from '../components/Footer/Footer';

export const LandingPage: FC<{ id: number }> = ({ id }) => (
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
