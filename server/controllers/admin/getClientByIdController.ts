import { Request, Response, NextFunction } from 'express';

import { getClientByIdQuery } from '../../queries/admin/getClientByIdQuery';
import { CustomError } from '../../utils/custom_error';

export const getClientByIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const client = await getClientByIdQuery(Number(id) || 0);

    if (!client) {
      throw new CustomError(404, 'The user you are searching for does not exist!');
    }

    return res.json({ msg: 'The client has been returned successfully!', data: client });
  } catch (error) {
    next(error);
  }
};
