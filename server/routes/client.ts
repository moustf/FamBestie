import { Router } from 'express';

import { getClientMoneyAmountController } from '../controllers/client/getClientMoneyAmountController';
import { userAuth } from '../middlewares/userAuth';
import { roleAuth } from '../middlewares/roleAuth';

export const clientRouter = Router();

clientRouter.get('/money', userAuth, roleAuth('client'), getClientMoneyAmountController);
