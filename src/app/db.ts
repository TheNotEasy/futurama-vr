import { DataTypes, Model, Sequelize } from 'sequelize';

import pg from 'pg';

import { v4 as uuid } from 'uuid';

export const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
  dialect: 'postgres',
  dialectModule: pg
});

export interface IRequest extends Model {
  first_name: string,
  second_name: string,
  last_name: string,
  phone: string,
  date: string,
  time: string,
  length: number,
  party: number,
  payment: 'online' | 'cash',

  id: string
  state: string
  type: number
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
    type: DataTypes.STRING,
    defaultValue: 'waiting',
  },
  type: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})

export const Admin = sequelize.define('Admin', {
  username: DataTypes.STRING,
  password: DataTypes.STRING,  // Eh...
})

Request.beforeCreate(request => {
  (request as IRequest).id = uuid();
})

void sequelize.sync();

