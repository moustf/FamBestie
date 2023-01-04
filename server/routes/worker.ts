import { Router } from 'express';

import { registerWorkerController } from '../controllers/worker/registerWorker';
import { getWorkersByNameOrSpecialtyController } from '../controllers/worker/getWorkersByNameOrSpecialtyController';
import { userAuth } from '../middlewares/userAuth';

export const workerRouter = Router();

workerRouter.get('', userAuth, getWorkersByNameOrSpecialtyController);
workerRouter.post('/register', registerWorkerController);
