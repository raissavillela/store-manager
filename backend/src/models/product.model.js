const connection = require('./connection');

const findAllModel = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

const findByIdModel = async (productId) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [productId]);
  return product;
};

module.exports = {
  findAllModel,
  findByIdModel,
};
