import { Job } from '../../models/jobs';
import { Specialty } from '../../utils/interfaces/specialty';

export const getJobsCountBySpecialtyQuery = (specialty: Specialty) => Job.count({
  where: {
    field: specialty,
  },
});
