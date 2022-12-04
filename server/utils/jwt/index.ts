import { sign, verify, Secret } from 'jsonwebtoken';

import { baseConfig } from '../../config/environments';
import { TokenPayloadInterface } from '../interfaces/tokenPayloadInterface';

const { secretKey } = baseConfig;

export const signToken = (payload: TokenPayloadInterface) => new Promise((resolve, reject) => {
  sign(payload, secretKey as Secret, (err, token) => {
    if (err) {
      reject(err);
    } else {
      resolve(token);
    }
  });
});

export const verifyToken = (token: string) => new Promise((resolve, reject) => {
  verify(token, secretKey as Secret, (err, decoded) => {
    if (err) {
      reject(err);
    } else {
      resolve(decoded);
    }
  });
});
