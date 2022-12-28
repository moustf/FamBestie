import { Op } from 'sequelize';
import { User } from '../../models/users';

export const getTotalNumberOfClientsQuery = () => User.count({
  where: {
    id: {
      [Op.ne]: 1,
    },
  },
});
