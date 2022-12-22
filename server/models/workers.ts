import { DataTypes } from 'sequelize';
import { sequelize } from '../database/connection';

export const Worker = sequelize.define('Worker', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: {
        args: [['male', 'female']],
        msg: 'Please select either male or female!',
      },
    },
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_of_birth: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: {
        args: [['hired', 'unemployed']],
        msg: 'Please select either hired or unemployed!',
      },
    },
  },
  specialty: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: {
        args: [['driver', 'housekeeper', 'babysitter', 'trainer', 'guard']],
        msg: 'Please select a valid specialty!',
      },
    },
  },
  years_of_experience: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  hiring_date: {
    type: DataTypes.DATEONLY,
  },
});
