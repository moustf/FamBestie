import { FC } from 'react';
import { Box, CircularProgress } from '@mui/material';

export const Spinner: FC = () => (
  <Box sx={{
    width: '100%',
    height: '20rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
  >
    <CircularProgress />
  </Box>
);
