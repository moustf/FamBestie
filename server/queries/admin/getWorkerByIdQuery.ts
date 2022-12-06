import { Worker } from '../../models/workers';

export const getWorkerByIdQuery = (id: number) => Worker.findOne({
  where: {
    id,
  },
});
