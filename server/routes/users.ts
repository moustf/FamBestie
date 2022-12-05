import { Router } from 'express';

import { doesEmailExistController } from '../controllers/users/doesUserExist';

export const usersRouter = Router();

usersRouter.get('/check', doesEmailExistController);
