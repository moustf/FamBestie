import React from 'react';
import { Link } from 'react-router-dom';

export const TempNavigator = (): React.ReactElement => (
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
