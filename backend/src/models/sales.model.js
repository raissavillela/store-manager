const connection = require('./connection');

const findAllModel = async () => {
  const [sales] = await connection.execute(`
  SELECT 
    sales.id AS saleId,
    sales.date,
    sales_products.product_id AS productId,
    sales_products.quantity 
    FROM sales
    JOIN sales_products ON sales.id = sales_products.sale_id
    ORDER BY sales.id ASC, sales_products.product_id
    ASC;`);
  return sales;
};

const findByIdModel = async (saleId) => {
  const [sale] = await connection.execute(`
  SELECT
  sales.date,
  sales_products.product_id AS productId,
  sales_products.quantity
  FROM sales
  JOIN sales_products ON sales.id = sales_products.sale_id
  WHERE sales.id = ?
  ORDER BY sales.id ASC,
  sales_products.product_id ASC`, [saleId]);
  return sale && sale.length > 0 ? sale.map(({ date, productId, quantity }) => ({
    date, productId, quantity,
  })) : null;
};

const insertModel = async (salesData) => {
  const [newSale] = await connection.execute('INSERT INTO sales (date) VALUES (NOW())');
  const insertNewSale = salesData.map(({ productId, quantity }) => connection
    .execute(
      'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [newSale.insertId, productId, quantity],
    ));
  await Promise.all(insertNewSale);
  return {
    id: newSale.insertId,
    itemsSold: salesData,
  };
};

module.exports = {
  findAllModel,
  findByIdModel,
  insertModel,
};
