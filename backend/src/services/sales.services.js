const { salesModel } = require('../models');

const findAllService = async () => {
  const sales = await salesModel.findAllModel();
  if (sales && sales.length > 0) {
    return { status: 'SUCCESSFULL', data: sales };
  }
  return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
};

const findByIdService = async (saleId) => {
  const sale = await salesModel.findByIdModel(saleId);
  if (sale) {
    return { status: 'SUCCESSFULL', data: sale };
  }
  return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
};

const insertService = async (insertSale) => {
  const newSale = await salesModel.insertModel(insertSale);
  return { status: 'CREATED', data: newSale };
};

module.exports = {
  findAllService,
  findByIdService,
  insertService,
};
