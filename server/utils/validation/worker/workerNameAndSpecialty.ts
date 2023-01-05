import { string, number, object } from 'yup';

export const nameAndSpecialtySchema = object({
  specialty: string().matches(/all|guard|babysitter|housekeeper|driver|trainer/),
  name: string(),
  offset: number(),
});
