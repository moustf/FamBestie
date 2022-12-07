import { Request, Response, NextFunction } from 'express';

import { getJobsByCategoryQuery } from '../../queries/admin/getJobsByCategoryQuery';
import { CustomError } from '../../utils/custom_error';

export const getJobsByCategoryController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { category } = req.params;

    const jobs = await getJobsByCategoryQuery(category as string);

    if (jobs.length === 0) {
      throw new CustomError(404, 'The category you searched for does not exist!');
    }

    return res.json({ msg: 'The jobs of the category you searched for returned successfully!', data: jobs });
  } catch (error) {
    next(error);
  }
};
