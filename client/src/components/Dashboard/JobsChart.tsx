import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardHeader, Divider } from '@mui/material';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import {
  Chart, CategoryScale, LinearScale, BarElement,
} from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement);

export const JobsChart: FC = () => {
  const { data } = useQuery({
    queryKey: ['jobsBySpecialty'],
    queryFn: async () => (
      axios.get('/admin/count/jobs')
    ),
  });

  const chartData = {
    datasets: [
      {
        backgroundColor: '#5496C9',
        barPercentage: 1,
        barThickness: 12,
        borderRadius: 5,
        data: data?.data.data.map((jobObj: any) => jobObj.count),
        label: 'Job by Specialty',
        maxBarThickness: 10,
      },
    ],
    labels: data?.data.data.map((jobObj: any) => jobObj.field),
  };

  const chartOptions = {
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <Card sx={{
      width: '100%',
      height: '60vh',
    }}
    >
      <CardHeader sx={{ fontWeight: 500 }} title="Jobs No. By Specialty" />
      <Divider />
      <Bar style={{ padding: '1rem' }} data={chartData} options={chartOptions} redraw />
    </Card>
  );
};
