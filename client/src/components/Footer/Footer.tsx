import { FC } from 'react';
import { Box, Typography, Link } from '@mui/material';

import { SocialLinks } from './SocialLinks';
import { FooterNav } from './FooterNav';

export const Footer: FC = () => (
  <Box sx={{
    width: '100%',
    minHeight: '10rem',
    padding: '2rem 0',
    bgcolor: 'primary.light',
    transform: 'translateY(20rem)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
  }}
  >
    <SocialLinks />
    <FooterNav />
    <Typography variant="body1" sx={{ color: 'primary.contrastText' }}>
      All rights reserver © 2022-2023 |
      {' '}
      <Link href="mailto: mustafaissasalem@gmail.com">Mustafa Salem</Link>
    </Typography>
  </Box>
);
