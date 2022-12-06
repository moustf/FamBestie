import { Router } from 'express';

import { authRouter } from './auth';
import { usersRouter } from './users';
import { workerRouter } from './worker';

export const router = Router();

router.use('/auth', authRouter);
router.use('/user', usersRouter);
router.use('/worker', workerRouter);
