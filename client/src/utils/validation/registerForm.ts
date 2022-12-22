import {
  string, object, date, number,
} from 'yup';

export const registerFormSchema = object({
  name: string().required('Name is required!'),
  email: string().email('Please provide a valid email!').required(),
  phone: string().matches(
    /^[0-9]{10}$/,
    'The phone number must be written with the local formula!',
  ).required(),
  location: string().required('Location is required!'),
  gender: string().matches(
    /male|female/,
    'The gender can be either a male or female.',
  ).required(),
  specialty: string().matches(
    /housekeeper|guard|babysitter|driver|trainer/,
    'The specialty can be one of: housekeeper, guard, babysitter, driver, trainer only.',
  ).required(),
  dateOfBirth: date().required(),
  yearsOfExperience: number().required(),
});
