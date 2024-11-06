import { DataTypes, Model, Sequelize } from 'sequelize';

import {v4 as uuid} from 'uuid';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

export interface IRequest extends Model {
  first_name: string,
  second_name: string,
  last_name: string,
  phone: string,
  date: typeof DataTypes.DATE,
  time: typeof DataTypes.TIME,
  length: number,
  party: number,
  payment: 'online' | 'cash',

  id: string
  state: 'declined' | 'approved' | 'waiting'
}

export const Request = sequelize.define('Request', {
  first_name: DataTypes.STRING,
  second_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  phone: DataTypes.STRING,
  date: DataTypes.DATE,
  time: DataTypes.TIME,
  length: DataTypes.INTEGER,
  party: DataTypes.INTEGER,
  payment: DataTypes.ENUM('online', 'cash'),
  hints: DataTypes.TEXT,

  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
  },
  state: {
    type: DataTypes.ENUM('declined', 'approved', 'waiting'),
    defaultValue: 'waiting',
  },
  type: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})


Request.beforeCreate(request => {
  (request as IRequest).id = uuid();
})

void sequelize.sync();
