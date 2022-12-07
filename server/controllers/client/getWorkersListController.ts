import { Response, NextFunction } from 'express';

import { getWorkersListQuery } from '../../queries/client/getWorkersListQuery';
import { CustomError } from '../../utils/custom_error';

export const getWorkersListController = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { id } = req.user;

    const workers = await getWorkersListQuery(Number(id) || 0);

    if (workers.length === 0) {
      throw new CustomError(404, 'The user you are searching for does not exist!');
    }

    return res.json({ msg: 'The workers list returned successfully!', data: workers });
  } catch (error) {
    next(error);
  }
};
