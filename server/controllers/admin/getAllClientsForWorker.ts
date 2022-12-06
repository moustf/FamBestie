import { Request, Response, NextFunction } from 'express';

import { CustomError } from '../../utils/custom_error';
import { getAllClientsForWorkerQuery } from '../../queries/admin/getAllClientsForWorkerQuery';

export const getAllClientsForWorkerController = async (req: Request, res: Response, next: NextFunction): Promise<ReturnType<any>> => {
  try {
    const { id } = req.params;

    const clients = await getAllClientsForWorkerQuery(Number(id) || 0);

    if (!clients) {
      throw new CustomError(404, 'The worker you are searching for does not exist!');
    }

    return res.json({ msg: 'The clients data has successfully been returned!', data: clients });
  } catch (error) {
    next(error);
  }
};
