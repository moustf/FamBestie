import { useAppDispatch } from './redux';
import { clearUserData } from '../features/auth/authSlice';

export const useLogout = (): (() => void) => {
  const dispatch = useAppDispatch();

  const handleLogout = (): void => {
    dispatch(clearUserData());
  };

  return handleLogout;
};
