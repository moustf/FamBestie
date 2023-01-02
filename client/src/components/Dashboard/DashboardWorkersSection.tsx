import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import { WorkersTable } from './WorkersTable';

export const DashboardWorkersSection: FC = () => (
  <Box sx={{
    width: '100%',
    height: '100%',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5rem',
  }}
  >
    <Typography
      component="h2"
      variant="h3"
      sx={{ fontWeight: 500, color: 'primary.dark' }}
    >
      All Workers Section
    </Typography>
    <WorkersTable />
  </Box>
);
