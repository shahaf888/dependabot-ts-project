import { sayHello } from '../src/utils';

test('sayHello returns a greeting', () => {
  const result = sayHello('test');
  expect(result).toMatch(/hello test/i);
});
