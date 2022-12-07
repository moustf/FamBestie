import { Router } from 'express';

import { getWorkersListController } from '../controllers/client/getWorkersListController';
import { getWorkersInfoController } from '../controllers/client/getWorkersInfoController';
import { getClientMoneyAmountController } from '../controllers/client/getClientMoneyAmountController';
import { getClientInfoByIdController } from '../controllers/client/getClientInfoByIdController';
import { userAuth } from '../middlewares/userAuth';
import { roleAuth } from '../middlewares/roleAuth';

export const clientRouter = Router();

clientRouter.get('/workers/info', userAuth, roleAuth('client'), getWorkersListController);
clientRouter.get('/workers/reviews', userAuth, roleAuth('client'), getWorkersInfoController);
clientRouter.get('/money', userAuth, roleAuth('client'), getClientMoneyAmountController);
clientRouter.get('/info', userAuth, roleAuth('client'), getClientInfoByIdController);
