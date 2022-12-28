import { Request, Response, NextFunction } from 'express';

import { CustomError } from '../../utils/custom_error';
import { specialtySchema } from '../../utils/validation/admin/workersSpecialtyValidation';
import { getWorkerBySpecialtyQuery } from '../../queries/admin/getWorkerBySpecialtyQuery';

export const getWorkersBySpecialtyController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { specialty } = req.query;

    await specialtySchema.validate({ specialty });

    const workers = await getWorkerBySpecialtyQuery(specialty as any);

    return res.json({ msg: 'The workers who share the specialty did return successfully!', data: workers });
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new CustomError(400, 'The provided specialty is invalid!'));
    }

    next(error);
  }
};
