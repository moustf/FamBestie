import { string, object, ref } from 'yup';

import { SignupBodyInterface } from '../../interfaces/signupBodyInterface';

export const validateSignup = (body: SignupBodyInterface) => {
  const schema = object({
    name: string().required(),
    email: string().email().required(),
    password: string().matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&])[a-zA-Z0-9!@#$%^&]{5,}$/).required(),
    passwordConfirmation: ref('password'),
    location: string().required(),
    phone: string().required(),
  });

  return schema.validate(body);
};
