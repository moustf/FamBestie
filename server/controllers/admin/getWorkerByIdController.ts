import { Request, Response, NextFunction } from 'express';

import { getWorkerByIdQuery } from '../../queries/admin/getWorkerByIdQuery';
import { CustomError } from '../../utils/custom_error';

export const getWorkerByIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    // ? The thing here is kind of simple validation, when the user has enter something invalid, the
    // ? || operator will take the zero the return nothing.
    const worker = await getWorkerByIdQuery(Number(id) || 0);

    if (!worker) {
      throw new CustomError(404, 'The worker is not found!');
    }

    res.json({ msg: 'The worker you ask for has returned successfully!', data: worker });
  } catch (error) {
    next(error);
  }
};
