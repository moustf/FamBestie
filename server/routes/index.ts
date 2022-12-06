import { Router } from 'express';

import { authRouter } from './auth';
import { usersRouter } from './users';
import { adminRouter } from './admin';

export const router = Router();

router.use('/auth', authRouter);
router.use('/user', usersRouter);
router.use('/admin', adminRouter);
