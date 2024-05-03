const route = require('express').Router();
const { productsController } = require('../controllers');

route.get('/', productsController.findAllController);

route.get('/:id', productsController.findByIdController);

module.exports = route;
