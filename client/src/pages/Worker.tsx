import { FC } from 'react';
import { Container } from '@mui/material';

import { Header } from '../components/Header/Header';
import { FiltersSection } from '../components/Worker/FiltersSection';

export const Worker: FC<{ id: number }> = ({ id }) => (
  <Container
    maxWidth={false}
    component="main"
    sx={{
      width: '100%',
      minHeight: '100vh',
    }}
  >
    <Header isLoggedIn={Boolean(id)} home={false} />
    <FiltersSection />
  </Container>
);
