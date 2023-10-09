import 'dotenv/config';
import { type Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER ?? 'root',
  password: process.env.DB_PASS ?? 'secret',
  database: process.env.DB_NAME ?? 'db-api',
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT) ?? 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z'
  },
  // logging: (...msg) => { console.log(msg); }
  logging: false
};

module.exports = config;
