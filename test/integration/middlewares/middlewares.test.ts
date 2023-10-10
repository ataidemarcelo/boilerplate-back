import request from 'supertest';

import { app } from '../../../src/App';
import { getLimiter } from '../../../src/middlewares/middlewares';

const rateLimit = {
  timeRequests: 60 * 1000,
  maxRequests: 5
};

const URLPath = '/test_rate_limit';

describe('Integration Tests', () => {
  describe('CORS Middleware', () => {
    it('should test whether CORS is enabled CORS', async () => {
      app.get('/test_cors', (_req, res) => {
        res.send();
      });

      const response = await request(app)
        .get('/test_cors');

      const allowedMethods = response.headers['access-control-allow-methods'].split(',');

      expect(response.headers['access-control-allow-origin']).toBe('*');
      expect(response.headers['access-control-allow-headers']).toBe('*');
      expect(allowedMethods).toEqual(expect.arrayContaining(['GET', 'POST', 'DELETE', 'OPTIONS', 'PUT', 'PATCH']));
    });
  });

  describe('EXPRESS JSON Middleware', () => {
    it('should return 413 when JSON body is too large', async () => {
      const largeObject = {} as any;
      for (let i = 0; i < 1200; i++) {
        largeObject[i] = 'a';
      }

      app.post('/test_json', (req, res) => {
        res.status(200).json({ message: req.body.message });
      });

      const response = await request(app)
        .post('/test_json')
        .send(largeObject);

      expect(response.status).toEqual(413);
    });
  });

  describe('HELMET Middleware', () => {
    it('should check helmet settings', async () => {
      app.get('/', (req, res) => {
        res.status(200).end();
      });

      const response = await request(app).get('/');

      expect(response.headers).not.toHaveProperty('x-powered-by');
      expect(response.headers).toHaveProperty('x-xss-protection');
      expect(response.headers).toHaveProperty('content-security-policy');
      expect(response.headers['x-dns-prefetch-control']).toBe('off');
    });
  });

  describe('RATE LIMITER Middleware', () => {
    it('should return 429 an error if it exceeds the limit', async () => {
      app.use(getLimiter(rateLimit.timeRequests, rateLimit.maxRequests));
      app.get(URLPath, (_req, res) => {
        res.send();
      });

      for (let i = 0; i < rateLimit.maxRequests; i++) {
        const res = await request(app).get('/test_rate_limit');
        expect(res.status).toEqual(200);
      }

      const response = await request(app)
        .get(URLPath);

      expect(response.status).toBe(429);
    });
  });
});
