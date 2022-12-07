import { Router } from 'express';

import { getAllClientsController } from '../controllers/admin/getAllClientsController';
import { getAllWorkersController } from '../controllers/admin/getAllWorkersController';
import { getAllClientsForWorkerController } from '../controllers/admin/getAllClientsForWorker';
import { userAuth } from '../middlewares/userAuth';
import { roleAuth } from '../middlewares/roleAuth';

export const adminRouter = Router();

adminRouter.get('/clients', userAuth, roleAuth('admin'), getAllClientsController);
adminRouter.get('/workers', userAuth, roleAuth('admin'), getAllWorkersController);
adminRouter.get('/worker/:id/clients', userAuth, roleAuth('admin'), getAllClientsForWorkerController);
