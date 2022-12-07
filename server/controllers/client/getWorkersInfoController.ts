import { Response, NextFunction } from 'express';

import { getWorkersInfoQuery } from '../../queries/client/getWorkersInfoQuery';
import { CustomError } from '../../utils/custom_error';

export const getWorkersInfoController = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { id } = req.user;

    const workersInfo = await getWorkersInfoQuery(Number(id) || 0);

    if (workersInfo.length === 0) {
      throw new CustomError(404, 'The client you are searching for does not exist!');
    }

    return res.json({ msg: 'The workers info returned successfully!', data: workersInfo });
  } catch (error) {
    next(error);
  }
};
