import { FC } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/Logo.png';

export const AppLogo: FC = () => (
  <Link to="/">
    <img style={{ width: '100%' }} src={Logo} alt="logo" />
  </Link>
);
