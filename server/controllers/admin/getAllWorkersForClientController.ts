import { Request, Response, NextFunction } from 'express';

import { getAllWorkersForClientQuery } from '../../queries/admin/getAllWorkersForClientQuery';
import { CustomError } from '../../utils/custom_error';

export const getAllWorkersForClientController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const workers = await getAllWorkersForClientQuery(Number(id) || 0);

    if (workers.length === 0) {
      throw new CustomError(404, 'The user you are searching for does not exist!');
    }

    return res.json({ msg: 'The clients were returned successfully!', data: workers });
  } catch (error) {
    next(error);
  }
};
