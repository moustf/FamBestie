import { FC } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';

export const FooterNav: FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{
      width: {
        xs: '100%', sm: '80%', md: '100%', lg: '40%',
      },
      bgcolor: 'transparent',
      display: 'flex',
      justifyContent: 'space-between',
      '& .MuiButtonBase-root': {
        color: 'primary.contrastText',
        fontSize: {
          xs: '0.7rem', sm: '0.8rm', md: '0.8rem', lg: 'inherit',
        },
        '&:hover': {
          color: 'primary.dark',
        },
      },
    }}
    >
      <Button variant="text" onClick={() => navigate('#about')}>About</Button>
      <Button variant="text" onClick={() => navigate('#forClients')}>For Clients</Button>
      <Button variant="text" onClick={() => navigate('#forWorkers')}>For Workers</Button>
      <Button variant="text" onClick={() => navigate('#joinOrFamily')}>Join Our Family</Button>
      <Link style={{ textDecoration: 'none' }} to="/searchForWorkers"><Button variant="text">Search For Workers</Button></Link>
    </Box>
  );
};
