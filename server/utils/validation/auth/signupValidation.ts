import Joi from 'joi';
import { SignupBodyInterface } from '../../interfaces/signupBodyInterface';

export const validateSignup = (body: SignupBodyInterface) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&])[a-zA-Z0-9!@#$%^&]{5,}$/).required(),
    passwordConfirmation: Joi.ref('password'),
    location: Joi.string().required(),
    phone: Joi.string().required(),
  });

  return schema.validateAsync(body);
};
