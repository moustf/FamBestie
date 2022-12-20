import { FC, useState, MouseEvent } from 'react';
import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
  Divider,
  IconButton,
  ListItemIcon,
} from '@mui/material';
import {
  PersonAdd, Logout, Person as PersonIcon,
} from '@mui/icons-material';

import { useLogout } from '../../hooks/useLogout';

export const ProfileMenu :FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const logout = useLogout();

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 24, height: 24, bgcolor: 'primary.dark' }}>
              <PersonIcon sx={{ color: 'primary.light', fontSize: 'medium' }} />
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            height: '12rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'primary.dark',
            color: 'primary.contrastText',
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 2.5,
              bgcolor: 'primary.contrastText',
              color: 'primary.dark',
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'primary.dark',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar />
          {' '}
          Profile
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" sx={{ color: 'primary.contrastText' }} />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" sx={{ color: 'primary.contrastText' }} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
