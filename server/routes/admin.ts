import { Router } from 'express';

import { getClientByIdController } from '../controllers/admin/getClientByIdController';
import { getJobsForWorkerController } from '../controllers/admin/getJobsForWorkerController';
import { getWorkerByIdController } from '../controllers/admin/getWorkerByIdController';
import { getAllJobsController } from '../controllers/admin/getAllJobsController';
import { getAllClientsController } from '../controllers/admin/getAllClientsController';
import { getAllWorkersController } from '../controllers/admin/getAllWorkersController';
import { getAllClientsForWorkerController } from '../controllers/admin/getAllClientsForWorker';
import { getAllWorkersForClientController } from '../controllers/admin/getAllWorkersForClientController';
import { getJobsByCategoryController } from '../controllers/admin/getJobsByCategoryController';
import { getTotalsStatisticsController } from '../controllers/admin/getTotalsStatisticsController';

export const adminRouter = Router();

adminRouter.get('/client/:id', getClientByIdController);
adminRouter.get('/worker/:id/jobs', getJobsForWorkerController);
adminRouter.get('/worker/:id', getWorkerByIdController);
adminRouter.get('/jobs', getAllJobsController);
adminRouter.get('/clients', getAllClientsController);
adminRouter.get('/workers', getAllWorkersController);
adminRouter.get('/worker/:id/clients', getAllClientsForWorkerController);
adminRouter.get('/client/:id/workers', getAllWorkersForClientController);
adminRouter.get('/jobs/:category', getJobsByCategoryController);
adminRouter.get('/statistics', getTotalsStatisticsController);
