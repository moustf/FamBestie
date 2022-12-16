import { Router } from 'express';

import { signupController } from '../controllers/auth/signup';
import { loginController } from '../controllers/auth/login';
import { logoutController } from '../controllers/auth/logout';
import { userAuth } from '../middlewares/userAuth';
import { userDataController } from '../controllers/auth/userData';

export const authRouter = Router();

authRouter.post('/signup', signupController);
authRouter.post('/login', loginController);
authRouter.post('/logout', logoutController);
authRouter.get('/user', userAuth, userDataController);
