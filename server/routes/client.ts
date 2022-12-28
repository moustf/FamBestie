import { Router } from 'express';

import { getWorkersListController } from '../controllers/client/getWorkersListController';
import { getWorkersInfoController } from '../controllers/client/getWorkersInfoController';
import { getClientMoneyAmountController } from '../controllers/client/getClientMoneyAmountController';
import { getClientInfoByIdController } from '../controllers/client/getClientInfoByIdController';

export const clientRouter = Router();

clientRouter.get('/workers/info', getWorkersListController);
clientRouter.get('/workers/reviews', getWorkersInfoController);
clientRouter.get('/money', getClientMoneyAmountController);
clientRouter.get('/info', getClientInfoByIdController);
