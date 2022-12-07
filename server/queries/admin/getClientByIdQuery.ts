import { User } from '../../models/users';

export const getClientByIdQuery = (id: number) => User.findOne({ where: { id } });
