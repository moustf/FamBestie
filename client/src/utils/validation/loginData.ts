import { string, object } from 'yup';

export const loginSchema = object({
  email: string().email().required(),
  password: string().matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&])[a-zA-Z0-9!@#$%^&]{5,}$/).required(),
}).required();
