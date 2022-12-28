import { Worker } from '../../models/workers';

const getTotalNumOfHiredWorkersQuery = () => Worker.count({
  where: {
    state: 'hired',
  },
});

const getTotalNumOfUnemployedWorkersQuery = () => Worker.count({
  where: {
    state: 'unemployed',
  },
});

export const totals = () => Promise.all([getTotalNumOfHiredWorkersQuery(), getTotalNumOfUnemployedWorkersQuery()]);
