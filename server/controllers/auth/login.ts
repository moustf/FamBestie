import { Request, Response, NextFunction } from 'express';
import { compare } from 'bcryptjs';

import { checkUserLogin } from '../../queries/auth/checkUserLogin';
import { validateLogin } from '../../utils/validation/auth/loginValidation';
import { CustomError } from '../../utils/custom_error';
import { signToken } from '../../utils/jwt';

export const loginController = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const loginData = await validateLogin(req.body);

    const userData = await checkUserLogin(loginData.email);
    const id = userData?.getDataValue('id');
    const name = userData?.getDataValue('name');
    const role = userData?.getDataValue('role');
    const userPassword = userData?.getDataValue('password');

    const samePassword = await compare(req.body.password, userPassword);

    if (!samePassword) {
      throw new CustomError(400, 'Wrong password!');
    }

    const token = await signToken({ id, name, role });
    return res
      .cookie('token', token, { httpOnly: true })
      .json({ msg: 'Logged in successfully!', data: { id, name, role } });
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new CustomError(400, 'Invalid email or password!'));
    }

    next(error);
  }
};
