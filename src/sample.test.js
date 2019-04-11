const sayHello = require('./sample');

test('sayHello should say hello for World', () => {
    const result = sayHello('World');
    expect(result).toBe('Hello, World!');
});
