import { sayHello } from '../src/server';

describe('Test', () => {
  describe('function sayHello', () => {
    it('should return message "Hello, Marcelo!"', () => {
      const res = sayHello('Marcelo');
      expect(res).toBe('Hello, Marcelo');
    });
  });
});
