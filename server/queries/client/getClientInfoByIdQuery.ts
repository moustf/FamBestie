import { User } from '../../models/users';

export const getClientInfoByIdQuery = (id: number) => User.findOne({
  where: { id },
  attributes: {
    exclude: ['password', 'createdAt', 'updatedAt', 'visibility', 'role'],
  },
});
