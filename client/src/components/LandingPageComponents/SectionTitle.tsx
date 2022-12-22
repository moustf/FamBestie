import { FC } from 'react';
import { Typography } from '@mui/material';

export const SectionTitle: FC<{ title: string }> = ({ title }) => (
  <Typography
    variant="h1"
    component="h1"
    sx={{
      color: 'primary.dark',
      fontSize: {
        xs: '2.5rem', sm: '2.5rem', md: '3rem', lg: '4rem', xl: '5rem',
      },
      position: 'relative',
      '&:before': {
        content: '" "',
        position: 'absolute',
        width: '90%',
        height: '3px',
        top: {
          xs: '3.5rem', sm: '3.5rem', md: '4rem', lg: '7rem', xl: '8rem',
        },
        left: '5%',
        borderRadius: '0.8rem',
        bgcolor: 'primary.dark',
      },
    }}
  >
    {title}
  </Typography>
);
