const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  res.json({ users: [{ id: 1, name: 'John' }] });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


