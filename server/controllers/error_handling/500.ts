/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { Request, Response, NextFunction } from 'express';

import { CustomErrorInterface } from '../../utils/interfaces/customErrorInterface';

export const serverErrorController = (error: CustomErrorInterface, req: Request, res: Response, next: NextFunction): Response<any> => {
  console.log(error, 'Server Error Controller!');
  const { status, msg } = error;

  return res.status(status).json({ msg });
};
