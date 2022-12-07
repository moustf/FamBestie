import { models } from '../../models';

const { Worker, User, UserWorker } = models;

export const getAllClientsForWorkerQuery = (id: number) => Worker.findAll({
  include: [{
    model: UserWorker,
    include: [{
      model: User,
      where: {
        id,
      },
    }],
  }],
});
