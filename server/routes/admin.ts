import { Router } from 'express';

import { getJobsForWorkerController } from '../controllers/admin/getJobsForWorkerController';
import { userAuth } from '../middlewares/userAuth';
import { roleAuth } from '../middlewares/roleAuth';

export const adminRouter = Router();

adminRouter.get('/worker/:id/jobs', userAuth, roleAuth('admin'), getJobsForWorkerController);
