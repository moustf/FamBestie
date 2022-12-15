import { Response } from 'express';

export const userDataController = async (req: any, res: Response) => (
  res.json({ msg: 'The data does returned successfully!', data: req.user })
);
