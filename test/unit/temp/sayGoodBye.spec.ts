import { sayGoodBye } from '../../../src/sayGoodBye';

describe('Unit Tests', () => {
  describe('function sayGoodBye', () => {
    it('should return message "GoodBye, Marcelo!"', () => {
      const response = sayGoodBye('Marcelo');

      expect(response).toBe('GoodBye, Marcelo!!!');
    });
  });
});
