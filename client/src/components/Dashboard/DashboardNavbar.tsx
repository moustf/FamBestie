import { FC } from 'react';
import { Box, ListItem } from '@mui/material';
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
    bgcolor: 'primary.main',
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
          hi
        </ListItem>
      ))
    }
  </Box>
);
