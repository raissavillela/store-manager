const { salesService } = require('../services');
const mapStatusHttp = require('../utils/mapStatusHttp');
const mapStatusHTTP = require('../utils/mapStatusHttp');

const findAllController = async (_req, res) => {
  try {
    const sales = await salesService.findAllService();
    const { status, data } = sales;
    return res.status(mapStatusHttp(status)).json(data);
  } catch (error) {
    console.error(error.message);
  }
};

const findByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = await salesService.findByIdService(id);
    const { status, data } = sale;
    return res.status(mapStatusHttp(status)).json(data);
  } catch (error) {
    console.error(error.message);
  }
};

const insertController = async (req, res) => {
  try {
    const newSale = req.body;
    const { status, data } = await salesService.insertService(newSale);
    console.log(newSale);
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error.message);
  }
};

module.exports = {
  findAllController,
  findByIdController,
  insertController,
};