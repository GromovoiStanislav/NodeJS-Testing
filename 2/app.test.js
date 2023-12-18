const request = require('supertest');
const server = require('./app');

test('GET /api/users возвращает статус код 200 и список пользователей', async () => {
  const response = await request(server).get('/api/users');

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('users');
  expect(Array.isArray(response.body.users)).toBe(true);

  expect(response.body).toEqual({ users: [{ id: 1, name: 'John' }] });
  expect(response.body.users).toEqual([{ id: 1, name: 'John' }]);
  expect(response.body.users.length).toEqual(1);
  expect(response.body.users[0].name).toEqual('John');
  expect(response.body.users[0].id).toEqual(1);
});

test('GET / возвращает статус код 200 и Hello World!', async () => {
  const response = await request(server).get('/');

  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello World!');
});

// Закрытие сервера после завершения всех тестов
afterAll((done) => {
  server.close(done);
});
