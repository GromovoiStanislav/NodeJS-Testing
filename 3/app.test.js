test('GET / возвращает статус код 200 и Hello World!', async () => {
  const response = await fetch('http://localhost:3000/');

  expect(response.status).toBe(200);
  expect(await response.text()).toBe('Hello World!');
});

test('GET /api/users возвращает статус код 200 и список пользователей', async () => {
  const response = await fetch('http://localhost:3000/api/users');

  expect(response.status).toBe(200);

  const body = await response.json();

  expect(body).toHaveProperty('users');
  expect(Array.isArray(body.users)).toBe(true);

  expect(body).toEqual({ users: [{ id: 1, name: 'John' }] });
  expect(body.users).toEqual([{ id: 1, name: 'John' }]);
  expect(body.users.length).toEqual(1);
  expect(body.users[0].name).toEqual('John');
  expect(body.users[0].id).toEqual(1);
});
