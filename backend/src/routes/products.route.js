const route = require('express').Router();
const { productsController } = require('../controllers');
const { validateName } = require('../services/validations/validation.products');

route.get('/', productsController.findAllController);

route.get('/:id', productsController.findByIdController);

route.post('/', validateName, productsController.insertController);

module.exports = route;
