import { baseConfig } from '../config/environments';
import { sequelize } from './connection';

const { nodeEnv } = baseConfig;

export const buildModels = async () => sequelize.sync({ force: true });

if (nodeEnv !== 'test') {
  buildModels();
}
