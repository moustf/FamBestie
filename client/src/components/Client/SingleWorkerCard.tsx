import { FC } from 'react';
import {
  Card, Grid, CssBaseline, Typography, Rating,
} from '@mui/material';
import {
  Person as PersonIcon,
  Email as EmailIcon,
  LocationOn as LocationOnIcon,
  Phone as PhoneIcon,
  Stars as StarsIcon,
  TextSnippet as TextSnippetIcon,
} from '@mui/icons-material';

import { Worker } from '../../utils/interfaces/worker';

export const SingleWorkerCard: FC<{ worker: Worker }> = ({ worker }) => (
  <Card sx={{
    width: '100%',
    p: '1.5rem',
  }}
  >
    <CssBaseline />
    <Grid
      container
      spacing={3}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
      >
        <Card
          sx={{
            width: '100%',
            p: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {
          [
            { icon: <PersonIcon sx={{ color: 'primary.dark', fontSize: '1.5rem' }} />, data: worker?.name },
            { icon: <EmailIcon sx={{ color: 'primary.dark', fontSize: '1.5rem' }} />, data: worker?.email },
            { icon: <LocationOnIcon sx={{ color: 'primary.dark', fontSize: '1.5rem' }} />, data: worker?.location },
            { icon: <PhoneIcon sx={{ color: 'primary.dark', fontSize: '1.5rem' }} />, data: worker?.phone },
            { icon: <StarsIcon sx={{ color: 'primary.dark', fontSize: '1.5rem' }} />, data: worker?.specialty },
          ].map((obj) => (
            <Typography
              variant="h6"
              component="h6"
              sx={{
                width: {
                  xs: '100%', sm: '100%', md: '100%', lg: '50%', xl: '50%',
                },
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
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
      >
        <Card sx={{
          width: '100%',
          height: '100%',
          p: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '1rem',
        }}
        >
          <Rating
            name="Rating"
            value={worker.user_workers[0].Job.stars}
            defaultValue={0}
          />
          <Typography
            variant="body2"
            component="p"
            sx={{
              color: 'grey',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              mb: '0.5rem',
            }}
          >
            <TextSnippetIcon sx={{ color: 'primary.dark', fontSize: '1.5rem' }} />
            <span style={{ width: '80%', textAlign: 'left' }}>
              {
              worker.user_workers[0].Job.review_text
              || 'You have not reviewed this worker yet!'
            }
            </span>
          </Typography>
        </Card>
      </Grid>
    </Grid>
  </Card>
);
