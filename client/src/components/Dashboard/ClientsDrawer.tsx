import {
  FC, useState, KeyboardEvent, MouseEvent,
} from 'react';
import {
  Box, Button, SwipeableDrawer, Alert, Grid, Card, Tooltip, Avatar, Typography, Divider, CssBaseline,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { Spinner } from '../Spinner';

export const ClientsDrawer: FC<{ id: number }> = ({ id }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const {
    data, isLoading, isError,
  } = useQuery({
    queryKey: [`getClientById${id}`],
    queryFn: async () => (
      axios.get(`/admin/client/${id}`)
    ),
  });

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
                <Tooltip title="Client Avatar">
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
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1.2rem',
                  }}
                  >
                    <Typography
                      component="h3"
                      variant="h5"
                      sx={{ fontWeight: 600, fontSize: '1.6rem' }}
                    >
                      Name:
                      {' '}
                      {data.data.data.name}
                    </Typography>
                    <Divider flexItem />
                    <Typography
                      component="h5"
                      variant="h5"
                      sx={{
                        fontWeight: 500, fontSize: '1.4rem', color: 'primary.dark', textDecoration: 'underline',
                      }}
                    >
                      Email:
                      {' '}
                      {data.data.data.email}
                    </Typography>
                    <Divider flexItem />
                    <Typography
                      component="h5"
                      variant="h5"
                      sx={{
                        fontWeight: 500, fontSize: '1.4rem',
                      }}
                    >
                      Location:
                      {' '}
                      {data.data.data.location}
                    </Typography>
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
                {data.data.data.user_workers.length < 1 && (
                <Typography
                  variant="h3"
                  component="h5"
                >
                  No workers for this client!
                </Typography>
                )}
                {data.data.data.user_workers.map((userWorker: any) => (
                  <Card
                    key={userWorker.id}
                    sx={{
                      width: '60%',
                      p: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Box sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '3rem',
                      mb: '1rem',
                    }}
                    >
                      <Typography
                        component="h3"
                        variant="h6"
                        sx={{ fontWeight: 600, fontSize: '1.2rem' }}
                      >
                        {userWorker.Worker.name}
                      </Typography>
                      <Divider orientation="vertical" flexItem />
                      <Typography
                        component="h5"
                        variant="h6"
                        sx={{
                          fontWeight: 500, fontSize: '1rem', color: 'primary.dark', textDecoration: 'underline',
                        }}
                      >
                        {userWorker.Worker.email}
                      </Typography>
                    </Box>
                    <Box>
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
                          Location:
                          {' '}
                          {userWorker.Worker.location}
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography
                          component="h6"
                          variant="h6"
                          sx={{ fontWeight: 500, fontSize: '1rem' }}
                        >
                          Phone
                          {' '}
                          {userWorker.Worker.phone}
                        </Typography>
                      </Box>
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
                          Specialty:
                          {' '}
                          {userWorker.Worker.specialty}
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography
                          component="h6"
                          variant="h6"
                          sx={{ fontWeight: 500, fontSize: '1rem' }}
                        >
                          Years Of Experience:
                          {' '}
                          {userWorker.Worker.years_of_experience}
                        </Typography>
                      </Box>
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
