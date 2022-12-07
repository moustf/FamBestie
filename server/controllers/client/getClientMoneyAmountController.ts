import { Response, NextFunction } from 'express';

import { getClientMoneyAmountQuery } from '../../queries/client/getClientMoneyAmountQuery';
import { CustomError } from '../../utils/custom_error';

export const getClientMoneyAmountController = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { id } = req.user;

    const money = await getClientMoneyAmountQuery(Number(id) || 0);

    if (money.length === 0) {
      throw new CustomError(404, 'The user you are searching for does not exist!');
    }

    return res.json({ msg: 'The amount of money has returned successfully!', data: money });
  } catch (error) {
    next(error);
  }
};
