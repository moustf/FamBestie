import { Router } from 'express';

import { getAllClientsForWorkerController } from '../controllers/admin/getAllClientsForWorker';
import { userAuth } from '../middlewares/userAuth';
import { roleAuth } from '../middlewares/roleAuth';

export const adminRouter = Router();

adminRouter.get('/worker/:id/clients', userAuth, roleAuth('admin'), getAllClientsForWorkerController);
