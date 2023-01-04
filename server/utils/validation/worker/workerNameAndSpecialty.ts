import { string, object } from 'yup';

export const nameAndSpecialtySchema = object({
  specialty: string().matches(/guard|babysitter|housekeeper|driver|trainer/),
  name: string(),
});
