import { Router } from 'express';

import { registerWorkerController } from '../controllers/worker/registerWorker';

export const workerRouter = Router();

workerRouter.post('/register', registerWorkerController);
