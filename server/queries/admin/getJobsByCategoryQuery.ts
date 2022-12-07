import { Job } from '../../models/jobs';

export const getJobsByCategoryQuery = (category: string) => Job.findAll({
  where: {
    title: category,
  },
});
