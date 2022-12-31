import { Request, Response, NextFunction } from 'express';

import { getJobsCountBySpecialtyQuery } from '../../queries/admin/getJobsCountBySpecialtyQuery';
import { CustomError } from '../../utils/custom_error';

export const getJobsCountBySpecialtyController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const count = await getJobsCountBySpecialtyQuery();

    return res.json({ msg: 'The jobs count did return successfully!', data: count });
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new CustomError(400, 'The provided specialty is invalid!'));
    }

    next(error);
  }
};
