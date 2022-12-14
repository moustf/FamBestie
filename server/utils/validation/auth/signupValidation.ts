import { string, object, ref } from 'yup';

export const signupSchema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&])[a-zA-Z0-9!@#$%^&]{5,}$/).required(),
  passwordConfirmation: ref('password'),
  location: string().required(),
  phone: string().required(),
});
