import { models } from '../models';
import { seedDataFiles } from './seed/';
import { baseConfig } from '../config/environments';
import { sequelize } from './connection';

const {
  User, Worker, Job, UserWorker,
} = models;
const { nodeEnv } = baseConfig;
const {
  users,
  workers,
  jobs,
  userWorker,
} = seedDataFiles;

export const buildSeed = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(users, { validate: true });
  await Worker.bulkCreate(workers, { validate: true });
  await Job.bulkCreate(jobs, { validate: true });
  await UserWorker.bulkCreate(userWorker, { validate: true });
};

if (nodeEnv !== 'test') {
  buildSeed();
}
