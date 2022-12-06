import { Request, Response, NextFunction } from 'express';

import { getAllClientsQuery } from '../../queries/admin/getAllClientsQuery';

export const getAllClientsController = async (req: Request, res: Response, next: NextFunction): Promise<ReturnType<any>> => {
  try {
    const clients = await getAllClientsQuery();

    res.json({ msg: 'The clients have been returned successfully!', data: clients });
  } catch (error) {
    next(error);
  }
};
