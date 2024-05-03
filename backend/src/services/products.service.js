const { productsModel } = require('../models');

const findAllService = async () => {
  const products = await productsModel.findAllModel();
  if (products && products.length > 0) {
    return { status: 'SUCCESSFULL', data: products };
  }
  return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
};

const findByIdService = async (productId) => {
  const product = await productsModel.findByIdModel(productId);
  if (product) {
    return { status: 'SUCCESSFULL', data: product };
  }
  return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
};

module.exports = {
  findAllService,
  findByIdService,
};
