const Joi = require('joi');

const addProductSchema = Joi.object({
  productId: Joi.number().integer(),
  name: Joi.string(),
});

module.exports = {
  addProductSchema,
};