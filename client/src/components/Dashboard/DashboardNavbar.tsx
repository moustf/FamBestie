import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, ListItem, Button } from '@mui/material';
import {
  Insights as InsightsIcon,
  People as PeopleIcon,
  Hail as HailIcon,
  Work as WorkIcon,
} from '@mui/icons-material';

const items = [
  {
    href: '/dashboard/statistics',
    icon: <InsightsIcon sx={{ fontSize: 'small' }} />,
    title: 'Statistics',
  },
  {
    href: '/dashboard/clients',
    icon: <PeopleIcon sx={{ fontSize: 'small' }} />,
    title: 'Clients',
  },
  {
    href: '/dashboard/workers',
    icon: <HailIcon sx={{ fontSize: 'small' }} />,
    title: 'Workers',
  },
  {
    href: '/dashboard/jobs',
    icon: <WorkIcon sx={{ fontSize: 'small' }} />,
    title: 'Jobs',
  },
];

export const DashboardNavbar: FC = () => (
  <Box sx={{
    width: '100%',
    height: '100%',
    bgcolor: 'primary.light',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }}
  >
    {
      items.map((item) => (
        <ListItem
          disableGutters
          sx={{
            display: 'flex',
            mb: 0.5,
            py: 0,
            px: 2,
          }}
          title={item.title}
        >
          <Link to={item.href}>
            <Button
              startIcon={item.icon}
              disableRipple
              sx={{
                borderRadius: 1,
                color: 'secondary.dark',
                fontWeight: 'fontWeightBold',
                justifyContent: 'flex-start',
                px: 3,
                textAlign: 'left',
                textTransform: 'none',
                width: '100%',
                '& .MuiButton-startIcon': {
                  color: 'secondary.main',
                },
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255, 0.08)',
                },
              }}
            >
              {item.title}
            </Button>
          </Link>
        </ListItem>
      ))
    }
  </Box>
);
