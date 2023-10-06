import type * as express from 'express';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';

const getCors: express.RequestHandler = (_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');

  next();
};

const getHelmet = (): express.RequestHandler => {
  return helmet();
};

const getLimiter = (timeRequests: number, maxRequests: number): express.RequestHandler => {
  return rateLimit({
    windowMs: timeRequests,
    max: maxRequests
  });
};

export {
  getCors,
  getHelmet,
  getLimiter
};
