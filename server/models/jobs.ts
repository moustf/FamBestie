import { DataTypes } from 'sequelize';
import { sequelize } from '../database/connection';

export const Job = sequelize.define('Job', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  field: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: {
        args: [['driver', 'housekeeper', 'babysitter', 'trainer', 'guard']],
        msg: 'Please select a valid field!',
      },
    },
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
    defaultValue: 0,
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
