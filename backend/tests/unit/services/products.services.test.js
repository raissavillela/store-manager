const { expect } = require('chai');
const sinon = require('sinon');
const { productsDB, productFromModel } = require('../../mocks/products.mocks');
const productsModel = require('../../../src/models/product.model');
const productsService = require('../../../src/services/products.service');

describe('Testa a camada productServices', function () {
  it('Testa o retorno na lista de produtos', async function () {
    sinon.stub(productsModel, 'findAllModel').resolves(productsDB);
    const productsArr = await productsService.findAllService();
    expect(productsArr.data).to.be.an('array');
  });
  it('Testa se retorna erro quando o produto não existe', async function () {
    sinon.stub(productsModel, 'findByIdModel').resolves(null);
    const productSearch = await productsService.findByIdService(null);
    expect(productSearch).to.be.deep.equal({ status: 'NOT_FOUND', data: { message: 'Product not found' } });
  });
  it('Testa se não retorna um objeto com o produto', async function () {
    sinon.stub(productsModel, 'deleteModel').resolves(null);
    const productDeleted = await productsService.deleteService(88);
    expect(productDeleted.status).to.be.equal('NOT_FOUND');
  });
  it('Testa se retorna o produto atualizado', async function () {
    sinon.stub(productsModel, 'updateModel').resolves(productFromModel);
    const product = { id: 1, name: 'Martelo do Thor ' };
    const updatedProduct = await productsService.updateService(product);

    expect(updatedProduct.status).to.be.equal('SUCCESSFULL');
    expect(updatedProduct.data).to.be.an('object');
  });
  it('Testa se retorna erro caso o produto não exista na lista', async function () {
    sinon.stub(productsModel, 'findAllModel').resolves(null);
    const product = await productsService.findAllService();
    expect(product).to.deep.equal({ status: 'NOT_FOUND', data: { message: 'Product not found' } });
  });
  
  afterEach(function () {
    sinon.restore();
  });
});
