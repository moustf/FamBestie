import {
  FC, useState, KeyboardEvent, MouseEvent,
} from 'react';
import { Box, Button, SwipeableDrawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { HeaderNavbar } from './NavBar';
import { AuthButtons } from './authButtons';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUserData, selectUserData } from '../../features/auth/authSlice';

export const MobileMenu: FC = () => {
  const dispatch = useAppDispatch();
  dispatch(fetchUserData());

  const select = useAppSelector(selectUserData);

  console.log(select);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
    if (
      event
        && event.type === 'keydown'
        && ((event as KeyboardEvent).key === 'Tab'
          || (event as KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setIsOpen(open);
  };

  return (
    <section style={{
      height: '100%',
    }}
    >
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <SwipeableDrawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
          onClick={toggleDrawer(false)}
        >
          <HeaderNavbar orientation="vertical" />
          <AuthButtons orientation="vertical" isLoggedIn={false} />
        </Box>
      </SwipeableDrawer>
    </section>
  );
};
