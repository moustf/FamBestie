import { Job } from '../../models/jobs';

export const getTotalNumOfJobsQuery = () => Job.count();
