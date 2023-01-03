import { FC } from 'react';
import Wave from 'react-wavify';
import {
  Card, Box, Tooltip, Avatar, Typography,
} from '@mui/material';
import {
  Person as PersonIcon,
  Email as EmailIcon,
  LocationOn as LocationOnIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material';

import { ClientInfo } from '../../utils/interfaces/clientProfile';

export const ClientInfoCard: FC<{ userInfo: ClientInfo }> = ({ userInfo }) => (
  <Card
    component="section"
    sx={{
      width: '100%',
      height: {
        xs: '50vh', sm: '50vh', md: '45vh', lg: '38vh', xl: '38vh',
      },
      pb: '1rem',
    }}
  >
    <Box
      sx={{
        width: '100%',
        height: '6rem',
      }}
    >
      <Wave
        fill="#FFE574"
        paused={false}
        options={{
          height: 40,
          amplitude: 30,
          speed: 0.18,
          points: 5,
        }}
      />
    </Box>
    <Tooltip title="Account settings">
      <Avatar sx={{
        width: 100,
        height: 100,
        bgcolor: 'primary.dark',
        transform: 'TranslateY(0.5rem)',
        ml: '1rem',
      }}
      >
        <PersonIcon sx={{ color: 'secondary.light', fontSize: '4.5rem' }} />
      </Avatar>
    </Tooltip>
    <Box sx={{
      width: '90%',
      height: '50%',
      display: 'flex',
      flexDirection: {
        xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row',
      },
      justifyContent: 'space-between',
      alignItems: 'center',
      ml: '10%',
      mt: {
        xs: '1rem', sm: '1rem', md: '1rem', lg: '0', xl: 0,
      },
    }}
    >
      {
          [
            { icon: <PersonIcon sx={{ color: 'primary.dark', fontSize: '2rem' }} />, data: userInfo?.name },
            { icon: <EmailIcon sx={{ color: 'primary.dark', fontSize: '2rem' }} />, data: userInfo?.email },
            { icon: <LocationOnIcon sx={{ color: 'primary.dark', fontSize: '2rem' }} />, data: userInfo?.location },
            { icon: <PhoneIcon sx={{ color: 'primary.dark', fontSize: '2rem' }} />, data: userInfo?.phone },
          ].map((obj) => (
            <Typography
              variant="h6"
              component="h5"
              sx={{
                width: '15rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: '0.5rem',
              }}
            >
              {obj.icon}
              <span style={{ width: '80%', textAlign: 'left' }}>{obj.data}</span>
            </Typography>
          ))
        }
    </Box>
  </Card>
);
