export interface SignupBodyInterface {
  name: string,
  email: string,
  password: string,
  passwordConfirmation: string | unknown,
  location: string,
  phone: string,
}

export interface SignupQueryInterface extends SignupBodyInterface {
  role: string,
  visibility: boolean,
}
