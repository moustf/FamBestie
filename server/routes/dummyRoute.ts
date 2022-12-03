import { Router } from 'express';
import dummyController from '../controllers';

const dummyRouter = Router();

dummyRouter.get('/dummy', dummyController);

export default dummyRouter;
