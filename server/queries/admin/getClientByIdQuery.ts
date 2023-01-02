import { models } from '../../models';

const { User, UserWorker, Worker } = models;

export const getClientByIdQuery = (id: number) => User.findOne({
  where: { id },
  attributes: ['id', 'name', 'email', 'location'],
  include: [{
    model: UserWorker, // ? Array of worker objects in case of more than one worker.
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'user_id', 'worker_id', 'job_id'],
    },
    include: [{
      model: Worker,
      attributes: ['id', 'name', 'email', 'location', 'phone', 'specialty', 'years_of_experience'],
    }],
  }],
});
