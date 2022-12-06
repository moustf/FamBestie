import { Router } from 'express';

import { getAllWorkersController } from '../controllers/admin/getAllWorkersController';
import { userAuth } from '../middlewares/userAuth';
import { roleAuth } from '../middlewares/roleAuth';

export const adminRouter = Router();

adminRouter.get('/workers', userAuth, roleAuth('admin'), getAllWorkersController);
