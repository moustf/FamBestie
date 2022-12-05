import { User } from '../../models/users';
import { SignupQueryInterface } from '../../utils/interfaces/signupBodyInterface';

export const createUser = (body: SignupQueryInterface) => User.create({ ...body });
