import { Router } from 'express';

import { signupController } from '../controllers/auth/signup';
import { loginController } from '../controllers/auth/login';

export const authRouter = Router();

authRouter.post('/auth/signup', signupController);
authRouter.post('/auth/login', loginController);
