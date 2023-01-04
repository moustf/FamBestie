import { Router } from 'express';

import { registerWorkerController } from '../controllers/worker/registerWorker';
import { getWorkersByNameOrSpecialtyController } from '../controllers/worker/getWorkersByNameOrSpecialtyController';
import { getHiredWorkersCountController } from '../controllers/worker/getHiredWorkersCountController';
import { userAuth } from '../middlewares/userAuth';

export const workerRouter = Router();

workerRouter.get('', userAuth, getWorkersByNameOrSpecialtyController);
workerRouter.get('/hired/count', userAuth, getHiredWorkersCountController);
workerRouter.post('/register', registerWorkerController);
