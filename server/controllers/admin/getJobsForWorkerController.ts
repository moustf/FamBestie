import { Request, Response, NextFunction } from 'express';

import { getJobsForWorkerQuery } from '../../queries/admin/getJobsForWorkerQuery';
import { CustomError } from '../../utils/custom_error';

export const getJobsForWorkerController = async (req: Request, res: Response, next: NextFunction): Promise<ReturnType<any>> => {
  try {
    const { id } = req.params;

    const jobs = await getJobsForWorkerQuery(Number(id) || 0);

    if (!jobs) {
      throw new CustomError(404, 'The worker uou are searching for does not exist.');
    }

    return res.json({ msg: 'The jobs for the worker does returned successfully', data: jobs });
  } catch (error) {
    next(error);
  }
};
