import { User } from '../../models/users';
import { SignupSchemaInterface } from '../../utils/interfaces/signupSchemaInterface';

export const createUser = (body: SignupSchemaInterface) => User.create({ ...body });
