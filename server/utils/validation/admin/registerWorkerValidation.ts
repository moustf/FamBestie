import {
  object, string, number, date,
} from 'yup';

export const registerWorkerSchema = object({
  name: string().required(),
  email: string().email().required(),
  gender: string().required(),
  location: string().required(),
  phone: string().matches(/^\d+$/).required(),
  dateOfBirth: date().required(),
  yearsOfExperience: number().required(),
  specialty: string().required(),
});
