import { Router } from 'express';

import { signupController } from '../controllers/auth/signup';
import { loginController } from '../controllers/auth/login';
import { logoutController } from '../controllers/auth/logout';

export const authRouter = Router();

authRouter.post('/signup', signupController);
authRouter.post('/login', loginController);
authRouter.post('/logout', logoutController);
