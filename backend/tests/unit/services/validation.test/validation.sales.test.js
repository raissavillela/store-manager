const sinon = require('sinon');
const chai = require('chai');
const sinonchai = require('sinon-chai');
const { expect } = require('chai');

chai.use(sinonchai);

const {
  validateProductId,
  validateQuantity,
  validateProductIdIsNotFound } = require('../../../../src/services/validations/validation.sales');
const productServices = require('../../../../src/services/products.service');

describe('Testa a validação de vendas', function () {
  it('Testa se retorna Erro 400', async function () {
    const req = { body: [{ quantity: 1 }] };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };
    await validateProductId(req, res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"productId" is required' });
  });
  it('Testa se retorna Erro 404', async function () {
    const req = { body: [{ productId: 999, quantity: 1 }] };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };
    productServices.findByIdService = async () => null;
    await validateProductIdIsNotFound(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });
  it('Testa se retorna Erro 422 se a quantitdade < 1', async function () {
    const req = { body: [{ productId: 2, quantity: 0 }] };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };
    await validateQuantity(req, res);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"quantity" must be greater than or equal to 1' });
  });

  afterEach(function () {
    sinon.restore();
  });
});