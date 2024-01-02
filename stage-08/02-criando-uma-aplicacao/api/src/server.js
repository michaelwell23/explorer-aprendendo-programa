const PORT = 3333;
const express = require('express');

const app = express();

app.get('/message/:id/', (req, res) => {
  const { id, user } = req.params;

  res.send(`Id da mensagem: ${id}`);
});

app.get('/users', (req, res) => {
  const { page, limit } = req.query;

  res.send(`Página: ${page}. Mostrar: ${limit}`);
});

app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));
