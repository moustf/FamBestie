import { FC, useEffect } from 'react';
import { Header } from '../components/Header/Header';

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setUserData, selectUserData } from '../features/auth/authSlice';
import { UserData } from '../utils/interfaces/redux';
import { LandingSection } from '../components/LandingPageComponents/LandingSection';
import { ForClientsSection } from '../components/LandingPageComponents/ForClientsSection';

export const LandingPage: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setUserData());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userData: UserData = useAppSelector(selectUserData);

  return (
    <main>
      <Header isLoggedIn={Boolean(userData.id)} />
      <LandingSection />
      <ForClientsSection />
    </main>
  );
};
