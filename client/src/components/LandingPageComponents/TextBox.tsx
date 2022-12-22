import { FC } from 'react';
import { Typography } from '@mui/material';

export const TextBox: FC<{ text: string }> = ({ text }) => (
  <Typography
    variant="body1"
    gutterBottom
    sx={{
      maxWidth: '100%',
      fontSize: {
        xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.5rem', xl: '1.5rem',
      },
      bgcolor: 'secondary.light',
      color: 'primary.dark',
      borderRadius: '2rem',
      padding: '0.5rem 2rem',
      boxShadow: '0px 0px 5px 1px rgba(255, 229, 116, 0.15)',
      position: 'relative',
      '&:before': {
        content: '"  "',
        width: '2rem',
        height: '2rem',
        bgcolor: 'secondary.light',
        borderRadius: '0.7rem',
        boxShadow: '0px 0px 5px 1px rgba(255, 229, 116, 0.15)',
        position: 'absolute',
        left: '-3rem',
        top: '30%',
      },
    }}
  >
    {text}
  </Typography>
);
