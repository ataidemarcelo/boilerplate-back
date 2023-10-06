import { Router } from 'express';

const statusRouter = Router();

statusRouter.get('/status', (_req, res) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.status(200).send('(HEALTH) - API no ar!!!');
});

export default statusRouter;
