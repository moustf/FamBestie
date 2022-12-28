import { models } from '../../models';

const { Worker, UserWorker, Job } = models;

export const getWorkerByIdQuery = (id: number) => Worker.findOne({
  where: {
    id,
  },
  include: [{
    model: UserWorker, // ? Array of job review and other data objects in case of more than one job.
    where: {
      worker_id: id,
    },
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'user_id', 'worker_id', 'job_id'],
    },
    include: [{
      model: Job,
      attributes: ['id', 'stars', 'review_text', 'working_hours', 'bill'],
    }],
  }],
});
