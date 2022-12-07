import { Worker } from '../../models/workers';

export const getAllWorkersQuery = () => Worker.findAll();
