import { FC } from 'react';
import {
  Card, Box, Tooltip, Avatar, Typography,
} from '@mui/material';
import { Person as PersonIcon } from '@mui/icons-material';

import { WorkerCardObject } from '../../utils/interfaces/worker';

export const WorkerCard: FC<{ worker: WorkerCardObject }> = ({ worker }) => (
  <Card
    component="section"
    sx={{
      width: {
        xs: '100%', sm: '100%', md: '50%', lg: '30%', xl: '30%',
      },
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Box
      id="hi"
      component="section"
      sx={{
        width: '100%',
        height: '30%',
        bgcolor: 'secondary.light',
      }}
    />
    <Tooltip title="Account settings">
      <Avatar sx={{
        width: '15%',
        height: '15%',
        transform: 'translateY(-50%)',
      }}
      >
        <PersonIcon sx={{ color: 'secondary.light', fontSize: '3rem' }} />
      </Avatar>
    </Tooltip>
    <Box sx={{
      width: '100%',
      pl: '0 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transform: 'translateY(-2rem)',
    }}
    >
      <Box sx={{
        width: '30%',
        pl: '1.5rem',
        '& p': {
          fontSize: {
            xs: '0.6rem', sm: '0.6rem', md: '1.2rem', lg: '1.2rem', xl: '1.2rem',
          },
        },
      }}
      >
        <Typography
          variant="body1"
          component="p"
          sx={{
            color: 'grey',
          }}
        >
          Name:
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontWeight: 500,
            color: 'primary.dark',
          }}
        >
          {worker.name}
        </Typography>
      </Box>
      <Box sx={{
        width: '20%',
        pr: '0.1rem',
        '& p': {
          fontSize: {
            xs: '0.6rem', sm: '0.9rem', md: '1.2rem', lg: '1.2rem', xl: '1.2rem',
          },
        },
      }}
      >
        <Typography
          variant="body1"
          component="p"
          sx={{
            color: 'grey',
          }}
        >
          Experience:
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontWeight: 500,
            color: 'primary.dark',
          }}
        >
          {worker.years_of_experience}
        </Typography>
      </Box>
    </Box>
    <Box sx={{
      width: '100%',
      pl: '3rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.7rem',
    }}
    >
      {
        [
          {
            label: 'Email:',
            data: worker.email,
          },
          {
            label: 'Location:',
            data: worker.location,
          },
          {
            label: 'Gender:',
            data: worker.gender,
          },
          {
            label: 'Phone:',
            data: worker.phone,
          },
          {
            label: 'Specialty:',
            data: worker.specialty,
          },
        ].map((obj) => (
          <Box sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
          >
            <Typography
              variant="body1"
              component="p"
              sx={{
                color: 'grey',
              }}
            >
              {obj.label}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontWeight: 500,
                color: 'primary.dark',
              }}
            >
              {obj.data}
            </Typography>
          </Box>
        ))
      }
    </Box>
  </Card>
);
