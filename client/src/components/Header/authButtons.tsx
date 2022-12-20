import { FC } from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';

export const AuthButtons: FC<{ isLoggedIn: boolean, orientation: 'horizontal' | 'vertical' }> = ({ isLoggedIn, orientation }) => {
  const logout = useLogout();

  return (
    <Box sx={{
      width: {
        xs: '100%', sm: '100%', md: '100%', lg: '10%',
      },
      display: 'flex',
      flexDirection: orientation === 'horizontal' ? 'row' : 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: {
        xs: '1rem', sm: '1rem', md: '1rem', lg: 'none',
      },
      mt: {
        xs: '3rem', ms: '3rem', md: '3rem', lg: '0',
      },
    }}
    >
      {
        !isLoggedIn
          && (
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={{ boxShadow: '0px 0px 5px 0px rgba(255, 255, 255, .15)' }}>
              Login
            </Button>
          </Link>
          )
      }
      {
        !isLoggedIn
          && (
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={{ boxShadow: '0px 0px 5px 0px rgba(255, 255, 255, .15)' }}>
              Signup
            </Button>
          </Link>
          )
  }
      {
        isLoggedIn
          && (
          <Button variant="contained" sx={{ boxShadow: '0px 0px 5px 0px rgba(255, 255, 255, .15)' }} onClick={logout}>
            Logout
          </Button>
          )
      }
    </Box>
  );
};
