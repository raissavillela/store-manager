const { productsModel } = require('../models');
const { insertModel } = require('../models/product.model');

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

const insertService = async (name) => {
  const newProduct = await insertModel(name);
  return { status: 'CREATED', data: newProduct };
};

const updateService = async (name, id) => {
  const updatedProduct = await productsModel.updateModel(id, name);
  return updatedProduct
    ? { status: 'SUCCESSFULL', data: updatedProduct }
    : { status: 'NOT_FOUND', data: { message: 'Product not found' } };
};

const deleteService = async (productId) => {
  const deletedProduct = await productsModel.deleteModel(productId);
  return deletedProduct && deletedProduct.affectedRows > 0
    ? { status: 'NO_CONTENT' }
    : { status: 'NOT_FOUND', data: { message: 'Product not found' } };
};


module.exports = {
  findAllService,
  findByIdService,
  insertService,
  updateService,
  deleteService,
};
