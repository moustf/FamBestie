import { Request, Response } from 'express';

const dummyController = (req: Request, res: Response): Response<any, Record<string, any>> => (
  res.json({ msg: 'The app is running correctly!' })
);

export default dummyController;
