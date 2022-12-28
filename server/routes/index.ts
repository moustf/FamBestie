import { Router } from 'express';

import { authRouter } from './auth';
import { usersRouter } from './users';
import { adminRouter } from './admin';
import { workerRouter } from './worker';
import { clientRouter } from './client';

import { userAuth } from '../middlewares/userAuth';
import { roleAuth } from '../middlewares/roleAuth';

export const router = Router();

router.use('/auth', authRouter);
router.use('/user', usersRouter);
router.use('/worker', workerRouter);
router.use('/admin', userAuth, roleAuth('admin'), adminRouter);
router.use('/client', userAuth, roleAuth('client'), clientRouter);
