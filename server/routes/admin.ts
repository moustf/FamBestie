import { Router } from 'express';

import { getClientByIdController } from '../controllers/admin/getClientByIdController';
import { userAuth } from '../middlewares/userAuth';
import { roleAuth } from '../middlewares/roleAuth';

export const adminRouter = Router();

adminRouter.get('/client/:id', userAuth, roleAuth('admin'), getClientByIdController);
