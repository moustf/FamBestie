import { FC, useState, SyntheticEvent } from 'react';
// import { Link } from 'react-router-dom';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const HeaderNavbar: FC<{ orientation: 'horizontal' | 'vertical' }> = ({ orientation }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number): void => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      width: {
        xs: '100%', sm: '100%', md: '100%', lg: '40%',
      },
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
            display: 'none',
          },
          '& a': {
            textDecoration: 'none',
            color: '#fff',
            opacity: 1,
          },
        }}
      >
        <Link href="#about">
          <Tab
            label="About Us"
            sx={{ color: 'primary.contrastText' }}
          />
        </Link>
        <Link href="#forClients">
          <Tab
            label="For Clients"
            sx={{ color: 'primary.contrastText' }}
          />
        </Link>
        <Link href="#forWorkers">
          <Tab
            label="For Workers"
            sx={{ color: 'primary.contrastText' }}
          />
        </Link>
        <Link href="#joinOurFamily">
          <Tab
            label="Join Our Family"
            sx={{ color: 'primary.contrastText' }}
          />
        </Link>
        <Link href="/worker">
          <Tab
            label="Workers Page"
            sx={{ color: 'primary.contrastText' }}
          />
        </Link>
      </Tabs>
    </Box>
  );
};
