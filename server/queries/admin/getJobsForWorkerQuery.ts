import { models } from '../../models';

const { Job, Worker, UserWorker } = models;

export const getJobsForWorkerQuery = (id: number) => Job.findAll({
  include: [{
    model: UserWorker,
    attributes: [],
    include: [{
      model: Worker,
      where: {
        id,
      },
    }],
  }],
});
