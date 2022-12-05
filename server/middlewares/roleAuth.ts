/* eslint-disable no-unused-vars */
import { Response, NextFunction } from 'express';

import { AuthRequest } from '../utils/interfaces/authRequest';
import { CustomError } from '../utils/custom_error';

const clientAuthController = (req: AuthRequest, res: Response, next: NextFunction): void => {
  try {
    const { user } = req;

    if (user?.role === 'client') {
      next();
    } else {
      throw new CustomError(401, 'Unauthorized!');
    }
  } catch (error) {
    next(error);
  }
};

const adminAuthController = (req: AuthRequest, res: Response, next: NextFunction): void => {
  try {
    const { user } = req;

    if (user?.role === 'Admin') {
      next();
    } else {
      throw new CustomError(401, 'Unauthorized!');
    }
  } catch (error) {
    next(error);
  }
};

export const roleAuth = (role: 'admin' | 'client'): (req: AuthRequest, res: Response, next: NextFunction) => void => (
  role === 'admin' ? adminAuthController : clientAuthController
);
