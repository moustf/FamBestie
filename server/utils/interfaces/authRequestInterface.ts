import { Request } from 'express';

export interface AuthRequestInterface extends Request {
  userData: {
    id: number,
    name: string,
    role: string,
  }
}
