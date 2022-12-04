import { DataTypes } from 'sequelize';
import { sequelize } from '../database/connection';

export const UserWorker = sequelize.define('user_worker', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
}, {
  freezeTableName: true,
  tableName: 'user_worker',
});
