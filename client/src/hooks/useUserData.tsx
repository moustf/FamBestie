import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

const fetchData = async (): Promise<ReturnType<any>> => (
  axios.get('/auth/user')
);

export const useUserData = (): {
  data: AxiosResponse,
  isLoading: boolean,
  isError: boolean,
  error: unknown,
} => {
  const {
    data, isLoading, isError, error,
  } = useQuery(['userData'], fetchData);

  return {
    data,
    isLoading,
    isError,
    error,
  };
};
