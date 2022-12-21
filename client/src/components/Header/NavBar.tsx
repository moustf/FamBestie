import { FC, useState, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const HeaderNavbar: FC<{ orientation: 'horizontal' | 'vertical' }> = ({ orientation }) => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event: SyntheticEvent, newValue: number): void => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      width: {
        xs: '100%', sm: '100%', md: '100%', lg: '40%',
      },
      bgcolor: 'background.paper',
      backgroundColor: 'transparent',
    }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        orientation={orientation}
        sx={{
          mt: { xs: '5rem', sm: '5rem', md: '0' },
          '& .css-1eblqkm-MuiButtonBase-root-MuiTab-root': {
            fontSize: '0.9rem',
            fontWeight: 'bold',
            color: { xs: 'primary.main', sm: 'primary.main', md: 'inherit' },
          },
          '& .css-1eblqkm-MuiButtonBase-root-MuiTab-root.Mui-selected': {
            color: { xs: 'primary.dark', sm: 'primary.dark', md: 'primary.main' },
          },
          '& .MuiTabs-indicator': {
            bgcolor: { xs: 'primary.dark', sm: 'primary.dark', md: 'primary.main' },
          },
        }}
      >
        <Tab
          label="About Us"
          sx={{ color: 'primary.contrastText' }}
          onClick={() => navigate('#about')}
        />
        <Tab
          label="For Clients"
          sx={{ color: 'primary.contrastText' }}
          onClick={() => navigate('#forClients')}
        />
        <Tab
          label="For Workers"
          sx={{ color: 'primary.contrastText' }}
          onClick={() => navigate('#forWorkers')}
        />
        <Tab
          label="Join Our Family"
          sx={{ color: 'primary.contrastText' }}
          onClick={() => navigate('#joinOurFamily')}
        />
      </Tabs>
    </Box>
  );
};
