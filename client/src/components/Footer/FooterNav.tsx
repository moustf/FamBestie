import { FC } from 'react';
import { Box, Link } from '@mui/material';

export const FooterNav: FC = () => (
  <Box sx={{
    width: {
      xs: '100%', sm: '80%', md: '100%', lg: '40%',
    },
    bgcolor: 'transparent',
    display: 'flex',
    justifyContent: 'space-between',
    '& a': {
      textDecoration: 'none',
      color: 'primary.contrastText',
      fontSize: {
        xs: '0.7rem', sm: '0.8rm', md: '0.8rem', lg: '1.2rem',
      },
      '&:hover': {
        color: 'primary.dark',
      },
    },
  }}
  >
    <Link href="#about">
      About
    </Link>
    <Link href="/#forClients">
      For Clients
    </Link>
    <Link href="/#forWorkers">
      For Workers
    </Link>
    <Link href="/#joinOurFamily">
      Join Our Family
    </Link>
    <Link href="/worker">
      Workers Page
    </Link>
  </Box>
);
