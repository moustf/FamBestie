import { sequelize } from '../../database/connection';
import { Job } from '../../models/jobs';

export const getJobsCountBySpecialtyQuery = () => Job.findAll({
  attributes: [
    'field',
    [sequelize.fn('COUNT', sequelize.col('field')), 'count'],
  ],
  group: 'field',
});
