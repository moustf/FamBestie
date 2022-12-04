import { User } from './users';
import { Job } from './jobs';
import { Worker } from './workers';
import { UserWorker } from './user_worker';

// ? Relations

// * User => UserWorker.
User.hasMany(UserWorker, { foreignKey: 'user_id', sourceKey: 'id' });
UserWorker.belongsTo(User, { foreignKey: 'user_id' });

// * Worker => UserWorker.
Worker.hasMany(UserWorker, { foreignKey: 'worker_id', sourceKey: 'id' });
UserWorker.belongsTo(Worker, { foreignKey: 'worker_id' });

// * Job => UserWorker.
Job.hasOne(UserWorker, { foreignKey: 'job_id', sourceKey: 'id' });
UserWorker.belongsTo(Job, { foreignKey: 'job_id' });

export const models = {
  User,
  Worker,
  Job,
  UserWorker,
};
