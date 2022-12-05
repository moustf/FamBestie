import { User } from '../../models/users';

export const checkUserLogin = async (email: string) => (
  User.findOne({
    attributes: ['id', 'name', 'role', 'password'],
    where: {
      email,
    },
  })
);
