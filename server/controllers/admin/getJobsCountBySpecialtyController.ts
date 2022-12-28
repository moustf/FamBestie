import { Request, Response, NextFunction } from 'express';

import { getJobsCountBySpecialtyQuery } from '../../queries/admin/getJobsCountBySpecialtyQuery';
import { specialtySchema } from '../../utils/validation/admin/workersSpecialtyValidation';
import { CustomError } from '../../utils/custom_error';

export const getJobsCountBySpecialtyController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { specialty } = req.query;

    await specialtySchema.validate({ specialty });

    const count = await getJobsCountBySpecialtyQuery(specialty as any);

    return res.json({ msg: 'The jobs count did return successfully!', data: count });
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new CustomError(400, 'The provided specialty is invalid!'));
    }

    next(error);
  }
};
