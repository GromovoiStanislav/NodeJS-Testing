const axios = require('axios');
const fetchData = require('./api');

test('запрос должен возвращать статус 200 и правильные данные', async () => {
  const data = await fetchData();

  expect(data).toBeDefined(); // Проверка, что данные определены (не null и не undefined)
  expect(data.userId).toBe(1);
  expect(data.id).toBe(1);
  expect(data.title).toBe('delectus aut autem');
  expect(data.completed).toBe(false);
});

test('запрос к https://jsonplaceholder.typicode.com/todos/1 возвращает статус 200 и правильные данные', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();

  expect(response.status).toBe(200);
  expect(data).toEqual({
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  });
});

test('GET https://jsonplaceholder.typicode.com/todos/1 должен возвращать статус код 200 и правильные данные', async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/todos/1'
  );

  expect(response.status).toBe(200);
  expect(response.data).toEqual({
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  });
});
