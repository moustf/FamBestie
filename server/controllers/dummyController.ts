import { Request, Response } from 'express';

export const dummyController = (req: Request, res: Response):Response<any, Record<string, any>> => (
  res.json({ msg: 'The app is running correctly!' })
);
