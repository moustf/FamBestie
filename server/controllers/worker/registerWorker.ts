import { Request, Response, NextFunction } from 'express';

import { registerWorkerQuery } from '../../queries/worker/registerWorkerQuery';
import { doesWorkerExistQuery } from '../../queries/worker/doesWorkerExist';
import { registerWorkerSchema } from '../../utils/validation/admin/registerWorkerValidation';
import { CustomError } from '../../utils/custom_error';

export const registerWorkerController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      name,
      email,
      phone,
      location,
      gender,
      specialty,
      dateOfBirth,
      yearsOfExperience,
    } = await registerWorkerSchema.validate(req.body);

    const doesWorkerExist = await doesWorkerExistQuery(email);

    if (doesWorkerExist?.getDataValue('id')) {
      throw new CustomError(403, 'The user is already exists!');
    }

    const worker = await registerWorkerQuery({
      name,
      email,
      phone,
      location,
      gender,
      specialty,
      date_of_birth: dateOfBirth,
      years_of_experience: yearsOfExperience,
      state: 'unemployed',
      hiring_date: null,
    });

    if (!worker.getDataValue('id')) {
      throw new CustomError(400, 'The worker has entered an invalid data!');
    }

    return res.status(201).json({ msg: 'The worker has registered successfully!', data: worker });
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new CustomError(400, 'The worker has entered an invalid data!'));
    }
    next(error);
  }
};
