import { Router } from 'express';
import dummyRouter from './dummyRoute';

const router = Router();

router.use(dummyRouter);

export default router;
