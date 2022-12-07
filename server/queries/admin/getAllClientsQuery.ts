import { User } from '../../models/users';

export const getAllClientsQuery = () => User.findAll();
