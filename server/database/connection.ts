import { Sequelize } from 'sequelize';
import { baseConfig } from '../config/environments';

const {
  dbDev,
  dbTest,
  dbProduction,
  nodeEnv,
} = baseConfig;

let connectionString: string | undefined = '';
let ssl: boolean | object = false;

if (nodeEnv === 'development') {
  connectionString = dbDev;
} else if (nodeEnv === 'test') {
  connectionString = dbTest;
} else if (nodeEnv === 'production') {
  connectionString = dbProduction;
  ssl = {
    rejectAuthorization: false,
  };
} else {
  throw new Error('Invalid NODE_ENV variable or no value is given at all!');
}

if (!connectionString) {
  throw new Error('Database url is not a valid postgres url or there is no url is given at all!');
}

export const sequelize = new Sequelize(connectionString, {
  dialectOptions: { ssl }, logging: false,
});
