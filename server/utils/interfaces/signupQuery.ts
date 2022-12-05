export interface SignupQuery {
  name: string,
  email: string,
  password: string,
  passwordConfirmation: string | unknown,
  location: string,
  phone: string,
  role: string,
  visibility: boolean,
}
