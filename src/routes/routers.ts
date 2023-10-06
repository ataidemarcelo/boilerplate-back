import { Router } from 'express';

import healthRouter from './status.route';

const routers = Router();

routers.use(healthRouter);

export default routers;
