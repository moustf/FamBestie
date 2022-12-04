import { Router } from 'express';

import { signupController } from '../controllers/auth/signup';

export const authRouter = Router();

authRouter.post('/auth/signup', signupController);
