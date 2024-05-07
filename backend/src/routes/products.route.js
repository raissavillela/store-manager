const route = require('express').Router();
const { productsController } = require('../controllers');
const { validateName } = require('../services/validations/validation.products');

route.get('/', productsController.findAllController);

route.get('/:id', productsController.findByIdController);

route.post('/', validateName, productsController.insertController);

route.put('/:id', validateName, productsController.updateController);

route.delete('/:id', productsController.deleteController);

module.exports = route;
