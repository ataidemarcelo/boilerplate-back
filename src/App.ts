import express from 'express';
import morgan from 'morgan';

import routers from './routes/routers';

import { getCors, getHelmet, getLimiter } from './middlewares/middlewares';

const rateLimit = {
  timeRequests: 15 * 60 * 1000,
  maxRequests: 100
};

class App {
  public app: express.Express;

  constructor () {
    this.app = express();

    this.setupMiddlewares();
  }

  private setupMiddlewares (): void {
    this.app.use(morgan('dev'));
    this.app.use(getCors);
    this.app.use(getLimiter(rateLimit.timeRequests, rateLimit.maxRequests));
    this.app.use(getHelmet());
    this.app.use(express.json({ limit: '1kb' }));

    this.app.use(routers);
  }
}

const AppInstance = new App();

export const { app } = AppInstance;

export default AppInstance;
