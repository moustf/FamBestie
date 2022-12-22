import { FC } from 'react';
import { Container, Box } from '@mui/material';

import { SectionTitle } from './SectionTitle';
import { TextBox } from './TextBox';

const textArray = [
  'Workers can register to join the staff.',
  'The worker will provide his information and wait for the HR team to contact him when  we need new employees.',
  'Workers can take advantage of their network, if a customer specifically asked for a worker, that worker will take the job',
  'Our range of specialties includes: Housekeepers, Guards, Babysitters, Drivers, and also Trainers',
];

export const ForWorkersSection: FC = () => (
  <Container sx={{
    width: '100%',
    height: {
      xs: '80vh', sm: '48vh', md: '90vh', lg: '90vh', xl: '90vh',
    },
    maxWidth: {
      xs: '90%', sm: '90%', md: '80%', lg: '1400px', xl: '1500px',
    },
    transform: {
      xs: 'translateY(15rem)', sm: 'translateY(15rem)', md: 'translateY(18rem)', lg: 'translateY(20rem)', xl: 'translateY(20rem)',
    },
    p: '0 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: {
      xs: '4rem', sm: '4rem', md: '6rem', lg: '8rem', xl: '8rem',
    },
  }}
  >
    <SectionTitle title="For Workers" />
    <Box sx={{
      width: {
        xs: '90%', sm: '90%', md: '70%', lg: '60%', xl: '60%',
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: {
        xs: '1rem', sm: '1rem', md: '1.5rem', lg: '2rem', xl: '2.5rem',
      },
      '& .MuiTypography-root:nth-of-type(even)': {
        transform: {
          xs: 'translateX(2rem)', sm: 'translateX(2rem)', md: 'translateX(3rem)', lg: 'translateX(5rem)', xl: 'translateX(5rem)',
        },
      },
    }}
    >
      {
        textArray.map((text) => <TextBox text={text} />)
      }
    </Box>
  </Container>
);
