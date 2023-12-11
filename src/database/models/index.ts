import { Sequelize } from 'sequelize';
import * as config from '../config/database';

const sequelize = new Sequelize(config);

const testConnection = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw error;
  }
};

if (process.env.NODE_ENV === 'development') {
  testConnection()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch((err) => {
      console.error('Error during database connection.', err);
    });
}

export default sequelize;
