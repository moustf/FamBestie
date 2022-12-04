import { Request, Response, NextFunction } from 'express';
import { validateSignup } from '../../utils/validation/auth/signupValidation';
import { createUser } from '../../queries/auth/createUser';

// TODO: Edit the thrown errors to use customized error class.

export const signupController = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    await validateSignup(req.body);

    const userData = await createUser({
      ...req.body,
      role: 'client',
      visibility: true,
    });

    return res.json({ msg: 'The user have successfully created!', data: userData });
  } catch (error) {
    console.log(error);

    if (error.name === 'ValidationError') {
      next(new Error('Validation Error!!!'));
    }

    next(error);
  }
};
