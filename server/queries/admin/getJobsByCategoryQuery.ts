import { Job } from '../../models/jobs';

export const getJobsByCategoryQuery = (category: string) => {
  if (category === 'all') {
    return Job.findAll({
      attributes: {
        exclude: ['field', 'createdAt', 'updatedAt'],
      },
    });
  }
  return Job.findAll({
    attributes: {
      exclude: ['field', 'createdAt', 'updatedAt'],
    },
    where: {
      field: category,
    },
  });
};
