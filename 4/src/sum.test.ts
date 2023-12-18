import sum from './sum';

test('сумма 1 + 2 равна 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('сумма -1 + 1 равна 0', () => {
  expect(sum(-1, 1)).toBe(0);
});

test('сумма 0 + 0 равна 0', () => {
  expect(sum(0, 0)).toBe(0);
});
