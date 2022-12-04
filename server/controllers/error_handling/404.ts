import { Request, Response } from 'express';

export const notFoundController = (req: Request, res: Response): Response<any> => (
  res.status(404).json({ msg: 'The route you are asking for does not exist!' })
);
