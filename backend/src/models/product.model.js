const connection = require('./connection');

const findAllModel = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

const findByIdModel = async (productId) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [productId]);
  return product;
};

const insertModel = async (name) => {
  const [product] = await connection
    .execute('INSERT INTO products (name) VALUES (?)', [name]);
  return { id: product.insertId, name };
};

module.exports = {
  findAllModel,
  findByIdModel,
  insertModel,
};
