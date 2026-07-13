const { expect } = require('chai');
const sinon = require('sinon');

const { salesDB, oneSale, insertSale } = require('../../mocks/sales.mock');
const salesServices = require('../../../src/services/sales.services');
const salesModel = require('../../../src/models/sales.model');

describe('Testa a camada salesService', function () {
  it('Testa o retorno na lista de vendas', async function () {
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

    const newSale = [
      {
        productId: 1,
        quantity: 10,
      },
    ];
    const updatedSale = await salesServices.insertService(newSale);

    expect(updatedSale.status).to.be.equal('CREATED');
    expect(updatedSale.data).to.be.an('object');
    expect(updatedSale.data).to.have.property('id');
    expect(updatedSale.data).to.have.property('itemsSold');
    expect(updatedSale.data.itemsSold).to.be.an('array');
  });
  it('Testa se retorna erro se a venda não existir na lista', async function () {
    sinon.stub(salesModel, 'findAllModel').resolves(null);

    const sale = await salesServices.findAllService();

    expect(sale.status).to.be.deep.equal('NOT_FOUND');
    expect(sale.data).to.deep.equal({ message: 'Sale not found' });
  });
  it('Testa se retorna erro se a venda não existir', async function () {
    sinon.stub(salesModel, 'findByIdModel').resolves(null);

    const sale = await salesServices.findByIdService();

    expect(sale.status).to.be.deep.equal('NOT_FOUND');
    expect(sale.data).to.deep.equal({ message: 'Sale not found' });
  });

  afterEach(function () {
    sinon.restore();
  });
});
