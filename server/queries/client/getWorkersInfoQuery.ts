import { models } from '../../models';

const {
  Worker, User, UserWorker, Job,
} = models;

export const getWorkersInfoQuery = (id: number) => User.findAll({
  raw: true,
  nest: false,
  attributes: [
    'user_workers.Worker.id',
    'user_workers.Worker.name',
    'user_workers.Worker.specialty',
    'user_workers.Job.id',
    'user_workers.Job.stars',
    'user_workers.Job.review_text',
    'user_workers.Job.working_hours',
  ],
  where: {
    id,
  },
  include: [{
    model: UserWorker,
    attributes: [],
    include: [
      {
        model: Worker,
        attributes: [],
      },
      {
        model: Job,
        attributes: [],
      },
    ],
  }],
});
