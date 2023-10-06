import request from 'supertest';

import { app } from '../src/App';

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
});
