import { Sequelize } from 'sequelize';
import * as config from '../config/database';

const sequelize = new Sequelize(config);

const testConnection = async (): Promise<any> => {
  try {
    await sequelize.authenticate();
    // console.log('Connection has been established successfully!!!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnection()
  .then((_ret) => { console.log('Connection has been established successfully.'); })
  .catch((err) => { console.log(err); });

export default sequelize;
