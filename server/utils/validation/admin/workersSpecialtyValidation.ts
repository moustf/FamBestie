import { string, object } from 'yup';

export const specialtySchema = object({
  specialty: string().matches(/guard|babysitter|housekeeper|driver|trainer/),
});
