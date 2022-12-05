import { string, object } from 'yup';

import { LoginBodyInterface } from '../../interfaces/loginBodyInterface';

export const validateLogin = (body: LoginBodyInterface) => {
  const schema = object({
    email: string().email().required(),
    password: string().matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&])[a-zA-Z0-9!@#$%^&]{5,}$/).required(),
  });

  return schema.validate(body);
};
