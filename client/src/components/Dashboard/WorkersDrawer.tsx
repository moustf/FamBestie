import {
  FC, useState, KeyboardEvent, MouseEvent, ReactElement,
} from 'react';
import {
  Box, Button, SwipeableDrawer, Alert, Grid, Card, Tooltip, Avatar, Typography, Divider, CssBaseline, Rating,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { Spinner } from '../Spinner';

const returnBox = (arr: { label: string, data: string }[]): ReactElement => (
  <Box sx={{
    width: '100%',
    p: '0.8rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid grey',
    mb: '0.7rem',
    borderRadius: '0.5rem',
  }}
  >
    <Typography
      component="p"
      variant="body1"
      sx={{ fontWeight: 500, fontSize: 'large' }}
    >
      {arr[0].label}
      :
      {' '}
      {arr[0].data}
    </Typography>
    <Divider orientation="vertical" flexItem />
    <Typography
      component="h6"
      variant="h6"
      sx={{ fontWeight: 500, fontSize: '1rem' }}
    >
      {arr[1].label}
      :
      {' '}
      {arr[1].data}
    </Typography>
    <Divider orientation="vertical" flexItem />
    <Typography
      component="h6"
      variant="h6"
      sx={{ fontWeight: 500, fontSize: '1rem' }}
    >
      {arr[2].label}
      :
      {' '}
      {arr[2].data}
    </Typography>
  </Box>
);

export const WorkersDrawer: FC<{ id: number }> = ({ id }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const {
    data, isLoading, isError,
  } = useQuery({
    queryKey: [`getWorkerById${id}`],
    queryFn: async () => (
      axios.get(`/admin/worker/${id}`)
    ),
  });

  const joiningData = (): string => {
    const date = new Date(data?.data.data.createdAt);

    return `${date.getFullYear()}-${date.getMonth()}-${String(date.getDay()).padStart(2, '0')}`;
  };

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

  if (isLoading) return <Spinner />;
  if (isError) {
    return (
      <Alert
        sx={{
          width: '99%',
          height: '5rem',
          mt: 5,
          display: 'flex',
          alignItems: 'center',
        }}
        severity="error"
      >
        Something went wrong ...
      </Alert>
    );
  }

  return (
    <section style={{
      height: '100%',
    }}
    >
      <CssBaseline />
      <Button onClick={toggleDrawer(true)}>
        <PersonIcon />
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          role="presentation"
          onKeyDown={toggleDrawer(false)}
          onClick={toggleDrawer(false)}
          sx={{
            width: '100%',
            padding: '1rem',
          }}
        >
          <Grid
            container
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
            >
              <Card sx={{
                minWidth: '60vw',
                minHeight: '30vh',
                padding: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: '5rem',
              }}
              >
                <Tooltip title="Account settings">
                  <Avatar sx={{ width: 128, height: 128, bgcolor: 'primary.dark' }}>
                    <PersonIcon sx={{ color: 'primary.light', fontSize: '6rem' }} />
                  </Avatar>
                </Tooltip>
                <Box sx={{
                  width: '60%',
                  p: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '5rem',
                }}
                >
                  <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '3rem',
                  }}
                  >
                    <Typography
                      component="h3"
                      variant="h5"
                      sx={{ fontWeight: 600, fontSize: '1.6rem' }}
                    >
                      {data.data.data.name}
                    </Typography>
                    <Divider orientation="vertical" flexItem />
                    <Typography
                      component="h5"
                      variant="h5"
                      sx={{
                        fontWeight: 500, fontSize: '1.4rem', color: 'primary.dark', textDecoration: 'underline',
                      }}
                    >
                      {data.data.data.email}
                    </Typography>
                  </Box>
                  <Box>
                    {returnBox([
                      { label: 'Gender', data: data.data.data.gender },
                      { label: 'Location', data: data.data.data.location },
                      { label: 'Phone', data: data.data.data.phone },
                    ])}
                    {returnBox([
                      { label: 'Date Of Birth', data: data.data.data.date_of_birth },
                      { label: 'State', data: data.data.data.state },
                      { label: 'Specialty', data: data.data.data.specialty },
                    ])}
                    {returnBox([
                      { label: 'Years Of Experience', data: data.data.data.years_of_experience },
                      { label: 'Hiring Date', data: data.data.data.hiring_date },
                      { label: 'Joining Date', data: joiningData() },
                    ])}
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Card sx={{
                width: '70%',
                p: '2rem 0rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
              }}
              >
                {data.data.data.user_workers.map((userWorker: any) => (
                  <Card
                    key={userWorker.id}
                    sx={{
                      width: '60%',
                      p: '1.5rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Rating
                      name="Rating"
                      value={userWorker.Job.stars}
                      defaultValue={0}
                    />
                    <Box sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                    }}
                    >
                      <Typography
                        component="p"
                        variant="body1"
                        sx={{ color: 'grey', maxWidth: '9rem', wordBreak: 'break-word' }}
                      >
                        {userWorker.Job.review_text || 'No review is given right now!'}
                      </Typography>
                      <Typography
                        component="h5"
                        variant="h6"
                        sx={{ fontWeight: 500, color: 'grey' }}
                      >
                        Working Hours:
                        {' '}
                        {userWorker.Job.working_hours || 'The worker does not have any working hours or unemployed!'}
                      </Typography>
                      <Typography
                        component="h5"
                        variant="h4"
                        sx={{ fontWeight: 600, color: 'primary.dark' }}
                      >
                        Bill Amount:
                        {' '}
                        $
                        {userWorker.Job.bill}
                      </Typography>
                    </Box>
                  </Card>
                ))}
              </Card>
            </Grid>
          </Grid>
        </Box>
      </SwipeableDrawer>
    </section>
  );
};
