import { Op } from 'sequelize';
import { User } from '../../models/users';

export const getAllClientsQuery = () => User.findAll({
  attributes: {
    exclude: ['password', 'updatedAt', 'role'],
  },
  where: {
    id: {
      [Op.ne]: 1,
    },
  },
});
