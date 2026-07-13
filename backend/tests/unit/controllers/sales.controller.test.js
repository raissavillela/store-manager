const sinon = require('sinon');
const { expect } = require('chai');
const salesController = require('../../../src/controllers/sales.controller');
const salesServices = require('../../../src/services/sales.services');
const { oneSale } = require('../../mocks/sales.mock');
const { productsDB } = require('../../mocks/products.mocks');
const { productsModel } = require('../../../src/models');

describe('Testa a camada salesController', function () {
  it('Testa se retorna erro se não houver venda', async function () {
    sinon.stub(salesServices, 'findByIdService').returns({ status: 'NOT_FOUND', data: { message: 'Sale not found' } });
    const req = { params: { id: 300 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.findByIdController(req, res);

    sinon.assert.calledWith(res.status, 404);
  });
  it('Testa se retorna um objeto com venda específica', async function () {
    sinon.stub(salesServices, 'findByIdService').returns({ status: 'SUCCESSFULL', data: oneSale });
    const req = { params: { id: 2 } };
    const res = {
      status: sinon.stub(),
      json: sinon.stub(),
    };
    await salesController.findByIdController(req, res);
    sinon.assert.calledWith(res.status, 200);
  });
  it('Testa se retorna uma lista com produtos', async function () {
    sinon.stub(salesServices, 'findAllService').resolves([productsDB]);
    const productArr = await productsModel.findAllModel();
    expect(productArr).to.be.an('array');
  });
  it('Testa se retorna um objeto com a venda cadastrada', async function () {
    sinon.stub(salesServices, 'findByIdService').returns({ status: 'SUCCESSFULL', data: oneSale });
    const req = { params: { id: 1 } };
    const res = {
      status: sinon.stub(),
      json: sinon.spy(),
    };
    await salesController.findByIdController(req, res);
    sinon.assert.calledWith(res.status, 200);
  });

  afterEach(function () {
    sinon.restore();
  });
});