import { Worker } from '../../models/workers';

export const doesWorkerExistQuery = (email: string) => Worker.findOne({
  attributes: ['id'],
  where: { email },
});
