import dotenv from 'dotenv';

dotenv.config();

const {
  NODE_ENV: nodeEnv,
  DATABASE_DEV: dbDev,
  DATABASE_TEST: dbTest,
  DATABASE_URL: dbProduction,
  SECRET_KEY: secretKey,
} = process.env;

export const baseConfig = {
  nodeEnv,
  dbDev,
  dbTest,
  dbProduction,
  secretKey,
};
