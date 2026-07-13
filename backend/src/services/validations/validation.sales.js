const { productsModel } = require('../../models');

const validateProductId = (req, res, next) => {
  const products = req.body;
  const validate = products.every((product) => 'productId' in product);
  if (!validate) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  next();
};

const validateQuantity = (req, res, next) => {
  const products = req.body;
  const validate = products.every((product) => 'quantity' in product);
  if (!validate) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  if (products.every((product) => product.quantity <= 0)) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

const validateProductIdIsNotFound = async (req, res, next) => {
  const products = req.body;
  const validateProduct = await Promise.all(products.map(async (product) => {
    const { productId } = product;
    const idProduct = await productsModel.findByIdModel(productId);
    return idProduct;
  })).then((validate) => validate.every((existProduct) => existProduct));
  if (!validateProduct) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = {
  validateProductId,
  validateQuantity,
  validateProductIdIsNotFound,
};