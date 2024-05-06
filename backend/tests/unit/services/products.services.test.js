const { expect } = require('chai');
const sinon = require('sinon');
const { productsDB } = require('../../mocks/products.mocks');
const productsModel = require('../../../src/models/product.model');
const productsService = require('../../../src/services/products.service');

describe('Teste da camada productServices', function () {
  it('Teste no retorno na lista de produtos', async function () {
    sinon.stub(productsModel, 'findAllModel').resolves(productsDB);
    const productsArr = await productsService.findAllService();
    expect(productsArr.data).to.be.an('array');
  });
  it('Testa se retorna erro quando o produto não existe', async function () {
    sinon.stub(productsModel, 'findByIdModel').resolves(null);
    const productSearch = await productsService.findByIdService(null);
    expect(productSearch).to.be.deep.equal({ status: 'NOT_FOUND', data: { message: 'Product not found' } });
  });
  
  afterEach(function () {
    sinon.restore();
  });
});
