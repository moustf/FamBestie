import { FC, useState, MouseEvent } from 'react';
import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
  IconButton,
  TextField,
} from '@mui/material';
import { NotificationsActive } from '@mui/icons-material';
import { Controller, useForm } from 'react-hook-form';

export const NotificationsMenu :FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const { control } = useForm({
    defaultValues: {
      subscription: '',
    },
  });

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
              <NotificationsActive sx={{ color: 'primary.light', fontSize: 'medium' }} />
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
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
              bgcolor: 'primary.dark',
              color: 'primary.contrastText',
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
          <Controller
            name="subscription"
            control={control}
            render={({ field: { onBlur, onChange, name } }) => (
              <TextField
                name={name}
                label="Subscription Email"
                margin="normal"
                required
                fullWidth
                type="email"
                onChange={onChange}
                onBlur={onBlur}
                placeholder="Please type the email you wish to receive email at ..."
                sx={{
                  '& label': {
                    color: 'primary.contrastText',
                    fontSize: 'small',
                  },
                  '& ::placeholder': {
                    color: 'primary.contrastText',
                    fontSize: 'small',
                  },
                  '& fieldset': {
                    border: '1px solid #fff',
                  },
                  '& fieldset:focus': {
                    border: '1px solid #fff',
                  },
                  '& fieldset legend span': {
                    color: '#fff',
                  },
                  '& fieldset:active': {
                    border: '1px solid #fff',
                  },
                }}
              />
            )}
          />
        </MenuItem>
      </Menu>
    </>
  );
};
