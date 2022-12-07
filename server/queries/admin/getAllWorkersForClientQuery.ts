import { models } from '../../models';

const { User, Worker, UserWorker } = models;

export const getAllWorkersForClientQuery = (id: number) => User.findAll({
  where: {
    id,
  },
  attributes: [],
  include: [{
    model: UserWorker,
    attributes: [],
    include: [{
      model: Worker,
    }],
  }],
});
