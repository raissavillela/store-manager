const route = require('express').Router();

const { salesController } = require('../controllers');
const { validateProductId,
  validateQuantity,
  validateProductIdIsNotFound } = require('../services/validations/validation.sales');

route.get('/', salesController.findAllController);

route.get('/:id', salesController.findByIdController);

route.post(
  '/',
  validateProductId,
  validateQuantity,
  validateProductIdIsNotFound,
  salesController.insertController,
);

module.exports = route;
