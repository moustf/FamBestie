import { FC } from 'react';
import {
  AppBar, Box,
} from '@mui/material';

import { ProfileMenu } from './ProfileMenu';
import { NotificationsMenu } from './NotificationsMenu';
import { HeaderNavbar } from './NavBar';
import { AuthButtons } from './authButtons';
import { AppLogo } from '../Logo';
import { MobileMenu } from './MobileMenu';

export const Header: FC = () => (
  <AppBar sx={{
    boxSizing: 'border-box',
    bgcolor: 'primary.light',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '1rem',
    p: {
      xs: '.5rem 1rem', sm: '.5rem 1rem', md: '.5rem 1rem', lg: '1rem 2.5rem',
    },
  }}
  >
    <Box sx={{
      width: '100%',
      display: {
        xs: 'none', sm: 'none', md: 'none', lg: 'flex',
      },
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: '1rem',
    }}
    >
      <NotificationsMenu />
      <ProfileMenu />
    </Box>
    <Box sx={{
      width: '100%',
      display: {
        xs: 'none', sm: 'none', md: 'none', lg: 'flex',
      },
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
    >
      <AppLogo />
      <HeaderNavbar orientation="horizontal" />
      <AuthButtons isLoggedIn={false} orientation="horizontal" />
    </Box>
    <Box sx={{
      width: '100%',
      display: {
        xs: 'flex', sm: 'flex', md: 'flex', lg: 'none',
      },
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
    >
      <MobileMenu />
      <Box sx={{
        width: { xs: '25%', sm: '15%', md: '11%' },
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      >
        <NotificationsMenu />
        <ProfileMenu />
      </Box>
    </Box>
  </AppBar>
);
