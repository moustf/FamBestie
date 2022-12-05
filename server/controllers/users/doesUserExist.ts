import { Request, Response, NextFunction } from 'express';

import { doesUserExist } from '../../queries/auth/doesUserExist';
import { CustomError } from '../../utils/custom_error';

export const doesEmailExistController = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { email } = req.query;

    const doesEmailExist = await doesUserExist(email as string);

    if (doesEmailExist?.getDataValue('id')) {
      throw new CustomError(302, 'The user does already exist!');
    }

    return res.status(202).json({ msg: 'The user does not exist, you can create an account!' });
  } catch (error) {
    next(error);
  }
};
