import { FC } from 'react';
import {
  Box, Grid, Alert,
} from '@mui/material';
import {
  Paid as PaidIcon,
  GroupAdd as GroupAddIcon,
  GroupRemove as GroupRemoveIcon,
  Work as WorkIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { StatsCard } from './StatsCard';
import { Spinner } from '../Spinner';
import { JobsChart } from './JobsChart';

export const DashboardStatsSection: FC = () => {
  const {
    isLoading, isError, data,
  } = useQuery({
    queryKey: ['fetchTotalStatistics'],
    queryFn: async () => (
      axios
        .get('/api/v1/admin/statistics')
    ),
  });

  if (isLoading) return <Spinner />;
  if (isError) {
    return (
      <Alert
        sx={{
          width: '99%',
          height: '5rem',
          mt: 5,
          display: 'flex',
          alignItems: 'center',
        }}
        severity="error"
      >
        Something went wrong ...
      </Alert>
    );
  }

  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      p: 3,
    }}
    >
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={4}
        >
          <StatsCard
            title="Total Income"
            number={`$${data?.data.data.totalIncome}`}
            icon={<PaidIcon sx={{ fontSize: '5rem', color: 'secondary.dark' }} />}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={4}
        >
          <StatsCard
            title="No. of Hired Workers"
            number={data?.data.data.totalNumOfHiredWorkers}
            icon={<GroupAddIcon sx={{ fontSize: '5rem', color: 'secondary.dark' }} />}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={4}
        >
          <StatsCard
            title="No. of Unemployed Workers"
            number={data?.data.data.totalNumOfUnemployedWorkers}
            icon={<GroupRemoveIcon sx={{ fontSize: '5rem', color: 'secondary.dark' }} />}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={4}
        >
          <StatsCard
            title="No. of Jobs"
            number={data?.data.data.totalNumOfJobs}
            icon={<WorkIcon sx={{ fontSize: '5rem', color: 'secondary.dark' }} />}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={4}
        >
          <StatsCard
            title="No. of Clients"
            number={data?.data.data.totalNumOfClients}
            icon={<PersonIcon sx={{ fontSize: '5rem', color: 'secondary.dark' }} />}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <JobsChart />
        </Grid>
      </Grid>
    </Box>
  );
};
