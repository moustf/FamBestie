import { FC, useState, ChangeEvent } from 'react';
import {
  Container, Pagination, PaginationItem, Stack, Box,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';

import { Header } from '../components/Header/Header';
import { FiltersSection } from '../components/Worker/FiltersSection';
import { WorkerCard } from '../components/Worker/workerCard';
import { WorkerCardObject } from '../utils/interfaces/worker';

export const Worker: FC<{ id: number }> = ({ id }) => {
  const [offset, setOffset] = useState(1);
  const [workers, setWorkers] = useState([]);

  return (
    <Container
      maxWidth={false}
      component="main"
      sx={{
        width: '100%',
        minHeight: '100vh',
      }}
    >
      <Header isLoggedIn={Boolean(id)} home={false} />
      <FiltersSection offset={offset} setWorkers={setWorkers} />
      <Box
        sx={{
          width: '100%',
          height: {
            xs: '100vh', sm: '100vh', md: '80vh', lg: '55vh', xl: '55vh',
          },
          display: 'flex',
          flexDirection: {
            xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row',
          },
          alignItems: 'center',
          gap: '4.5rem',
          transform: 'translateY(12rem)',
          pb: '5rem',
        }}
      >
        {
          workers.map((worker: WorkerCardObject) => (
            <WorkerCard worker={worker} />
          ))
        }
      </Box>
      <Stack
        spacing={2}
        sx={{
          width: {
            xs: '100%', sm: '100%', md: '50%', lg: '30%', xl: '20%',
          },
          height: '3rem',
          position: 'fixed',
          bottom: 0,
          right: 0,
          '& .Mui-selected': { bgcolor: 'primary.light' },
        }}
      >
        <Pagination
          count={10}
          onChange={(event: ChangeEvent<unknown>, page: number) => {
            setOffset(page);
          }}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
              sx={{ color: 'primary.dark' }}
            />
          )}
        />
      </Stack>
    </Container>
  );
};
