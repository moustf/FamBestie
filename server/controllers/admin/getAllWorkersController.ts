import { Request, Response, NextFunction } from 'express';

import { getAllWorkersQuery } from '../../queries/admin/getAllWorkersQuery';

export const getAllWorkersController = async (req: Request, res: Response, next: NextFunction): Promise<ReturnType<any>> => {
  try {
    const workers = getAllWorkersQuery();

    res.json({ msg: 'Workers returned successfully!', data: workers });
  } catch (error) {
    next(error);
  }
};
