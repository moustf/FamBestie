import { FC } from 'react';
import { Card, Typography, Box } from '@mui/material';
import {
  PointOfSale as PointOfSaleIcon,
  AttachMoney as AttachMoneyIcon,
} from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const ClientMoneyCard: FC = () => {
  const { data } = useQuery({
    queryKey: ['getClientsTotalMoneySpent'],
    queryFn: async () => (
      axios.get('/api/v1/client/money')
    ),
  });

  const money = data?.data.data[0].amountOfMoney;

  return (
    <Card
      component="section"
      sx={{
        width: '100%',
        height: '100%',
        p: '2rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '3rem',
        bgcolor: 'secondary.light',
      }}
    >
      <PointOfSaleIcon
        sx={{
          width: '50%',
          height: '5rem',
          bgcolor: 'primary.dark',
          color: 'secondary.light',
          borderRadius: '1rem',
        }}
      />
      <Box
        component="section"
      >
        <Typography
          component="h6"
          variant="h2"
          sx={{
            width: '100%',
            color: 'primary.dark',
            fontWeight: 500,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '1.5rem' }}>Total spent money: </span>
          <AttachMoneyIcon sx={{ color: 'green', fontSize: '2.5rem' }} />
          {money || 0}
        </Typography>
      </Box>
    </Card>
  );
};
