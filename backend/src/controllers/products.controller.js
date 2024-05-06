const { productsService } = require('../services');
const mapStatusHttp = require('../utils/mapStatusHttp');

const findAllController = async (_req, res) => {
  try {
    const products = await productsService.findAllService();
    const { status, data } = products;
    return res.status(mapStatusHttp(status)).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error });
  }
};

const findByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productsService.findByIdService(id);
    const { status, data } = product;
    return res.status(mapStatusHttp(status)).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const insertController = async (req, res) => {
  try {
    const { name } = req.body;
    const createdProduct = await productsService.insertService(name);
    const { status, data } = createdProduct;
    return res.status(mapStatusHttp(status)).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  findAllController,
  findByIdController,
  insertController,
};
