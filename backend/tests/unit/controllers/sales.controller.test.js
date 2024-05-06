const sinon = require('sinon');
const salesController = require('../../../src/controllers/sales.controller');
const salesServices = require('../../../src/services/sales.services');

describe('Testa na camada salesController', function () {
  it('Testa se retorn error se não houver venda', async function () {
    sinon.stub(salesServices, 'findByIdService').returns({ status: 'NOT_FOUND', data: { message: 'Sale not found' } });
    const req = { params: { id: 300 } };
    const res = { status: sinon.stub(), json: sinon.stub() };

    await salesController.findByIdController(req, res);

    sinon.assert.calledWith(res.status, 404);
  });
});
