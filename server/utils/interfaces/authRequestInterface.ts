import { Request } from 'express';

export interface AuthRequestInterface extends Request {
  user: {
    id: number,
    name: string,
    role: string,
  }
}
