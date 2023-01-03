import { models } from '../../models';

const { Worker, UserWorker, Job } = models;

export const getWorkersListQuery = (id: number) => Worker.findAll({
  attributes: ['id', 'email', 'name', 'phone', 'location', 'specialty'],
  include: [{
    model: UserWorker,
    attributes: ['id'],
    where: {
      user_id: id,
    },
    include: [{
      model: Job,
      attributes: ['id', 'stars', 'review_text'],
    }],
  }],
});
