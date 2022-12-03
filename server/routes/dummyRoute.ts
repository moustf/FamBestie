import { Router } from 'express';
import { dummyController } from '../controllers/dummyController';

export const dummyRouter = Router();

dummyRouter.get('/dummy', dummyController);
