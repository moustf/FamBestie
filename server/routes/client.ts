import { Router } from 'express';

import { getWorkersListController } from '../controllers/client/getWorkersListController';
import { userAuth } from '../middlewares/userAuth';
import { roleAuth } from '../middlewares/roleAuth';

export const clientRouter = Router();

clientRouter.get('/workers/info', userAuth, roleAuth('client'), getWorkersListController);
