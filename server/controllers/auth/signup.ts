import { Request, Response, NextFunction } from 'express';
import { hash } from 'bcryptjs';
import { signupSchema } from '../../utils/validation/auth/signupValidation';
import { createUser } from '../../queries/auth/createUser';
import { doesUserExist } from '../../queries/auth/doesUserExist';
import { signToken } from '../../utils/jwt';
import { TokenPayload } from '../../utils/interfaces/tokenPayload';
import { CustomError } from '../../utils/custom_error';

export const signupController = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    // * Signup data validation.
    const signupData = await signupSchema.validate(req.body);

    // * Check if the email does already exist or not.
    const doesEmailExist = await doesUserExist(signupData.email);

    // * If the email does exist, throw an error.
    if (doesEmailExist) {
      throw new CustomError(400, 'The email does already exist!');
    }

    const hashedPassword = await hash(signupData.password, 12);

    const userData = await createUser({
      ...{
        ...signupData,
        password: hashedPassword,
      },
      role: 'client',
      visibility: true,
    });

    const payload: TokenPayload = {
      id: userData.getDataValue('id'),
      name: userData.getDataValue('name'),
      role: 'client',
    };

    // * Creating the token with the user's id, name, and role(client).
    const token = await signToken(payload);

    // * Returning the response, because when I have many responses depending on different logic,
    // * I can handle with return and if blocks.
    return res
      .cookie('token', token, { httpOnly: true })
      .status(201)
      .json({ msg: 'The user have successfully created!', data: payload });
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new CustomError(400, 'The user has entered an invalid data!'));
    }

    next(error);
  }
};
