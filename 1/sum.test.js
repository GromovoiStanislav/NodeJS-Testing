const sum = require('./sum');

test('сумма 1 + 2 равна 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('сумма -1 + 1 равна 0', () => {
  expect(sum(-1, 1)).toBe(0);
});

test('сумма 0 + 0 равна 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('пример использования toBe', () => {
  const a = 5;
  const b = 5;
  const array1 = [1, 2, 3];
  const array2 = [1, 2, 3];

  expect(a).toBe(5); // true
  expect(b).toBe(5); // true
  expect(array1).toBe(array1); // true, потому что это разные объекты в памяти
  expect(array1).not.toBe(array2); // false, потому что это разные объекты в памяти
});

test('пример использования toEqual', () => {
  const a = 5;
  const b = 5;
  const array1 = [1, 2, 3];
  const array2 = [1, 2, 3];

  expect(a).toEqual(5); // true
  expect(b).toEqual(5); // true
  expect(array1).toEqual(array1); // true, потому что содержимое массивов одинаково
  expect(array1).toEqual(array2); // true, потому что содержимое массивов одинаково
});
