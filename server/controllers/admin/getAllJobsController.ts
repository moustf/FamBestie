import { Request, Response, NextFunction } from 'express';

import { getAllJobsQuery } from '../../queries/admin/getAllJobsQuery';

export const getAllJobsController = async (req: Request, res: Response, next: NextFunction): Promise<ReturnType<any>> => {
  try {
    const jobs = await getAllJobsQuery();

    return res.json({ msg: 'The jobs and their related data has been returned successfully!', data: jobs });
  } catch (err) {
    next(err);
  }
};
