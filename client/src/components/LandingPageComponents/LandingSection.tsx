import { FC } from 'react';
import { Container, Box, Typography } from '@mui/material';

export const LandingSection: FC = () => (
  <Container
    component="section"
    sx={{
      width: '100%',
      height: {
        xs: '80vh', sm: '80vh', md: '85vh', lg: '70vh',
      },
      transform: {
        xs: 'translateY(8rem)', sm: 'translateY(8rem)', md: 'translateY(7rem)', lg: 'translateY(12rem)',
      },
      display: 'flex',
      flexDirection: {
        xs: 'column', sm: 'column', md: 'column', lg: 'row',
      },
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: {
        xs: '5%', sm: '5%', md: '5%', lg: '20%',
      },
      maxWidth: { xs: '100vw', xl: '1500px' },
      '& #specs': {
        fontSize: { xs: '1.2rem', md: '1.6rem', lg: '1.6rem' },
        ml: {
          xs: '-2rem', sm: '-2rem', md: '-7rem', lg: '-15rem',
        },
        listStyleType: 'circle',
        fontWeight: '500',
        '& li': {
          marginBottom: {
            xs: '0.3rem', sm: '0.3rem', md: '0.5rem', lg: '0.7rem',
          },
        },
      },
    }}
  >
    <Container sx={{
      width: '40%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: { xs: 'center', sm: 'center', md: 'center' },
      gap: {
        xs: '4rem', sm: '4rem', md: '5rem', lg: '7rem',
      },
    }}
    >
      <Typography
        variant="h3"
        component="h2"
        sx={{
          width: {
            xs: '15rem', sm: '22rem', md: '28rem', lg: '30rem',
          },
          textAlign: 'left',
          letterSpacing: '.5px',
          whiteSpace: 'break-spaces',
          position: 'relative',
          fontSize: {
            xs: 'x-large', sm: 'x-large', md: 'xx-large', lg: '2.2rem',
          },
          '&:after': {
            content: '" "',
            position: 'absolute',
            width: '70%',
            height: '0.5rem',
            bgcolor: 'secondary.light',
            bottom: '-2rem',
            left: '0',
            borderRadius: '0.3rem',
          },
        }}
      >
        We provide the most
        {' '}
        <Typography
          variant="h3"
          component="p"
          sx={{
            color: 'secondary.dark',
            display: 'inline-block',
            fontSize: {
              xs: 'x-large', sm: 'x-large', md: 'xx-large', lg: '2.2rem',
            },
          }}
        >
          honest
        </Typography>
        {' '}
        and
        {' '}
        <Typography
          variant="h3"
          component="p"
          sx={{
            color: 'secondary.dark',
            display: 'inline-block',
            fontSize: {
              xs: 'x-large', sm: 'x-large', md: 'xx-large', lg: '2.2rem',
            },
          }}
        >
          convenient to work with
        </Typography>
        {' '}
        type of workers.
      </Typography>
      <ul id="specs">
        <li>Housekeeper</li>
        <li>Guard</li>
        <li>Driver</li>
        <li>Babysitter</li>
        <li>Trainer</li>
      </ul>
    </Container>
    <Box sx={{
      width: {
        xs: '100%', sm: '100%', md: '70%', lg: '50%',
      },
      height: '100%',
      bgcolor: 'secondary.light',
      display: 'flex',
      alginItems: 'flex-start',
      borderRadius: '1rem',
      overflow: 'hidden',
      position: 'relative',
    }}
    >
      <img
        src="https://images.pexels.com/photos/4239035/pexels-photo-4239035.jpeg?auto=compress&cs=tinysrgb&w=300"
        alt="landing"
        style={{
          width: '93%',
          height: '93%',
          borderBottomRightRadius: '1rem',
          borderTopRightRadius: '0.3rem',
          borderBottomLeftRadius: '0.3rem',
        }}
      />
      <div style={{
        width: '93%',
        height: '93%',
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '5',
        backgroundColor: 'rgba(0, 0, 0, .05)',
        borderBottomRightRadius: '1rem',
        borderTopRightRadius: '0.3rem',
        borderBottomLeftRadius: '0.3rem',
      }}
      />
    </Box>
  </Container>
);
