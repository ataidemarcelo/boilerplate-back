import express from 'express';
import morgan from 'morgan';

import routers from './routes/routers';

import { getCors } from './middlewares/middlewares';

class App {
  public app: express.Express;

  constructor () {
    this.app = express();
    this.app.use(morgan('dev'));

    this.app.use(getCors);
    this.app.use(express.json({ limit: '1kb' }));

    this.app.use(routers);
  }
}

const AppInstance = new App();

export const { app } = AppInstance;

export default AppInstance;
