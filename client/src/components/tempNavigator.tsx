import React from 'react';
import { Link } from 'react-router-dom';
import { fetchUserData } from '../features/auth/authSlice';
import { useAppDispatch } from '../hooks/redux';

export const TempNavigator = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  dispatch(fetchUserData());

  return (
    <section style={{
      width: '100%',
      marginTop: '3rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '3rem',
    }}
    >
      <h1>Temporary Navigator</h1>
      <strong style={{ color: 'primary.dark', fontSize: '1.5rem' }}>
        <Link to="/login">Go to login</Link>
      </strong>
      <strong style={{ color: 'primary.dark', fontSize: '1.5rem' }}>
        <Link to="/signup">Go to signup</Link>
      </strong>
    </section>
  );
};
