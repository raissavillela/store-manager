const { expect } = require('chai');
const sinon = require('sinon');

const { salesDB, oneSale, insertSale } = require('../../mocks/sales.mock');
const salesServices = require('../../../src/services/sales.services');
const salesModel = require('../../../src/models/sales.model');

describe('Teste na camada salesService', function () {
  it('Teste no retorno na lista de vendas', async function () {
    sinon.stub(salesModel, 'findAllModel').resolves(salesDB);
    const salesArr = await salesServices.findAllService();
    expect(salesArr.data).to.be.an('array');
  });
  it('Testa o retorno de uma venda específica', async function () {
    sinon.stub(salesModel, 'findByIdModel').resolves(oneSale);
    const saleSearch = await salesServices.findByIdService(1);
    expect(saleSearch.data).to.be.an('object');
    expect(saleSearch.data).to.be.deep.equal(oneSale);
  });
  it('Testa se retorna o objeto após cadastrar a venda', async function () {
    sinon.stub(salesModel, 'insertModel').resolves(insertSale);

    const insert = [
      {
        productId: 1,
        quantity: 10,
      },
    ];
    await salesServices.insertService(insert);
  });

  afterEach(function () {
    sinon.restore();
  });
});
