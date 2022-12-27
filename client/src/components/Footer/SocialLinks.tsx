import { FC } from 'react';
import { Box, Link } from '@mui/material';
import {
  LinkedIn, GitHub, Reddit, Twitter,
} from '@mui/icons-material/';

export const SocialLinks: FC = () => (
  <Box sx={{
    width: {
      xs: '50%', sm: '50%', md: '40%', lg: '10%',
    },
    display: 'flex',
    justifyContent: 'space-between',
    '& .MuiSvgIcon-root': {
      fontSize: '2rem',
      color: 'primary.contrastText',
      '&:hover': {
        color: 'primary.dark',
      },
    },
  }}
  >
    <Link href="https://www.linkedin.com/in/moustff/" target="_blank">
      <LinkedIn />
    </Link>
    <Link href="https://github.com/moustf" target="_blank">
      <GitHub />
    </Link>
    <Link href="https://www.reddit.com/user/mossstaf" target="_blank">
      <Reddit />
    </Link>
    <Link href="https://twitter.com/Haz7za" target="_blank">
      <Twitter />
    </Link>
  </Box>
);
