import { User } from '../../models/users';

export const doesUserExist = (email: string) => User.findOne({
  attributes: ['id'],
  where: {
    email,
  },
});
