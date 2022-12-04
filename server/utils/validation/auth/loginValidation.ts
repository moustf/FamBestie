import Joi from 'joi';
import { LoginBodyInterface } from '../../interfaces/loginBodyInterface';

export const validateLogin = (body: LoginBodyInterface) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&])[a-zA-Z0-9!@#$%^&]{5,}$/).required(),
  });

  return schema.validateAsync(body);
};
