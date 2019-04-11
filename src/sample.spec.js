const sayHello = require('./sample');

describe('sayHello', () => {

  it('should say hello for World', () => {
      const result = sayHello('World');
      expect(result).toBe('Hello, World!');
  });

});