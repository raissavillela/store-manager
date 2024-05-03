const express = require('express');
const { productsRoute, salesRoute } = require('./routes');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

app.use('/products', productsRoute);
app.use('/sales', salesRoute);

module.exports = app;
