import { Response, NextFunction } from 'express';

import { AuthRequest } from '../utils/interfaces/authRequest';
import { UserAuthData } from '../utils/interfaces/userAuthData';
import { verifyToken } from '../utils/jwt';
import { CustomError } from '../utils/custom_error';

export const userAuthController = async (req: AuthRequest, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { token } = req.cookies;

    if (!token) {
      throw new CustomError(400, 'Unauthenticated!');
    }

    const user: UserAuthData = await verifyToken(token) as UserAuthData;
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
