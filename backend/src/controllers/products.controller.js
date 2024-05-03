const { productsService } = require('../services');
const mapStatusHttp = require('../utils/mapStatusHttp');

const findAllController = async (_req, res) => {
  try {
    const products = await productsService.findAllService();
    const { status, data } = products;
    return res.status(mapStatusHttp(status)).json(data);
  } catch (error) {
    console.error(error.message);
  }
};

const findByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productsService.findByIdService(id);
    const { status, data } = product;
    return res.status(mapStatusHttp(status)).json(data);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  findAllController,
  findByIdController,
};
