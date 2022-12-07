import { models } from '../../models';

const { Worker, UserWorker } = models;

export const getWorkersListQuery = (id: number) => Worker.findAll({
  include: [{
    model: UserWorker,
    attributes: [],
    where: {
      user_id: id,
    },
  }],
});
