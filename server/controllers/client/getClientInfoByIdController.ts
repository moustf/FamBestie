import { Response, NextFunction } from 'express';

import { getClientInfoByIdQuery } from '../../queries/client/getClientInfoByIdQuery';
import { CustomError } from '../../utils/custom_error';

export const getClientInfoByIdController = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { id } = req.user;

    const client = await getClientInfoByIdQuery(Number(id) || 0);

    if (!client) {
      throw new CustomError(404, 'The client you are searching for does not exist!');
    }

    return res.json({ msg: "The client's info does returned successfully!", data: client });
  } catch (error) {
    next(error);
  }
};
