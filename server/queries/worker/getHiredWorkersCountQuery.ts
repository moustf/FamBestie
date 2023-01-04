import { Worker } from '../../models/workers';

export const getHiredWorkersCountQuery = () => Worker.count({
  where: {
    state: 'hired',
  },
});
