import { Router } from 'express';

import { getWorkerByIdController } from '../controllers/admin/getWorkerByIdController';
import { userAuth } from '../middlewares/userAuth';
import { roleAuth } from '../middlewares/roleAuth';

export const adminRouter = Router();

adminRouter.get('/worker/:id', userAuth, roleAuth('admin'), getWorkerByIdController);
