import { Router } from 'express';

import { getWorkersListController } from '../controllers/client/getWorkersListController';
import { getClientMoneyAmountController } from '../controllers/client/getClientMoneyAmountController';
import { getClientInfoByIdController } from '../controllers/client/getClientInfoByIdController';

export const clientRouter = Router();

clientRouter.get('/workers', getWorkersListController);
clientRouter.get('/money', getClientMoneyAmountController);
clientRouter.get('/info', getClientInfoByIdController);
