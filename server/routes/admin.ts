import { Router } from 'express';

import { getAllJobsController } from '../controllers/admin/getAllJobsController';
import { userAuth } from '../middlewares/userAuth';
import { roleAuth } from '../middlewares/roleAuth';

export const adminRouter = Router();

adminRouter.get('/jobs', userAuth, roleAuth('admin'), getAllJobsController);
