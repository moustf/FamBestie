import { DataTypes } from 'sequelize';
import { sequelize } from '../database/connection';

export const Job = sequelize.define('Job', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  details: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  stars: {
    type: DataTypes.INTEGER,
  },
  review_text: {
    type: DataTypes.TEXT,
  },
  working_hours: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  bill: {
    type: DataTypes.INTEGER,
  },
});
