import { Request, Response, NextFunction } from 'express';

import { getHiredWorkersCountQuery } from '../../queries/worker/getHiredWorkersCountQuery';

export const getHiredWorkersCountController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const workersCount = await getHiredWorkersCountQuery();

    return res.json({ msg: 'The count of hired workers did return successfully!', data: workersCount });
  } catch (error) {
    next(error);
  }
};
