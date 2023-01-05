import { Op } from 'sequelize';
import { Worker } from '../../models/workers';

export const getWorkersByNameOrSpecialtyQuery = (name = '', specialty = '', offset = 1) => {
  if (name && specialty) {
    return Worker.findAll({
      attributes: ['id', 'name', 'email', 'location', 'gender', 'phone', 'specialty', 'years_of_experience'],
      where: {
        [Op.and]: [
          {
            name: {
              [Op.iLike]: `%${name}%`,
            },
          },
          {
            specialty,
          },
          {
            state: 'hired',
          },
        ],
      },
      offset: ((+offset - 1) * 3),
      limit: 3,
    });
  }

  if (name) {
    return Worker.findAll({
      attributes: ['id', 'name', 'email', 'location', 'gender', 'phone', 'specialty', 'years_of_experience'],
      where: {
        [Op.and]: [
          {
            name: {
              [Op.iLike]: `%${name}%`,
            },
          },
          {
            state: 'hired',
          },
        ],
      },
      offset: ((+offset - 1) * 3),
      limit: 3,
    });
  }

  if (specialty === 'all') {
    return Worker.findAll({
      attributes: ['id', 'name', 'email', 'location', 'gender', 'phone', 'specialty', 'years_of_experience'],
      where: {
        state: 'hired',
      },
      offset: ((+offset - 1) * 3),
      limit: 3,
    });
  }

  return Worker.findAll({
    attributes: ['id', 'name', 'email', 'location', 'gender', 'phone', 'specialty', 'years_of_experience'],
    where: {
      [Op.and]: [
        { specialty },
        { state: 'hired' },
      ],
    },
    offset: ((+offset - 1) * 3),
    limit: 3,
  });
};
