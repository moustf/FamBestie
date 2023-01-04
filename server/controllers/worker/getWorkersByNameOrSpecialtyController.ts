import { Request, Response, NextFunction } from 'express';

import { CustomError } from '../../utils/custom_error';
import { nameAndSpecialtySchema } from '../../utils/validation/worker/workerNameAndSpecialty';
import { getWorkersByNameOrSpecialtyQuery } from '../../queries/worker/getWorkersByNameOrSpecialtyQuery';

export const getWorkersByNameOrSpecialtyController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, specialty } = req.query;
    await nameAndSpecialtySchema.validate({ name, specialty });

    const workers = await getWorkersByNameOrSpecialtyQuery(name as any, specialty as any);

    if (workers.length === 0) {
      throw new CustomError(404, 'The name you are searching for does not exist!');
    }

    return res.json({ msg: 'The workers did return successfully!', data: workers });
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new CustomError(400, 'The specialty you are searching with is invalid!'));
    }

    next(error);
  }
};
