import { Request, Response, NextFunction } from 'express';

import { totals } from '../../queries/admin/getTotalNumberOfWorkersQuery';
import { getTotalNumberOfClientsQuery } from '../../queries/admin/getTotalNumberOfClientsQuery';
import { getTotalIncomeQuery } from '../../queries/admin/getTotalIncomeQuery';
import { getTotalNumOfJobsQuery } from '../../queries/admin/getTotalNumOfJobsQuery';

export const getTotalsStatisticsController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const [totalNumOfHiredWorkers, totalNumOfUnemployedWorkers] = await totals();
    const totalNumOfClients = await getTotalNumberOfClientsQuery();
    const totalIncome = await getTotalIncomeQuery();
    const totalNumOfJobs = await getTotalNumOfJobsQuery();

    res.json({
      msg: 'The statistics did return successfully!',
      data: {
        totalIncome,
        totalNumOfHiredWorkers,
        totalNumOfUnemployedWorkers,
        totalNumOfClients,
        totalNumOfJobs,
      },
    });
  } catch (error) {
    next(error);
  }
};
