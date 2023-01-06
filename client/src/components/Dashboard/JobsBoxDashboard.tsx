import { FC } from 'react';
import {
  Box, Typography, Card, Rating,
} from '@mui/material';

import { JobDashboard } from '../../utils/interfaces/jobDashboard';

export const JobsBoxDashboard: FC<{ data: JobDashboard[] }> = ({ data }) => (
  <Box sx={{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1.5rem',
  }}
  >
    {
      data.length === 0 && (
        <Typography
          variant="h3"
          component="h5"
        >
          No jobs for this worker!
        </Typography>
      )
    }
    {
      data.map((job: any) => (
        <Card sx={{
          width: '100%',
          padding: '1rem 0.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '0.7rem',
        }}
        >
          <Typography variant="h6" component="h3" sx={{ fontSize: '1.2rem' }}>
            Job Title:
            {' '}
            <span style={{ color: '#006DBF', fontSize: '1.5rem' }}>{job.title}</span>
          </Typography>
          <Typography variant="h6" component="h3" sx={{ fontSize: '1.2rem' }}>
            Job Details:
            {' '}
            <span style={{ color: '#006DBF', fontSize: '1rem' }}>{job.details}</span>
          </Typography>
          <Rating
            name="Rating"
            value={job.stars}
            defaultValue={0}
          />
          <Typography variant="h6" component="h3" sx={{ fontSize: '1rem' }}>
            Job Details:
            {' '}
            <span style={{ color: '#006DBF', fontSize: '1rem' }}>
              {job.review_text || 'There is no review text for this job!'}
            </span>
          </Typography>
          <Typography variant="h6" component="h3" sx={{ fontSize: '1rem' }}>
            Job Details:
            {' '}
            <span style={{ color: '#006DBF', fontSize: '1rem' }}>
              {job.working_hours}
            </span>
          </Typography>
          <Typography variant="h6" component="h3" sx={{ fontSize: '1.2rem' }}>
            Bill Amount:
            {' '}
            <span style={{ color: '#006DBF', fontSize: '1.8rem' }}>
              $
              {job.bill || 0}
            </span>
          </Typography>
          <Card
            sx={{
              width: '70%',
              p: '1rem',
              mt: '1rem',
              alignSelf: 'center',
            }}
          >
            {!job.user_worker && (
            <Typography variant="h5" component="h5">
              No workers where assigned to this job!
            </Typography>
            )}
            {
              job.user_worker && (
                <>
                  <Typography variant="h6" component="h6" sx={{ fontSize: '1rem', ml: '1rem' }}>
                    Worker:
                    {' '}
                    <span style={{ color: '#006DBF', fontSize: '1.2rem', marginLeft: '0.3rem' }}>
                      {job.user_worker?.Worker.name}
                    </span>
                  </Typography>
                  <Typography variant="h6" component="h6" sx={{ fontSize: '1rem', ml: '1rem' }}>
                    Email:
                    {' '}
                    <span style={{ color: '#006DBF', fontSize: '1.2rem', marginLeft: '0.3rem' }}>
                      {job.user_worker?.Worker.email}
                    </span>
                  </Typography>
                  <Typography variant="h6" component="h6" sx={{ fontSize: '1rem', ml: '1rem' }}>
                    Phone:
                    {' '}
                    <span style={{ color: '#006DBF', fontSize: '1.2rem', marginLeft: '0.3rem' }}>
                      {job.user_worker?.Worker.phone}
                    </span>
                  </Typography>
                  <Typography variant="h6" component="h6" sx={{ fontSize: '1rem', ml: '1rem' }}>
                    Specialty:
                    {' '}
                    <span style={{ color: '#006DBF', fontSize: '1.2rem', marginLeft: '0.3rem' }}>
                      {job.user_worker?.Worker.specialty}
                    </span>
                  </Typography>
                </>
              )
            }
          </Card>
        </Card>
      ))
    }
  </Box>
);
