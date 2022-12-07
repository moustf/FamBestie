import { Router } from 'express';

import { getWorkersInfoController } from '../controllers/client/getWorkersInfoController';
import { getClientMoneyAmountController } from '../controllers/client/getClientMoneyAmountController';
import { userAuth } from '../middlewares/userAuth';
import { roleAuth } from '../middlewares/roleAuth';

export const clientRouter = Router();

clientRouter.get('/workers/reviews', userAuth, roleAuth('client'), getWorkersInfoController);
clientRouter.get('/money', userAuth, roleAuth('client'), getClientMoneyAmountController);