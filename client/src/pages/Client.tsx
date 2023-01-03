import { FC } from 'react';
import {
  CssBaseline, Container, Grid,
} from '@mui/material';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { ClientInfoCard } from '../components/Client/clientInfoCard';
import { ClientMoneyCard } from '../components/Client/ClientMoneyCard';
import { WorkersCardsSection } from '../components/Client/WorkersCardsSection';

export const Client: FC = () => {
  const { userId } = useParams();
  const { data } = useQuery({
    queryKey: [`getClientInfo${userId}`],
    queryFn: async () => (
      axios.get('/client/info')
    ),
  });

  const userInfo = data?.data.data;

  return (
    <Container
      maxWidth={false}
      component="main"
      sx={{
        width: '100%',
        padding: '2rem',
      }}
    >
      <CssBaseline />
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={9}
          xl={9}
        >
          <ClientInfoCard userInfo={userInfo} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={3}
          xl={3}
        >
          <ClientMoneyCard />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <WorkersCardsSection />
        </Grid>
      </Grid>
    </Container>
  );
};
