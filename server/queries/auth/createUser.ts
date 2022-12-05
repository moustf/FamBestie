import { User } from '../../models/users';
import { SignupBodyInterface } from '../../utils/interfaces/signupBodyInterface';

export const createUser = (body: SignupBodyInterface) => User.create({ ...body });
