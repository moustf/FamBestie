import { Router } from 'express';

import { getAllClientsController } from '../controllers/admin/getAllClientsController';
import { userAuth } from '../middlewares/userAuth';
import { roleAuth } from '../middlewares/roleAuth';

export const adminRouter = Router();

adminRouter.get('/clients', userAuth, roleAuth('admin'), getAllClientsController);
