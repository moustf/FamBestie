import { Response, NextFunction } from 'express';

import { AuthRequestInterface } from '../utils/interfaces/authRequestInterface';
import { UserAuthDataInterface } from '../utils/interfaces/userAuthDataInterface';
import { verifyToken } from '../utils/jwt';
import { CustomError } from '../utils/custom_error';

export const userAuthController = async (req: AuthRequestInterface, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { token } = req.cookies;

    if (!token) {
      throw new CustomError(400, 'Unauthenticated!');
    }

    const user: UserAuthDataInterface = await verifyToken(token) as UserAuthDataInterface;
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
