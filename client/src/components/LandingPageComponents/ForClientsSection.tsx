import { FC } from 'react';
import { Container, Box } from '@mui/material';
import { v4 as uuid4 } from 'uuid';

import { SectionTitle } from './SectionTitle';
import { TextBox } from './TextBox';

const textArray = [
  'Client can create an account.',
  'Client can search for worker by specialty if he want to select a specific worker or he can send a job request to the admin.',
  'Client can review workers who worked with for him by giving stars rate or a text feedback.',
  'Client can find all the workers who have worked for him, the total amount of money he has spent, ans many more in his profile',
];

export const ForClientsSection: FC = () => (
  <Container
    component="section"
    sx={{
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
    <SectionTitle title="For Clients" />
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
        textArray.map((text: string) => <TextBox key={uuid4()} text={text} />)
      }
    </Box>
  </Container>
);
