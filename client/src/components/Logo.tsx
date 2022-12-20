import { FC } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/Logo.png';

export const AppLogo: FC = () => (
  <Link to="/">
    <img src={Logo} alt="logo" />
  </Link>
);
