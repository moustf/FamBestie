import { Worker } from '../../models/workers';

import { RegisterWorker } from '../../utils/interfaces/registerWorker';

export const registerWorkerQuery = (body: RegisterWorker) => Worker.create({ ...body }, { returning: ['id'] });
