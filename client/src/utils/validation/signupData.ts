import { string, object, ref } from 'yup';

export const signupSchema = object({
  name: string().required('Name is required!'),
  email: string().email('Please provide a valid email!').required(),
  password: string()
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&])[a-zA-Z0-9!@#$%^&]{5,}$/,
      'The password should contain at least eight characters including one capital letter, one small letter, on number, and on symbol!',
    )
    .required(),
  passwordConfirmation: string()
    .oneOf([ref('password'), null], 'Passwords must match each other'),
  location: string().required('Location is required!'),
  phone: string().matches(
    /^[0-9]{10}$/,
    'The phone number must be written with the local formula!',
  ).required(),
});
