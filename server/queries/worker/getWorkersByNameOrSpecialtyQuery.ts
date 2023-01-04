import { Op } from 'sequelize';
import { Worker } from '../../models/workers';

export const getWorkersByNameOrSpecialtyQuery = (name: string | undefined, specialty: string | undefined) => {
  if (name) {
    return Worker.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
  }

  return Worker.findAll({
    where: {
      specialty,
    },
  });
};
