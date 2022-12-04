import { Request, Response, NextFunction } from 'express';
import { hash } from 'bcryptjs';

import { validateSignup } from '../../utils/validation/auth/signupValidation';
import { createUser } from '../../queries/auth/createUser';
import { doesUserExist } from '../../queries/auth/doesUserExist';
import { signToken } from '../../utils/jwt';
import { TokenPayloadInterface } from '../../utils/interfaces/tokenPayloadInterface';

// TODO: Edit the return responses when errors occur to use customized error class.

export const signupController = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    // * Signup data validation.
    await validateSignup(req.body);

    // * Check if the email does already exist or not.
    const doesEmailExist = await doesUserExist(req.body.email);

    // * If the email does exist, throw an error.
    if (doesEmailExist) {
      return res.status(400).json({ msg: 'The email does already exist!' });
    }

    const hashedPassword = await hash(req.body.password, 12);

    const userData = await createUser({
      ...{
        ...req.body,
        password: hashedPassword,
      },
      role: 'client',
      visibility: true,
    });

    const payload: TokenPayloadInterface = {
      id: userData.getDataValue('id'),
      name: userData.getDataValue('name'),
      role: 'client',
    };

    // * Creating the token with the user's id, name, and role(client).
    const token = await signToken(payload);

    // * Returning the response, because when I have many responses depending on different logic,
    // * I can handle with return and if blocks.
    return res
      .cookie('token', token)
      .status(201)
      .json({ msg: 'The user have successfully created!', data: payload });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ msg: 'The user has entered an invalid data!' });
    }

    next(error);
  }
};
