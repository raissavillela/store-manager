const sinon = require('sinon');
const productController = require('../../../src/controllers/products.controller');
const productServices = require('../../../src/services/products.service');
const { productsFromModel, productsDB, productFromModel } = require('../../mocks/products.mocks');

describe('Testa a camada productController', function () {
  it('Testa se retorna um objeto com produto específico', async function () {
    sinon.stub(productServices, 'findByIdService').returns({ status: 'SUCCESSFULL', data: productsFromModel });
    const req = { params: { id: 2 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productController.findByIdController(req, res);
    sinon.assert.calledWith(res.status, 200);
  });
  it('Testa se retorna um array com os produtos', async function () {
    sinon.stub(productServices, 'findAllService').returns({ status: 'SUCCESSFULL', data: productsDB });
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productController.findAllController(req, res);
    sinon.assert.calledWith(res.status, 200);
  });
  it('Testa se retorna erro caso o produto não seja encontrado', async function () {
    sinon.stub(productServices, 'findByIdService').returns({ status: 'NOT_FOUND', data: { message: 'Product not found' } });
    const req = { params: { id: 300 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productController.findByIdController(req, res);
    sinon.assert.calledWith(res.status, 404);
  });
  it('Testa se retorna Erro 404 ao deletar produto inexistente', async function () {
    sinon.stub(productServices, 'deleteService').returns({ status: 'NOT_FOUND', data: { message: 'Product not found' } });
    const req = { params: { id: 999 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productController.deleteController(req, res);
    sinon.assert.calledWith(res.status, 404);
  });
  it('Testa se atualiza um produto', async function () {
    sinon.stub(productServices, 'updateService').returns({ status: 'SUCCESSFULL', data: productFromModel });
    const req = { params: { id: 1 }, body: { name: 'Manópola do Thanos' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productController.updateController(req, res);
    sinon.assert.calledWith(res.status, 200);
  });
  afterEach(function () {
    sinon.restore();
  });
});