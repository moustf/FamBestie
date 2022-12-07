import { Router } from 'express';

import { getWorkersInfoController } from '../controllers/client/getWorkersInfoController';
import { userAuth } from '../middlewares/userAuth';
import { roleAuth } from '../middlewares/roleAuth';

export const clientRouter = Router();

clientRouter.get('/workers/reviews', userAuth, roleAuth('client'), getWorkersInfoController);
