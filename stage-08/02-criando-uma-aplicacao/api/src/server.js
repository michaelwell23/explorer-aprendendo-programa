const PORT = 3333;

const express = require('express');

const routes = require('./routes/index.routes');

const app = express();
app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));
