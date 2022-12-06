import { User } from '../../models/users';
import { SignupQuery } from '../../utils/interfaces/signupQuery';

export const createUser = (body: SignupQuery) => User.create({ ...body });
