import { DataTypes } from 'sequelize';
import { sequelize } from '../database/connection';

export const User = sequelize.define('User', {
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
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: {
        args: [['admin', 'client']],
        msg: 'Must be either admin, client, or worker',
      },
    },
  },
  visibility: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});
