import { sayHello } from '../../../src/sayHello';

describe('Unit Tests', () => {
  describe('function sayHello', () => {
    it('should return message "Hello, Marcelo!"', () => {
      const response = sayHello('Marcelo');

      expect(response).toBe('Hello, Marcelo!');
    });
  });
});
