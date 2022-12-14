import { Response, NextFunction } from 'express';

import { CustomError } from '../utils/custom_error';

export const roleAuth = (role: 'admin' | 'client') => (req: any, res: Response, next: NextFunction) => {
  try {
    const { user } = req;

    if (user?.role === role) {
      next();
    } else {
      throw new CustomError(401, 'Unauthorized!');
    }
  } catch (error) {
    next(error);
  }
};
