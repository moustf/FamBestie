import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../../utils/custom_error';

export const logoutController = (req: Request, res:Response, next: NextFunction) => {
  try {
    return res.clearCookie('token').json({ msg: 'The user have been logged out successfully!' });
  } catch (error) {
    next(new CustomError(500, `${error}`));
  }
};
