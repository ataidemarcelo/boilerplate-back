import { sayGoodBye } from '../src/server';

describe('Test', () => {
  describe('function sayGoodBye', () => {
    it('should return message "GoodBye, Marcelo!"', () => {
      const res = sayGoodBye('Marcelo');
      expect(res).toBe('GoodBye, Marcelo');
    });
  });
});
