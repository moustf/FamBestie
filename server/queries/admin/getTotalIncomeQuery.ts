import { Job } from '../../models/jobs';

export const getTotalIncomeQuery = () => Job.sum('bill');
