import { FC } from 'react';
import { Card, Typography, Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { Worker } from '../../utils/interfaces/worker';
import { SingleWorkerCard } from './SingleWorkerCard';

export const WorkersCardsSection: FC = () => {
  const { data } = useQuery({
    queryKey: ['getAllWorkersForClient'],
    queryFn: async () => (
      axios.get('/client/workers')
    ),
  });

  const workers = data?.data.data;

  return (
    <Card
      sx={{
        width: '100%',
        height: '56vh',
        padding: ' 2rem 1rem',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
      }}
    >
      <Typography
        variant="h3"
        component="h5"
        sx={{
          color: 'primary.dark',
          fontSize: '2rem',
          textDecoration: 'underline',
          transform: 'skew(-8deg)',
        }}
      >
        The workers who previously worked for me!
      </Typography>
      <Box sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
      }}
      >
        {
          workers?.map((worker: Worker) => <SingleWorkerCard worker={worker} />)
        }
      </Box>
    </Card>
  );
};
