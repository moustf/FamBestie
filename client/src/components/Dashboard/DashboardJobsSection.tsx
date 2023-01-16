import { FC, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Grid, Alert, Box, CssBaseline, FormControl, InputLabel, NativeSelect,
} from '@mui/material';
import axios from 'axios';

import { Spinner } from '../Spinner';
import { JobsBoxDashboard } from './JobsBoxDashboard';
import { JobsTable } from './JobsTable';

export const DashboardJobsSection: FC = () => {
  const [specialty, setSpecialty] = useState('all');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['getAllJobsForAdmin'],
    queryFn: async () => (
      axios.get('/api/v1/admin/jobs')
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
      p: '3rem 1.5rem',
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
          lg={6}
          xl={6}
        >
          <JobsBoxDashboard data={data.data.data} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
        >
          <Box
            sx={{
              width: '100%',
              p: '3rem 2rem',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <FormControl fullWidth sx={{ height: '5rem' }}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Specialty
              </InputLabel>
              <NativeSelect
                defaultValue="all"
                inputProps={{
                  name: 'specialty',
                  id: 'uncontrolled-native',
                }}
                onChange={(e) => setSpecialty(e.target.value)}
              >
                <option value="all">All</option>
                <option value="driver">Driver</option>
                <option value="guard">Guard</option>
                <option value="babysitter">Babysitter</option>
                <option value="housekeeper">Housekeeper</option>
                <option value="trainer">Trainer</option>
              </NativeSelect>
            </FormControl>
            <Box sx={{
              width: '100%',
              p: '1.5rem',
            }}
            >
              <JobsTable specialty={specialty} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
