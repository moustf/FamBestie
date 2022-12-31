import { FC, useState, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Tabs, Tab, Typography,
} from '@mui/material';
import {
  Insights as InsightsIcon,
  People as PeopleIcon,
  Hail as HailIcon,
  Work as WorkIcon,
} from '@mui/icons-material';

const items = [
  {
    href: '/dashboard/statistics',
    icon: <InsightsIcon sx={{ fontSize: '2rem' }} />,
    title: 'Statistics',
  },
  {
    href: '/dashboard/clients',
    icon: <PeopleIcon sx={{ fontSize: '2rem' }} />,
    title: 'Clients',
  },
  {
    href: '/dashboard/workers',
    icon: <HailIcon sx={{ fontSize: '2rem' }} />,
    title: 'Workers',
  },
  {
    href: '/dashboard/jobs',
    icon: <WorkIcon sx={{ fontSize: '2rem' }} />,
    title: 'Jobs',
  },
];

export const DashboardNavbar: FC = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event: SyntheticEvent, newValue: number): void => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      padding: 5,
      bgcolor: 'primary.light',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15rem',
    }}
    >
      <Typography
        component="h1"
        variant="h4"
        sx={{
          color: 'primary.dark',
          textShadow: '0px 0px 5px rgba(255, 255, 255, 0.5)',
          position: 'relative',
          transform: 'skew(-20deg)',
          letterSpacing: '2px',
          '&::after': {
            content: '" "',
            width: '100%',
            height: '0.3rem',
            borderRadius: '1rem',
            position: 'absolute',
            left: '0',
            bottom: '-1rem',
            zIndex: '10',
            backgroundColor: 'primary.dark',
            boxShadow: '0px 0px 5px 0px rgba(255, 255, 255, 0.5)',
          },
        }}
      >
        Admin Dashboard
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        orientation="vertical"
        sx={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        {
            items.map((item) => (
              <Tab
                icon={item.icon}
                iconPosition="end"
                label={item.title}
                sx={{
                  width: '80%',
                  color: 'primary.dark',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                onClick={() => navigate(item.href)}
              />
            ))
          }
      </Tabs>
    </Box>
  );
};
