import { Router } from 'express';
import { dummyRouter } from './dummyRoute';

export const router = Router();

router.use(dummyRouter);
