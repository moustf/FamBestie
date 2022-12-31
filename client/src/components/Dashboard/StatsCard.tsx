import { FC, ReactElement } from 'react';

import {
  Card, Typography, Box,
} from '@mui/material';

export const StatsCard: FC<{
  title: string,
  number: number | string,
  icon: ReactElement<any, any>,
}> = ({ title, number, icon }) => (
  <Card sx={{
    width: '100%',
    minHeight: '12rem',
    p: 3,
    display: 'flex',
    justifyContent: 'space-between',
  }}
  >
    <Box>
      <Typography
        component="p"
        variant="body2"
        sx={{
          mb: 1.5,
          color: 'gray',
        }}
      >
        {title}
      </Typography>
      <Typography
        component="h3"
        variant="h2"
        sx={{
          fontWeight: 500,
        }}
      >
        {number}
      </Typography>
    </Box>
    {icon}
  </Card>
);
