import { sequelize } from '../../database/connection';
import { models } from '../../models';

const { UserWorker, Job } = models;

export const getClientMoneyAmountQuery = (id: number) => UserWorker.findAll({
  where: {
    id,
  },
  attributes: [[sequelize.fn('SUM', sequelize.col('Job.bill')), 'amountOfMoney']],
  include: {
    model: Job,
    attributes: [],
  },
  group: ['Job.id', 'user_worker.id'],
});
