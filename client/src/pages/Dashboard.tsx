import { FC } from 'react';
import { Box, Grid, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router';

import { DashboardNavbar } from '../components/Dashboard/DashboardNavbar';

export const Dashboard: FC = () => (
  <Box
    component="main"
    sx={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexGrow: 1,
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
        sm={5}
        lg={3}
        xl={3}
      >
        <DashboardNavbar />
      </Grid>
      <Grid
        item
        xs={12}
        sm={7}
        lg={9}
        xl={9}
      >
        <Outlet />
      </Grid>
    </Grid>
  </Box>
);
