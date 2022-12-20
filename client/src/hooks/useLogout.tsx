import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useLogout = (): (() => void) => {
  const { refetch } = useQuery({
    queryKey: ['logout'],
    queryFn: () => (
      axios.post('/auth/logout')
    ),
    enabled: false,
  });

  const handleLogout = (): void => {
    refetch();
  };

  return handleLogout;
};
