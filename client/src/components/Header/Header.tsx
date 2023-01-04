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

export const Header: FC<{ isLoggedIn: boolean, home: boolean }> = ({ isLoggedIn, home }) => (
  <AppBar
    sx={{
      width: '100vw',
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
    {
      isLoggedIn && (
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
      )
    }
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
      {home && <HeaderNavbar orientation="horizontal" />}
      <AuthButtons isLoggedIn={isLoggedIn} orientation="horizontal" />
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
      <MobileMenu isLoggedIn={isLoggedIn} home={home} />
      <Box sx={{
        width: { xs: '25%', sm: '15%', md: '11%' },
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      >
        {
          isLoggedIn && (
            <>
              <NotificationsMenu />
              <ProfileMenu />
            </>
          )
        }
        {
          !isLoggedIn && (
            <section style={{ width: '6rem' }}>
              <AppLogo />
            </section>
          )
        }
      </Box>
    </Box>
  </AppBar>
);
