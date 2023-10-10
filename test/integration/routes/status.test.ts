import request from 'supertest';

import { app } from '../../../src/App';

describe('Intergration Tests', () => {
  describe('GET /status', () => {
    it('should test if the "routers" are healthy', async () => {
      const response = await request(app)
        .get('/status');

      expect(response.status).toBe(200);
      expect(response.body.message).toBe('(HEALTH) - API no ar!!!');
    });
  });
});
