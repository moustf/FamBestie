import { Response, NextFunction } from 'express';

import { AuthRequestInterface } from '../utils/interfaces/authRequestInterface';
import { CustomError } from '../utils/custom_error';

export const clientAuthController = (req: AuthRequestInterface, res: Response, next: NextFunction): void => {
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
