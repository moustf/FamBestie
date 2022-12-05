import { NextFunction, Response } from 'express';

import { AuthRequestInterface } from '../utils/interfaces/authRequestInterface';
import { CustomError } from '../utils/custom_error';

export const adminAuthController = (req: AuthRequestInterface, res: Response, next: NextFunction): void => {
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
