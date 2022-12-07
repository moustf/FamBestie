import { models } from '../../models';

const { Worker, UserWorker, Job } = models;

// ? The query will perform a left join to get always the Jobs, and if the job have been filled, the
// ? query will return the worker's info.
export const getAllJobsQuery = () => Job.findAll({
  include: [{
    model: UserWorker,
    include: [{
      model: Worker,
    }],
  }],
});
