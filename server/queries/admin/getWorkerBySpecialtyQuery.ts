import { Worker } from '../../models/workers';
import { Specialty } from '../../utils/interfaces/specialty';

export const getWorkerBySpecialtyQuery = (specialty: Specialty) => Worker.findAll({
  where: {
    specialty,
  },
});
