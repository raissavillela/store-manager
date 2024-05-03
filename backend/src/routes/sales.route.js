const route = require('express').Router();

const { salesController } = require('../controllers');

route.get('/', salesController.findAllController);

route.get('/:id', salesController.findByIdController);

module.exports = route;
