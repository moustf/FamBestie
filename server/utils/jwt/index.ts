import { sign, verify, Secret } from 'jsonwebtoken';

import { baseConfig } from '../../config/environments';
import { TokenPayload } from '../interfaces/tokenPayload';

const { secretKey } = baseConfig;

export const signToken = (payload: TokenPayload) => new Promise<ReturnType<any>>((resolve, reject) => {
  sign(payload, secretKey as Secret, (err, token) => {
    if (err) {
      reject(err);
    } else {
      resolve(token);
    }
  });
});

export const verifyToken = (token: string) => new Promise<ReturnType<any>>((resolve, reject) => {
  verify(token, secretKey as Secret, (err, decoded) => {
    if (err) {
      reject(err);
    } else {
      resolve(decoded);
    }
  });
});
